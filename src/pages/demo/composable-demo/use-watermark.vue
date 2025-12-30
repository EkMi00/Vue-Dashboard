<script lang="ts" setup>
import { useWatermark } from "@@/composables/useWatermark"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const localRef = useTemplateRef("localRef")

const { setWatermark, clearWatermark } = useWatermark(localRef)

const { setWatermark: setGlobalWatermark, clearWatermark: clearGlobalWatermark } = useWatermark()
</script>

<template>
  <div class="app-container">
    <el-alert
      :title="t('watermark.exampleTitle')"
      type="primary"
      :description="t('watermark.exampleDescription')"
      show-icon
    />
    <el-card :header="t('watermark.exampleCard')" shadow="never">
      <div ref="localRef" class="local" />
      <template #footer>
        <el-button-group>
          <el-button type="primary" @click="setWatermark(t('watermark.localWatermark'), { color: '#409eff' })">
            {{ t("watermark.localWatermark") }}
          </el-button>
          <el-button type="warning" @click="setWatermark(t('watermark.localWatermarkNoDefense'), { color: '#e6a23c', defense: false })">
            {{ t("watermark.localWatermarkNoDefense") }}
          </el-button>
          <el-button type="danger" @click="clearWatermark">
            {{ t("watermark.clearLocal") }}
          </el-button>
        </el-button-group>
        <el-button-group>
          <el-button type="primary" @click="setGlobalWatermark(t('watermark.globalWatermark'), { color: '#409eff' })">
            {{ t("watermark.globalWatermark") }}
          </el-button>
          <el-button type="warning" @click="setGlobalWatermark(t('watermark.globalWatermarkNoDefense'), { color: '#e6a23c', defense: false })">
            {{ t("watermark.globalWatermarkNoDefense") }}
          </el-button>
          <el-button type="danger" @click="clearGlobalWatermark">
            {{ t("watermark.clearGlobal") }}
          </el-button>
        </el-button-group>
      </template>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.el-alert {
  margin-bottom: 20px;
}

.el-card {
  margin-bottom: 20px;
}

.local {
  height: 35vh;
  border: 2px dashed var(--el-color-primary);
}

.el-button-group {
  margin-right: 12px;
  margin-bottom: 5px;
}
</style>
