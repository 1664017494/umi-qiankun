import { MicroAppLink } from "@umijs/max";
import { Button, ButtonProps } from "antd";
import type { FC } from "react";

interface IMicroAppJumpButtonProps {
  appName: string
  to: string
  btnProps?: ButtonProps
}

const MicroAppJumpButton:FC<IMicroAppJumpButtonProps> = (props: IMicroAppJumpButtonProps) => {
  return <>
  {/* 跳转链接为 /app2/home */}
  {/* <MicroAppLink name="app2" to="/home"> */}
  <MicroAppLink name={props.appName} to={props.to}>
    <Button {...props.btnProps}></Button>
  </MicroAppLink>
</>
}

export default MicroAppJumpButton;