import { MicroAppWithMemoHistory, useModel } from "@umijs/max";
import { useState, type FC } from "react";
import styles from "./index.less"
import { Drawer } from "antd";

interface IMicroContainerProps {
  appName?: string
  url?: string
}

const MicroContainer: FC<IMicroContainerProps> = (props: IMicroContainerProps) => {
  const [open, setOpen] = useState(false);
  const [openAppInfo, setOpenAppInfo] = useState<any | undefined>();

  const openDrawer = (props: any) => {
    setOpenAppInfo(props)
    setOpen(true)
  }


  const qiankun = useModel("qiankun")
  return <>
    <div className={styles["qiankun-container"]}>
      <div className={styles.content}>全局状态：{JSON.stringify(qiankun.qiankunData)}</div>
      <div className={styles["micro-container"]}>
        {
          props.appName ?
            <MicroAppWithMemoHistory
              name={props.appName}
              url={props.url}
              qiankunData={qiankun.qiankunData}
              setGlobalQiankunData={qiankun.setGlobalQiankunData}
              openDrawer={openDrawer}
              autoCaptureError 
              // errorBoundary={() => <>发生错误了</>}
            ></MicroAppWithMemoHistory>
            :
            <></>
        }
      </div>
    </div>

    <Drawer open={open} onClick={() => setOpen(false)} width={800}>
      {openAppInfo && <MicroAppWithMemoHistory
        name={openAppInfo.name}
        url={`${openAppInfo.url}`}
        qiankunData={qiankun.qiankunData}
        setGlobalQiankunData={qiankun.setGlobalQiankunData}
        openDrawer={openDrawer}
        autoCaptureError
      ></MicroAppWithMemoHistory>}
      {/* <MicroAppWithMemoHistory name="app2" url="/app2"></MicroAppWithMemoHistory> */}
    </Drawer>
  </>
}

export default MicroContainer;