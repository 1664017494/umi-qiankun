import { Layout, Row, Typography } from 'antd';
import React from 'react';
import styles from './Guide.less';
import { useModel } from '@umijs/max';

interface Props {
  name: string;
}

// 脚手架示例组件
const Guide: React.FC<Props> = (props) => {
  const { name } = props;
  const masterProps = useModel('@@qiankunStateFromMaster');

  console.log("@@@", masterProps);
  
  return (
    <Layout>
      <div>{`app2 收到参数：${masterProps?.qiankunData?.app2 && JSON.stringify(masterProps.qiankunData?.app2)}`}</div>
      <Row>
        <Typography.Title level={3} className={styles.title}>
          欢迎使用 <strong>{name}2</strong> ！
        </Typography.Title>
      </Row>
    </Layout>
  );
};

export default Guide;
