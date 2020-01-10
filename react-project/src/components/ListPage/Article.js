import React, { Component } from "react";
import "../../style/List.scss";

import { connect } from "react-redux";
import axios from "axios";

/* 字体图标 */
import "../../style/iconfont2/iconfont.css";

import Ad from "../Ad";
import AboutUs from "../AboutUs";
class Article extends Component {
  state = {
    data: [{ artical: [] }]
  };

  async componentDidMount() {
    /*发送请求 */
    let id = this.props.list[2];
    let { data } = await axios.get("http://localhost:3001/zheng/list", {
      params: { id: id }
    });
    // console.log(data);

    this.setState({
      data
    });
  }
  render() {
    let { data } = this.state;
    let { artical } = data[0];
    // let { item } = data;
    console.log("artical", artical);
    return (
      <>
        <div className="list_article">
          <ul>
            {artical == []
              ? ""
              : artical.map(item => {
                  return (
                    <li key={item.id}>
                      <a>
                        <div className="detail">
                          <h3>{item.title}</h3>
                          <p className="time">
                            <span>{item.time}</span>
                            <span className="iconfont icon-pinglun"></span>
                            <span>{item.num}</span>
                          </p>
                        </div>
                        <div className="pic">
                          <img src={item.img} alt="" />
                        </div>
                      </a>
                    </li>
                  );
                })}
          </ul>
        </div>
        <Ad></Ad>
        <AboutUs></AboutUs>
      </>
    );
  }
}
const mapStateToProps = state => ({
  //这里的形参state是仓库的state
  list: state.list
});
Article = connect(mapStateToProps)(Article);
export default Article;
