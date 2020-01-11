import React, { Component } from "react";
import Header from "./head";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import {
  Modal,
  List,
  Button,
  WhiteSpace,
  WingBlank,
  Icon,
  Flex
} from "antd-mobile";
/* 样式 */
import "../style/List.scss";

import "../assets/font_1600229_ekex9tibk5o/iconfont.css";

/* 字体图标 */
import "../style/iconfont2/iconfont.css";

import Car from "./ListPage/Car";
import Pic from "./ListPage/Pic";
import Video from "./ListPage/Video";
import Article from "./ListPage/Article";

class Lists extends Component {
  state = {
    navList: [
      { text: "车型", path: "/car" },
      { text: "图库", path: "/pic" },
      { text: "视频", path: "/video" },
      { text: "文章", path: "/artical" }
    ],
    key: "/car",
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

  chnageNav = path => {
    this.setState({
      key: path
    });

    console.log(path);
    /* 跳转 */
    this.props.history.push("/list" + path);
  };

  showModal = key => e => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true
    });
  };

  componentDidMount() {
    this.props.history.push("/list" + this.state.key);
  }
  render() {
    let { navList, key } = this.state;
    console.log("list", this.props.list);
    // let { title, img, id } = this.props.list;

    return (
      <>
        {/* 头部 */}
        {/* <Header></Header> */}
        <Header>详情</Header>
        <div className="list_total" style={{ background: "white" }}>
          <div className="title">
            <div className="logo">
              <img src={this.props.list[0]} alt="" />
            </div>
            <span className="brand-name">{this.props.list[1]}</span>
            <div className="share" onClick={this.showModal("modal2")}>
              {/* 彩色图标引用 》》》》》
                1、将文件复制到public
                2、
              */}
              {/* <svg aria-hidden="true">
                <use xlinkHref="#icon-QQ" />
              </svg> */}

              <span className="iconfont icon-fenxiang"></span>
              <span>分享</span>
            </div>
          </div>
          <div className="list_nav">
            <ul>
              {navList.map(item => {
                return (
                  <li
                    className={item.path == key ? "active d1" : "d1"}
                    key={item.text}
                    onClick={this.chnageNav.bind(this, item.path)}
                  >
                    {item.text}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* 点击分享 */}
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

          <Switch>
            <Route path="/list/car" component={Car}></Route>
            <Route path="/list/pic" component={Pic}></Route>
            <Route path="/list/video" component={Video}></Route>
            <Route path="/list/artical" component={Article}></Route>
            {/* 重定向 */}
            <Redirect from="/list" to="/list/car" exact />
          </Switch>
        </div>

        {/* <div className="clickToShare">
          <div className="toShare"></div> 
        </div> */}
      </>
    );
  }
}
const mapStateToProps = state => ({
  //这里的形参state是仓库的state
  list: state.list
});
Lists = connect(mapStateToProps)(Lists);
export default Lists;
