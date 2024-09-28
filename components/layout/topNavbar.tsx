'use client'

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";

import {DownOutlined} from "@ant-design/icons";
import {Dropdown, Layout, MenuProps, notification, Space} from 'antd';



// @Images
// import logo from "@/public/images/logo.png"

const {Header} = Layout;

function TopNavbar() {
  const router = useRouter();
  const [user, setUser] = useState<any>();




  return (
    <Header style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <div className="demo-logo flex items-center">
        {/* <Image src={logo} alt='Company logo' className='w-auto h-10' placeholder='blur'/> */}
        <span className="text-white pl-4">v1.7.2-beta</span>
      </div>
      <div className="user-info">
        {/* <Dropdown menu={{items: userProfileMenu}} trigger={['click']}> */}
          <a onClick={(e) => e.preventDefault()}
             style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff'}}>
            <Space>
              {/*<Avatar icon={<UserOutlined/>} src={user?.src}/>*/}
              <span className="capitalize">{user?.name}</span> <DownOutlined/>
            </Space>
          </a>
        {/* </Dropdown> */}
      </div>
    </Header>
  );
}

export default TopNavbar;
