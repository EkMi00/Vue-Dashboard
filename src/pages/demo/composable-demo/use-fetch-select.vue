<script lang="ts" setup>
import { useFetchSelect } from "@@/composables/useFetchSelect"
import { useI18n } from "vue-i18n"
import { getSelectDataApi } from "./apis/use-fetch-select"

const { t } = useI18n()

const { loading, options, value } = useFetchSelect({
  api: getSelectDataApi
})
</script>

<template>
  <div class="app-container">
    <el-alert
      :title="t('useFetchSelect.exampleTitle')"
      type="primary"
      :description="t('useFetchSelect.description')"
      show-icon
    />
    <el-card :header="t('useFetchSelect.selectExample')" shadow="never" v-loading="loading">
      <el-select v-model="value" filterable>
        <el-option v-for="(item, index) in options" v-bind="item" :key="index" :placeholder="t('useFetchSelect.placeholder')" />
      </el-select>
    </el-card>
    <el-card :header="t('useFetchSelect.selectV2Example')" shadow="never" v-loading="loading">
      <el-select-v2 v-model="value" :options="options" filterable :placeholder="t('useFetchSelect.placeholder')" />
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
</style>
