import React, { Component } from "react";
import "../style/Ad.scss";
class Ad extends Component {
  render() {
    return (
      <div className="ad">
        <ul>
          <li>
            <img
              src="https://t12.baidu.com/it/u=116628392,2829888478&fm=76"
              alt=""
            />
            <p>便宜房车</p>
          </li>
          <li>
            <img
              src="https://f11.baidu.com/it/u=321217258,2226353880&fm=76"
              alt=""
            />
            <p>大通rv80</p>
          </li>
          <li>
            <img
              src="https://t10.baidu.com/it/u=234492309,2316579686&fm=76"
              alt=""
            />
            <p>便宜的房车</p>
          </li>
        </ul>
      </div>
    );
  }
}
export default Ad;
