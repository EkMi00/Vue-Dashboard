<script lang="ts" setup>
import { Document } from "@element-plus/icons-vue"
import { useI18n } from "vue-i18n"

const { locale } = useI18n()

const languages = [
  { value: "en", label: "English" },
  { value: "zh-cn", label: "中文" }
]

const currentLanguage = computed(() => {
  const lang = languages.find(l => l.value === locale.value)
  return lang?.label || "English"
})

function setLanguage(lang: string) {
  locale.value = lang
  localStorage.setItem("language", lang)
}
</script>

<template>
  <el-dropdown trigger="click">
    <div>
      <el-tooltip effect="dark" :content="currentLanguage" placement="bottom">
        <el-icon :size="20">
          <Document />
        </el-icon>
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="lang in languages"
          :key="lang.value"
          :disabled="locale === lang.value"
          @click="setLanguage(lang.value)"
        >
          <span>{{ lang.label }}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
