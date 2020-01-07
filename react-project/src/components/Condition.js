import React, { Component } from "react";

import "../style/Condition.scss";
import AboutUs from "../components/AboutUs";

class Condition extends Component {
  render() {
    return (
      /* 列表 */
      <>
        <div style={{ background: "white" }} className="condition">
          {/* Condition */}
          <div>
            <div className="condition_all">
              <div className="title">
                <span>价格</span>
              </div>
              <div className="detail">
                <ul>
                  <li>
                    <a href="">10万以下</a>
                  </li>
                  <li>
                    <a href="">10万以下</a>
                  </li>
                  <li>
                    <a href="">10万以下</a>
                  </li>
                  <li>
                    <a href="">10万以下</a>
                  </li>
                  <li>
                    <a href="">10万以下</a>
                  </li>
                  <li>
                    <a href="">10万以下</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="condition_all">
              <div className="title">
                <span>价格</span>
              </div>
              <div className="detail">
                <ul>
                  <li>
                    <a href="">555万以下</a>
                  </li>
                  <li>
                    <a href="">555万以下</a>
                  </li>
                  <li>
                    <a href="">555万以下</a>
                  </li>
                  <li>
                    <a href="">555万以下</a>
                  </li>
                  <li>
                    <a href="">555万以下</a>
                  </li>
                  <li>
                    <a href="">555万以下</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="condition_all">
              <div className="title">
                <span>价格</span>
              </div>
              <div className="detail">
                <ul>
                  <li>
                    <a href="">666万以下</a>
                  </li>
                  <li>
                    <a href="">666万以下</a>
                  </li>
                  <li>
                    <a href="">666万以下</a>
                  </li>
                  <li>
                    <a href="">666万以下</a>
                  </li>
                  <li>
                    <a href="">666万以下</a>
                  </li>
                  <li>
                    <a href="">666万以下</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 底部 */}
          <AboutUs></AboutUs>
        </div>
      </>
    );
  }
}
export default Condition;
