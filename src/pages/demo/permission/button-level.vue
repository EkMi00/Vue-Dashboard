<script lang="ts" setup>
import { checkPermission } from "@@/utils/permission"
import { useI18n } from "vue-i18n"
import SwitchRoles from "./components/SwitchRoles.vue"

const { t } = useI18n()
</script>

<template>
  <div class="app-container">
    <SwitchRoles />
    <el-card :header="t('permission.directiveExample')" shadow="never" class="margin-top-20">
      <el-button v-permission="['admin']">
        admin
      </el-button>
      <el-button v-permission="['admin', 'editor']">
        admin 和 editor
      </el-button>
    </el-card>
    <el-card :header="t('permission.functionExample')" shadow="never" class="margin-top-20">
      <el-text type="warning" size="large">
        {{ t("permission.functionDescription") }}
      </el-text>
      <el-tabs type="border-card" class="margin-top-20">
        <el-tab-pane v-if="checkPermission(['admin'])" label="admin">
          <el-tag size="large">
            v-if="checkPermission(['admin'])"
          </el-tag>
        </el-tab-pane>
        <el-tab-pane v-if="checkPermission(['admin', 'editor'])" label="admin 和 editor">
          <el-tag size="large">
            v-if="checkPermission(['admin', 'editor'])"
          </el-tag>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.margin-top-20 {
  margin-top: 20px;
}
</style>
