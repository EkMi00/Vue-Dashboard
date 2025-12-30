<script lang="ts" setup>
import { useI18n } from "vue-i18n"
import SwitchRoles from "./components/SwitchRoles.vue"

const { t } = useI18n()
</script>

<template>
  <div class="app-container">
    <SwitchRoles />
    <el-card shadow="never" class="content">
      {{ t("permission.pageDescription") }}
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.content {
  margin-top: 20px;
}
</style>
