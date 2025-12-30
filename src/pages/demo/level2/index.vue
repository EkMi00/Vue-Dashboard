<script lang="ts" setup>
import { useI18n } from "vue-i18n"

const { t } = useI18n()
</script>

<template>
  <div class="app-container">
    <h4>
      <span>
        {{ t("level2.cacheNote") }}
      </span>
      <el-link
        type="primary"
        href="https://github.com/un-pany/v3-admin-vite/blob/main/src/router/config.ts"
        target="_blank"
      >
        src/router/config.ts
      </el-link>
    </h4>
    <el-card :header="t('level2.cardHeader')">
      <router-view />
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
h4 {
  display: flex;
  align-items: center;
}

.el-link {
  font-size: 18px;
}
</style>
