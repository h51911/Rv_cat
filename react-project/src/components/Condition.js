import React, { Component } from "react";

import "../style/Condition.scss";
import AboutUs from "../components/AboutUs";
import axios from "axios";
class Condition extends Component {
  state = {
    data: []
  };
  async componentDidMount() {
    /*发送请求 */
    let { data } = await axios.get("http://localhost:3001/zheng/condition");
    // console.log(data);

    this.setState({
      data
    });
   
  }

  render() {
    let { data } = this.state;
    return (
      /* 列表 */

      <>
        <div style={{ background: "white" }} className="condition">
          {/* Condition */}
          <div>
            {data.map(item => {
              return (
                <div className="condition_all" key={item.title}>
                  <div className="title">
                    <span>{item.title}</span>
                  </div>

                  <div className="detail">
                    <ul>
                      {item.item.map(ele => {
                        return (
                          <li key={ele}>
                            <a>{ele}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
          {/* 底部 */}
          <AboutUs></AboutUs>
        </div>
      </>
    );
  }
}
export default Condition;
