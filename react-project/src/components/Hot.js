import React, { Component } from "react";

import "../style/Hot.scss";
import AboutUs from "../components/AboutUs";
import axios from "axios";
class Hot extends Component {
  state = {
    data: []
  };
  async componentDidMount() {
    /*发送请求 */
    let { data } = await axios.get("http://localhost:3001/zheng/car");
    console.log(data);
    this.setState({
      data
    });
  }
  render() {
    let { data } = this.state;
    return (
      /* 列表 */
      <div style={{ background: "white" }} className={"hot_car"}>
        {/* Hot */}
        <ul>
          {data.map(item => {
            return (
              <li key={item.title}>
                <img src={item.img} alt="" />
                <p className="p1">{item.title}</p>
                <p className="p2">{item.price}</p>
              </li>
            );
          })}
        </ul>
        {/* 底部 */}
        <AboutUs></AboutUs>
      </div>
    );
  }
}
export default Hot;
