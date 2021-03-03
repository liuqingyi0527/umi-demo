import { Popover,NavBar, Icon } from 'antd-mobile';
import { Component } from 'react';
// import ReactDOM from 'react-dom'
const Item = Popover.Item;
const myImg= (src: string)=> <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;


export default class NavBarDom extends Component{
    state = {
        visible: false,
        selected: '',
      };
      onSelect = (opt: { props: { value: any; }; }) => {
        this.setState({
          visible: !this.state.visible,
          selected: opt.props.value,
        });
      };
      handleVisibleChange = (visible: any) => {
        this.setState({
          visible,
        });
      };
    
    render(){
      return  <div>

        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          rightContent={
            <Popover mask
              overlayClassName="fortest"
              overlayStyle={{ color: 'currentColor' }}
              visible={this.state.visible}
              overlay={[
                (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">扫一扫</Item>),
                (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
                (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                  <span style={{ marginRight: 5 }}>Help</span>
                </Item>),
              ]}
              align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 0],
              }}
              onVisibleChange={this.handleVisibleChange}
              onSelect={this.onSelect}
            >
              <div style={{
                height: '100%',
                padding: '0 15px',
                marginRight: '-15px',
                display: 'flex',
                alignItems: 'center',
              }}
              >
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />
                <Icon type="ellipsis" />
              </div>
            </Popover>
          }
        >NavBar</NavBar>
      </div>
    }
}
