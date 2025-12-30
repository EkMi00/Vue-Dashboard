<script lang="ts" setup>
import type { ThemeName } from "@@/composables/useTheme"
import { useTheme } from "@@/composables/useTheme"
import { MagicStick } from "@element-plus/icons-vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()
const { themeList, activeThemeName, setTheme } = useTheme()

function getThemeTitle(themeName: ThemeName) {
  const themeMap: Record<ThemeName, string> = {
    "normal": t("theme.default"),
    "dark": t("theme.dark"),
    "dark-blue": t("theme.darkBlue")
  }
  return themeMap[themeName] || themeName
}
</script>

<template>
  <el-dropdown trigger="click">
    <div>
      <el-tooltip effect="dark" :content="t('theme.mode')" placement="bottom">
        <el-icon :size="20">
          <MagicStick />
        </el-icon>
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="(theme, index) in themeList"
          :key="index"
          :disabled="activeThemeName === theme.name"
          @click="(e: MouseEvent) => setTheme(e, theme.name)"
        >
          <span>{{ getThemeTitle(theme.name) }}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
