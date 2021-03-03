import React, { Component } from 'react'
import styles from './index.less';
export default class User extends Component {
  constructor(props: any) {
    super(props);
    console.log(props.location.query) // 打印路由参数
  }
  render() {
    return (
      <div>
        <h1 className={styles.title}>User</h1>
      </div>
    )
  }
}