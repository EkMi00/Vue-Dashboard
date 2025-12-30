import i18n from "@/i18n"

function initStarNotification() {
  setTimeout(() => {
    ElNotification({
      title: i18n.global.t("panyNotifications.starTitle"),
      type: "success",
      message: h(
        "div",
        null,
        [
          h("div", null, i18n.global.t("panyNotifications.starMessage")),
          h("a", { style: "color: teal", target: "_blank", href: "https://github.com/un-pany/v3-admin-vite" }, i18n.global.t("panyNotifications.starLink"))
        ]
      ),
      duration: 0,
      position: "bottom-right"
    })
  }, 0)
}

function initStoreNotification() {
  setTimeout(() => {
    ElNotification({
      title: i18n.global.t("panyNotifications.storeTitle"),
      type: "warning",
      message: h(
        "div",
        null,
        [
          h("div", null, i18n.global.t("panyNotifications.storeMessage")),
          h("a", { style: "color: teal", target: "_blank", href: "https://github.com/un-pany/v3-admin-vite/issues/225" }, i18n.global.t("panyNotifications.storeLink"))
        ]
      ),
      duration: 0,
      position: "bottom-right"
    })
  }, 500)
}

function initMobileNotification() {
  setTimeout(() => {
    ElNotification({
      title: i18n.global.t("panyNotifications.mobileTitle"),
      type: "primary",
      message: h(
        "div",
        null,
        [
          h("div", null, i18n.global.t("panyNotifications.mobileMessage")),
          h("a", { style: "color: teal", target: "_blank", href: "https://github.com/un-pany/v3-admin-vite/issues/225" }, i18n.global.t("panyNotifications.mobileLink"))
        ]
      ),
      duration: 0,
      position: "bottom-right"
    })
  }, 1000)
}

/** 作者的小心思 */
export function usePany() {
  return { initStarNotification, initStoreNotification, initMobileNotification }
}
