export default {
  dashboard: {
    adminWelcome: "欢迎来到「Admin」角色专属首页",
    editorWelcome: "欢迎来到「Editor」角色专属首页"
  },
  navigation: {
    logout: "退出登录"
  },
  theme: {
    mode: "主题模式",
    default: "默认",
    dark: "黑暗",
    darkBlue: "深蓝"
  },
  searchMenu: {
    confirm: "确认",
    switch: "切换",
    close: "关闭",
    total: "共 {count} 项"
  },
  notify: {
    title: "消息通知",
    notification: "通知",
    message: "消息",
    todo: "待办",
    viewHistory: "查看{type}历史"
  },
  routes: {
    dashboard: "首页",
    demo: "示例集合",
    unocss: "UnoCSS",
    elementPlus: "Element Plus",
    vxeTable: "Vxe Table",
    level2: "二级路由",
    level3: "三级路由",
    composableDemo: "组合式函数",
    useFetchSelect: "useFetchSelect",
    useFullscreenLoading: "useFullscreenLoading",
    useWatermark: "useWatermark",
    link: "文档链接",
    chineseDoc: "中文文档",
    tutorialDoc: "新手教程",
    permission: "权限演示",
    pageLevel: "页面级",
    buttonLevel: "按钮级"
  },
  tagsView: {
    refresh: "刷新",
    close: "关闭",
    closeOthers: "关闭其它",
    closeAll: "关闭所有",
    scrollLeft: "向左滚动标签（超出最大宽度可点击）",
    scrollRight: "向右滚动标签（超出最大宽度可点击）"
  },
  screenfull: {
    fullscreen: "全屏",
    exitFullscreen: "退出全屏",
    contentLarge: "内容区放大",
    contentRestore: "内容区复原",
    contentFullscreen: "内容区全屏",
    browserNotSupported: "您的浏览器无法工作"
  },
  settings: {
    layoutConfig: "布局配置",
    featureConfig: "功能配置",
    showTagsView: "显示标签栏",
    showLogo: "显示 Logo",
    fixedHeader: "固定 Header",
    showFooter: "显示页脚",
    showNotify: "显示消息通知",
    showThemeSwitch: "显示切换主题按钮",
    showScreenfull: "显示全屏按钮",
    showSearchMenu: "显示搜索按钮",
    cacheTagsView: "是否缓存标签栏",
    showWatermark: "开启系统水印",
    showGreyMode: "显示灰色模式",
    showColorWeakness: "显示色弱模式",
    reset: "重 置"
  },
  login: {
    username: "用户名",
    password: "密码",
    code: "验证码",
    loginButton: "登 录",
    usernameRequired: "请输入用户名",
    passwordRequired: "请输入密码",
    passwordLength: "长度在 8 到 16 个字符",
    codeRequired: "请输入验证码",
    validationFailed: "表单校验不通过"
  },
  permission: {
    pageDescription: "当前页面只有「Admin」角色可见，切换角色后将不能进入该页面",
    directiveExample: "权限指令 v-permission 示例",
    functionExample: "权限函数 checkPermission 示例",
    functionDescription: "Element Plus 的 el-tab-pane 和 el-table-column 以及其它动态渲染 DOM 的场景不适合使用 v-permission 这种情况下你可以通过 v-if + checkPermission 来实现"
  },
  switchRoles: {
    yourRole: "你的角色：",
    switchUser: "切换用户："
  },
  watermark: {
    exampleTitle: "示例说明",
    exampleDescription: "通过调用 composable 开启或关闭水印，支持局部、全局、自定义样式（颜色、透明度、字体大小、字体、倾斜角度等），并自带防御（防删、防隐藏）和自适应功能",
    exampleCard: "示例",
    localWatermark: "创建局部水印",
    localWatermarkNoDefense: "创建无防御局部水印",
    clearLocal: "清除局部水印",
    globalWatermark: "创建全局水印",
    globalWatermarkNoDefense: "创建无防御全局水印",
    clearGlobal: "清除全局水印"
  },
  messages: {
    operationSuccess: "操作成功",
    deleteSuccess: "删除成功",
    formValidationFailed: "表单校验不通过",
    routeGuardError: "路由守卫发生错误",
    notSystemApi: "非本系统的接口",
    confirm: "确定",
    cancel: "取消",
    prompt: "提示",
    deleteUserConfirm: "正在删除用户：{username}，确认删除？",
    searchMenuNoName: "无法通过搜索进入该菜单，请为对应的路由设置唯一的 Name",
    searchMenuDynamicParams: "该菜单有必填的动态参数，无法通过搜索进入"
  },
  panyNotifications: {
    starTitle: "为爱发电！",
    starMessage: "所有源码均免费开源，如果对你有帮助，欢迎点个 Star 支持一下！",
    starLink: "点击传送",
    storeTitle: "懒人服务？",
    storeMessage: "不想自己动手，但想移除 TS 或其他模块？也有懒人套餐！",
    storeLink: "点击获取",
    mobileTitle: "移动端",
    mobileMessage: "如果你有移动端 H5 需求，试试新的开源模板 MobVue！",
    mobileLink: "点击查看"
  }
}
