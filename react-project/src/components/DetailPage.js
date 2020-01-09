import React, { Component } from "react";
import Header from "../components/Header";
import "../style/DetailPage.scss";
import { Switch, Route } from "react-router-dom";

import ZongShu from "./page/ZongShu";
import CanShu from "./page/CanShu";
import TuPian from "./page/TuPian";
import WenZhang from "./page/WenZhang";
import KouBei from "./page/KouBei";
import ShiPin from "./page/ShiPin";
import ShangJia from "./page/ShangJia";
import LunTan from "./page/LunTan";
import ErShou from "./page/ErShou";

class DetailPage extends Component {
  state = {
    navBar: [
      { text: "综述", path: "/zongshu" },
      { text: "参数", path: "/canshu" },
      { text: "图片", path: "/tupian" },
      { text: "文章", path: "/wenzhang" },
      { text: "口碑", path: "/koubei" },
      { text: "视频", path: "/shipin" },
      { text: "商家", path: "/shangjia" },
      { text: "论坛", path: "/luntan" },
      { text: "二手车", path: "/ershou" }
    ],
    key: "/zongshu"
  };

  changeNav = path => {
    console.log("path", path);
    this.setState({
      key: path
    });
    this.props.history.push("/detailpage" + path);
  };
  componentDidMount() {
    // this.key = "zongshu";
    this.props.history.push("/detailpage" + this.state.key);
  }

  render() {
    let { navBar, key } = this.state;
    return (
      <>
        <Header></Header>
        <div className="detail_list">
          <ul>
            {navBar.map(item => {
              return (
                <li
                  key={item.text}
                  onClick={this.changeNav.bind(this, item.path)}
                  className={item.path == key ? "active" : ""}
                >
                  <a>{item.text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <Switch>
          <Route path="/detailpage/zongshu" component={ZongShu}></Route>
          <Route path="/detailpage/canshu" component={CanShu}></Route>
          <Route path="/detailpage/tupian" component={TuPian}></Route>
          <Route path="/detailpage/wenzhang" component={WenZhang}></Route>
          <Route path="/detailpage/koubei" component={KouBei}></Route>
          <Route path="/detailpage/shipin" component={ShiPin}></Route>
          <Route path="/detailpage/shangjia" component={ShangJia}></Route>
          <Route path="/detailpage/luntan" component={LunTan}></Route>
          <Route path="/detailpage/ershou" component={ErShou}></Route>
        </Switch>
      </>
    );
  }
}

export default DetailPage;
