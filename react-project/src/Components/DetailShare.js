import React, { Component } from "react";
/* 样式 */
import "../style/DetailShare.scss";

import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import "../assets/font_1600229_ekex9tibk5o/iconfont.css";
import {
  Modal,
  List,
  Button,
  WhiteSpace,
  WingBlank,
  Icon,
  Flex
} from "antd-mobile";
/* 字体图标 */
import "../style/iconfont2/iconfont.css";
class DetailShare extends Component {
  state = {
    modal1: false,
    modal2: false,
    iconList: [
      {
        id: Date.now() + 10,
        icon: "iconfont icon-pengyouquan",
        title: "朋友圈",
        color: "#58bc58"
      },
      {
        id: Date.now() + 20,
        icon: "iconfont icon-weixin",
        title: "微信好友",
        color: "green"
      },
      {
        id: Date.now() + 30,
        icon: "iconfont icon-QQkongjian",
        title: "QQ空间",
        color: "yellow"
      },
      {
        id: Date.now() + 40,
        icon: "iconfont icon-qq",
        title: "QQ好友",
        color: "blue"
      },
      {
        id: Date.now() + 50,
        icon: "iconfont icon-weibo",
        title: "微博",
        color: "red"
      },
      {
        id: Date.now() + 60,
        icon: "iconfont icon-erweima",
        title: "二维码",
        color: "purple"
      }
    ]
  };

  onClose = key => () => {
    this.setState({
      [key]: false
    });
  };

  showModal = key => e => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true
    });
  };

  render() {
    return (
      <div className="detailshare">
        <div className="bottom">
          <ul className="share">
            <li onClick={this.showModal("modal2")}>
              <span className="iconfont icon-fenxiang"></span>
              <span>分享</span>
              <span className="span3">赚金币</span>
            </li>
            <li>
              <span className="iconfont icon-collect"></span>
              <span>收藏</span>
            </li>
          </ul>
          <ul className="consult">
            <li>
              <span>约试驾</span>
            </li>
            <li>
              <span>询底价</span>
            </li>
          </ul>
        </div>
        <div className="kkone">
          <WingBlank>
            {/* <Button onClick={this.showModal('modal1')}><Icon type="up" />basic<Icon type="up" /></Button> */}

            {/* <span onClick={this.showModal("modal2")}>
                {this.props.children}55555555555
              </span> */}

            <Modal
              popup
              visible={this.state.modal2}
              onClose={this.onClose("modal2")}
              animationType="slide-up"
              // afterClose={() => { alert('afterClose'); }}
            >
              <List renderHeader={() => <div></div>} className="popup-list">
                <div className="iconList">
                  {this.state.iconList.map(item => (
                    <dl key={item.id}>
                      <dt
                        className={item.icon}
                        style={{
                          color: item.color
                        }}
                      ></dt>

                      <dd>{item.title}</dd>
                    </dl>
                  ))}
                </div>

                <List.Item>
                  <Button type="primary" onClick={this.onClose("modal2")}>
                    取消
                  </Button>
                </List.Item>
              </List>
            </Modal>
          </WingBlank>
        </div>
      </div>
    );
  }
}

export default DetailShare;
