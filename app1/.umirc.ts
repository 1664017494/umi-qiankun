import { defineConfig } from '@umijs/max';

const routes = [
  {
    path: '/',
    redirect: '/oper',
  },
  {
    name: "首页",
    path: "/oper",
    component: "./OperPage"
  },
  {
    name: "错误页",
    path: "/error",
    component: "./ErrorPage"
  },
]

const newRoutes:any[]= [];

 ["/", "/layout"].forEach(item => {
  routes.forEach(route => {
    newRoutes.push({
      ...route,
      redirect: route.redirect ? item === "/" ? route.redirect : item + route.redirect : undefined,
      path: item + route.path,
      layout: item === "/" ? false : undefined
    })
  })
})

export default defineConfig({
  base: "/app1",
  qiankun: {
    slave: {}
  },
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: newRoutes,
  npmClient: 'pnpm',
});

