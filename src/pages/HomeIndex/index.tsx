import React, { Component } from 'react'

import { Carousel, WingBlank, Flex } from 'antd-mobile';
import "./index.css"
// 菜单数据
import navs from '../../utils/home_navs'
export default class App extends React.Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }
    // 轮播图
    renderCarousel = () => {
        return this.state.data.map(val => (
            <a
                key={val}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
                <img
                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                        this.setState({ imgHeight: 'auto' });
                    }}
                />
            </a>
        ))
    }
    // 菜单数据
    renderNavs = () => {
        return navs.map((item) => <Flex.Item onClick={() => this.props.history.push(item.path)} key={item.id}>
            <img alt="" src={item.img} />
            <p>{item.title}</p>
        </Flex.Item>)
    }
    render() {
        return (
            <div>
                <WingBlank>
                    <Carousel
                        autoplay={false}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        {this.renderCarousel()}
                    </Carousel>
                </WingBlank>
                {/* 菜单 */}
                <Flex className="nav">
                    {this.renderNavs()}
                </Flex>
            </div>

        );
    }
}
