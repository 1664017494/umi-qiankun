import { MicroAppWithMemoHistory , useModel } from "@umijs/max";
import type { FC } from "react";
import styles from "./index.less"

interface IMicroContainerProps {
  appName?: string
}

const MicroContainer: FC<IMicroContainerProps> = (props: IMicroContainerProps) => {

  const qiankun = useModel("qiankun")
  return <div className={styles["qiankun-container"]}>
    <div className={styles.content}>全局状态：{JSON.stringify(qiankun.qiankunData)}</div>
    <div className={styles["micro-container"]}>
      {
        props.appName ?
          <MicroAppWithMemoHistory
            name={props.appName}
            url={`/${props.appName}`}
            qiankunData={qiankun.qiankunData}
            setGlobalQiankunData={qiankun.setGlobalQiankunData}
          ></MicroAppWithMemoHistory>
          :
          <></>
      }
    </div>
  </div>
}

export default MicroContainer;