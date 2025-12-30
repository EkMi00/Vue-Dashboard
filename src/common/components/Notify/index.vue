<script lang="ts" setup>
import type { NotifyItem } from "./type"
import { Bell } from "@element-plus/icons-vue"
import { useI18n } from "vue-i18n"
import { messageData, notifyData, todoData } from "./data"
import List from "./List.vue"

const { t } = useI18n()

type TabName = "notification" | "message" | "todo"

interface DataItem {
  name: TabName
  type: "primary" | "success" | "warning" | "danger" | "info"
  list: NotifyItem[]
}

/** 角标当前值 */
const badgeValue = computed(() => data.value.reduce((sum, item) => sum + item.list.length, 0))

/** 角标最大值 */
const badgeMax = 99

/** 面板宽度 */
const popoverWidth = 350

/** 当前 Tab */
const activeName = ref<TabName>("notification")

/** 所有数据 */
const data = ref<DataItem[]>([
  // 通知数据
  {
    name: "notification",
    type: "primary",
    list: notifyData
  },
  // 消息数据
  {
    name: "message",
    type: "danger",
    list: messageData
  },
  // 待办数据
  {
    name: "todo",
    type: "warning",
    list: todoData
  }
])

function handleHistory() {
  ElMessage.success(t("notify.viewHistory", { type: t(`notify.${activeName.value}`) }))
}
</script>

<template>
  <div class="notify">
    <el-popover placement="bottom" :width="popoverWidth" trigger="click">
      <template #reference>
        <el-badge :value="badgeValue" :max="badgeMax" :hidden="badgeValue === 0">
          <el-tooltip effect="dark" :content="t('notify.title')" placement="bottom">
            <el-icon :size="20">
              <Bell />
            </el-icon>
          </el-tooltip>
        </el-badge>
      </template>
      <template #default>
        <el-tabs v-model="activeName" class="demo-tabs" stretch>
          <el-tab-pane v-for="(item, index) in data" :key="index" :name="item.name">
            <template #label>
              {{ t(`notify.${item.name}`) }}
              <el-badge :value="item.list.length" :max="badgeMax" :type="item.type" />
            </template>
            <el-scrollbar height="400px">
              <List :data="item.list" />
            </el-scrollbar>
          </el-tab-pane>
        </el-tabs>
        <div class="notify-history">
          <el-button link @click="handleHistory">
            {{ t("notify.viewHistory", { type: t(`notify.${activeName}`) }) }}
          </el-button>
        </div>
      </template>
    </el-popover>
  </div>
</template>

<style lang="scss" scoped>
.notify-history {
  text-align: center;
  padding-top: 12px;
  border-top: 1px solid var(--el-border-color);
}
</style>
