// vue3路由的配置信息
const routes = [
  // {
  //   // 默认路由重定向到主页
  //   path: '/',
  //   redirect:'/App'
  // },
  // {
  //   name:'App',
  //   path: '/App',
  //   component:() => import('../App')
  // },
  {
    name: 'ComputedTest', // 计算属性
    path: '/ComputedTest',
    component: () => import('../views/ComputedTest.vue')
  },
  {
    name: 'WatchedTest', // 数据监视
    path: '/WatchedTest',
    component: () => import('../views/WatchedTest.vue')
  },
  {
    name: 'LifeCycleTest', // 生命周期
    path: '/LifeCycleTest',
    component: () => import('../views/LifeCycleTest.vue')
  },
  {
    name: 'HooksTest', // 自定义hook函数
    path: '/HooksTest',
    component: () => import('../views/HooksTest.vue')
  },
  {
    name: 'toRefs', // 自定义hook函数
    path: '/toRefs',
    component: () => import('../views/toRefs.vue')
  },
];

export default routes
