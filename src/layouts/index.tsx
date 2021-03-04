import React, { Component, lazy } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { history } from 'umi';
import { TabBar } from 'antd-mobile';

import NavBarDom from "../pages/test/metu";//头部组件样式
import '../pages/index.css'//自己的样式
// 字体图表样式
import '../assets/fonts/iconfont.css'
import tabBars from '../utils/tabbar_config';//tabbar的数据

export default class Index extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedTab: history.location.pathname,
        };
    }
    // 渲染地步tabbar数据
    renderTabBarItems = () => {
        return tabBars.map((item, index) => <TabBar.Item
            title={item.title}
            key={index}
            icon={
                <i className={'iconfont ' + item.icon} />
            }
            selectedIcon={<i className={'iconfont ' + item.icon} />
            }
            selected={this.state.selectedTab === item.path}
            onPress={() => {
                // this.setState({
                //   selectedTab: item.path,
                // }, () => {
                history.push(item.path)
                // });
            }}

        />)
    }
    render() {
        return (
            <div>
                <NavBarDom />
                {this.props.children}
                <div className="barBox">
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                        tabBarPosition="bottom"
                        noRenderContent={true}
                    >
                        {
                            this.renderTabBarItems()
                        }
                    </TabBar>
                </div >
            </div>
        )
    }
}
