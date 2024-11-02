import { defineConfig } from '@umijs/max';

export default defineConfig({
  qiankun: {
    master: {
      // apps: [
      //   { name: 'app1', entry: '//localhost:9001', microAppProps: { autoSetLoading: true } },
      //   { name: 'app2', entry: '//localhost:9002', microAppProps: { autoSetLoading: true } },
      // ],
      defaultErrorBoundary: "@/defaultErrorBoundary"
    }
  },
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '处理路由页面',
      path: '/main', // 必须有
      component: "./Main",
    },
    {
      name: 'app1',
      path: '/app1/*', // 必须有
      component: "./App1"
    },
    {
      name: 'app2',
      path: '/app2/*', // 必须有
      component: "./App2"
    }
  ],
  npmClient: 'pnpm'
});

