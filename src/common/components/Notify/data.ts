import type { NotifyItem } from "./type"
import i18n from "@/i18n"

const t = i18n.global.t

export const notifyData: NotifyItem[] = [
  {
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
    title: t("notifyData.v3ViteLaunch"),
    datetime: t("notifyData.twoYearsAgo"),
    description: t("notifyData.v3ViteDesc")
  },
  {
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
    title: t("notifyData.v3Launch"),
    datetime: t("notifyData.threeYearsAgo"),
    description: t("notifyData.v3Desc")
  }
]

export const messageData: NotifyItem[] = [
  {
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
    title: t("messageData.trumanShow"),
    description: t("messageData.trumanQuote"),
    datetime: "1998-06-05"
  },
  {
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
    title: t("messageData.chineseOdyssey"),
    description: t("messageData.odysseyQuote"),
    datetime: "1995-02-04"
  },
  {
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
    title: t("messageData.totoro"),
    description: t("messageData.totoroQuote"),
    datetime: "1988-04-16"
  }
]

export const todoData: NotifyItem[] = [
  {
    title: t("todoData.taskName"),
    description: t("todoData.lazyMessage"),
    extra: t("todoData.notStarted"),
    status: "info"
  },
  {
    title: t("todoData.taskName"),
    description: t("todoData.lazyMessage"),
    extra: t("todoData.inProgress"),
    status: "primary"
  },
  {
    title: t("todoData.taskName"),
    description: t("todoData.lazyMessage"),
    extra: t("todoData.overdue"),
    status: "danger"
  }
]
