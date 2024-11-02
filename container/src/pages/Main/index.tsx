
import { Menu, MenuProps } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import MicroContainer from '@/components/MicroContainer';
import { useState } from 'react';

const items = [
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: 'app1',
        label: 'app1',
        children: [
          { key: "/app1/oper", label: 'app1 oper页'},
        ],
      },
      {
        key: 'app2',
        label: 'app2',
        children: [
          { key: '/app2/home', label: 'app2主页'  }
        ],
      },
    ],
  },
];

export default function Main() {
  const [active, setActive] = useState<any | undefined>();

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setActive(e)
  };

  return <div style={{ display: "flex", flexDirection: "row" }}>
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      mode="inline"
      items={items}
    />
    {active ? <MicroContainer key={active.key} appName={active.keyPath[1]} url={active.key}></MicroContainer> : <div></div>}
  </div>
}