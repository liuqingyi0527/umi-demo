import React, { Component, lazy } from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { history } from 'umi';
import { TabBar } from 'antd-mobile';
const House = lazy(() => import('./House'));
const Profile = lazy(() => import('./Profiled'));

import NavBarDom from "./test/metu";//头部组件样式
import './index.css'//自己的样式
// 字体图表样式
import './../assets/fonts/iconfont.css'
import tabBars from './../utils/tabbar_config';//tabbar的数据

import Home from './Home';
export default class Index extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedTab: history.location.pathname,
    };
  }
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/home/house" component={House} />
            <Route path="/home/profile" component={Profile} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </Switch>
        </div>
      </Router>

    )
  }
}
