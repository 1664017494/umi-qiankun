import { useState } from "react";


// 函数名一定要大写 useState 才不会报错
export default function Qiankun() {
  const [qiankunData, setQiankunData] = useState<any>({
    app1: {},
    app2: {}
  });

  // 这里做一层拦截，方便后面进行限制
  const setGlobalQiankunData = (data: any) => {
    setQiankunData(data)
  }

  return {
    qiankunData,
    setGlobalQiankunData
  }
}