import React, { Component } from "react";
import Header from "./Header";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
/* 样式 */
import "../style/List.scss";

/* 字体图标 */
import "../style/iconfont2/iconfont.css";

import Car from "./ListPage/Car";
import Pic from "./ListPage/Pic";
import Video from "./ListPage/Video";
import Article from "./ListPage/Article";

class List extends Component {
  state = {
    navList: [
      { text: "车型", path: "/car" },
      { text: "图库", path: "/pic" },
      { text: "视频", path: "/video" },
      { text: "文章", path: "/artical" }
    ],
    key: "/car"
  };

  chnageNav = path => {
    this.setState({
      key: path
    });

    console.log(path);
    /* 跳转 */
    this.props.history.push("/list" + path);
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
        <Header></Header>
        <div className="list_total" style={{ background: "white" }}>
          <div className="title">
            <div className="logo">
              <img src={this.props.list[0]} alt="" />
            </div>
            <span className="brand-name">{this.props.list[1]}</span>
            <div className="share">
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
List = connect(mapStateToProps)(List);
export default List;
