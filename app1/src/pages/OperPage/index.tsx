import MicroAppJumpButton from "@/components/Button/MicroAppJumpButton";
import { useModel } from "@umijs/max";
import { Button, Space } from "antd";


export default function OperPage() {
  const masterProps = useModel('@@qiankunStateFromMaster');

  console.log("masterProps", masterProps);
  

  function jump() {
    masterProps.setGlobalQiankunData({
      ...masterProps.qiankunData,
      app2: {
        ...masterProps.qiankunData.app2,
        data: {
          name: "我是来自app1 的数据"
        }
      }
    })
  }

  function clearApp2Data() {
    masterProps.setGlobalQiankunData({
      ...masterProps.qiankunData,
      app2: undefined
    })
  }
  function clearAppData() {
    masterProps.setGlobalQiankunData(undefined)
  }

  const openDrawer = () => { 
    masterProps.openDrawer({
      name: "app2",
      url: "/app2"
    })
  }

  return <>
    <div>{masterProps?.qiankunData?.app1 && JSON.stringify(masterProps.qiankunData.app1)}</div>
    <Space>
      <MicroAppJumpButton appName='app2' to='/app2/home' btnProps={{ children: "跳转应用2", type: "link" }}></MicroAppJumpButton>
      <Button onClick={jump}>保存全局数据</Button>
      <Button onClick={clearApp2Data}>清空app2数据</Button>
      <Button onClick={clearAppData}>清空全局数据</Button>
      <Button onClick={openDrawer}>打开app2侧边栏</Button>
    </Space>
  </>
}