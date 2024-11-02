import { MicroApp, MicroAppWithMemoHistory, useModel } from "@umijs/max";
import { useState, type FC } from "react";
import styles from "./index.less"
import { Drawer } from "antd";

interface IMicroContainerProps {
  appName?: string
}

const MicroContainer: FC<IMicroContainerProps> = (props: IMicroContainerProps) => {
  const [open, setOpen] = useState(false);
  const [openAppInfo, setOpenAppInfo] = useState<any | undefined>();

  const openDrawer = (props: any) => {
    setOpen(true)
    setOpenAppInfo(props)
  }


  const qiankun = useModel("qiankun")
  return <>
    <div className={styles["qiankun-container"]}>
      <div className={styles.content}>全局状态：{JSON.stringify(qiankun.qiankunData)}</div>
      <div className={styles["micro-container"]}>
        {
          props.appName ?
            <MicroApp
              name={props.appName}
              base={`/${props.appName}`}
              qiankunData={qiankun.qiankunData}
              setGlobalQiankunData={qiankun.setGlobalQiankunData}
              openDrawer={openDrawer}
            ></MicroApp>
            :
            <></>
        }
      </div>
    </div>

    <Drawer open={open} onClick={() => setOpen(false)} width={800}>
      {/* {openAppInfo && <MicroApp name={openAppInfo.name} base={`/${openAppInfo.name}`}></MicroApp>} */}
      <MicroApp name="app2" base="/app2"></MicroApp>
    </Drawer>
  </>
}

export default MicroContainer;