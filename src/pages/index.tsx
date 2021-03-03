import styles from './index.less';

import React, { Component } from 'react'
import { history } from 'umi';
import { Button } from 'antd'; // 引入antd组件
import NavBarDom from "./metu";
import TabBbar from  "./tabBar"

export default class Index extends Component {
  // 路由跳转不带参数
  toLogin() {
    history.push('/user');
  }
  // 路由跳转带参数
  toLoginWithParameter() {
    history.push({
      pathname: '/login',
      query: {
        a: 'b',
      },
    })
  }
  render() {
    return (
      <div>
        <NavBarDom/>
      	<div className={styles.title}>首页</div>
        <Button type="primary" onClick={this.toLogin}>跳转不带参数</Button>
        <Button onClick={this.toLoginWithParameter}>跳转带参数</Button>

        <TabBbar/>
      </div>
    )
  }
}
