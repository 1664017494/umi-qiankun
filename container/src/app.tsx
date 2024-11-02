// 运行时配置

import { RunTimeLayoutConfig } from "@umijs/max";

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}
export const layout:RunTimeLayoutConfig  = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    layout: "top",
    contentStyle: {
      flex: 1,
      padding: 0
    }
  };
};

// src/app.ts
export const qiankun = {
  apps: [
    {
      name: 'app1',
      entry: '//localhost:9001',
    },
    {
      name: 'app2',
      entry: '//localhost:9002',
    },
  ]
};
