<script lang="ts" setup>
import { useI18n } from "vue-i18n"

defineOptions({
  name: "Level3"
})

const { t } = useI18n()

const text = ref("")
</script>

<template>
  <div class="app-container">
    <el-card :header="t('level3.cardHeader')">
      <el-input v-model="text" :placeholder="t('level3.inputPlaceholder')" />
    </el-card>
  </div>
</template>
