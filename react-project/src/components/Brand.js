import React, { Component } from "react";
import AboutUs from "../components/AboutUs";
import "../style/Brand.scss";
class Brand extends Component {
  state = {
    navData: [
      "A",
      "B",
      "C",
      "D",
      "F",
      "G",
      "H",
      "J",
      "k",
      "L",
      "M",
      "N",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "W",
      "X",
      "Y",
      "Z"
    ],
    key: "",
    isok: "none"
  };

  changeNav = item => {
    console.log(item);
    this.setState({
      key: item,
      isok: "block"
    });
    setTimeout(() => {
      this.setState({
        isok: "none"
      });
    }, 1000);
  };

  render() {
    let { navData, key, isok } = this.state;
    // console.log("navData", navData);
    return (
      // <React.Fragment >
      <div className="brand" style={{ background: "white" }}>
        {/* <div>Brand</div> */}
        {/* 右边导航 */}
        <div className="nav">
          <ul>
            {navData.map(item => {
              return (
                <li key={item} onClick={this.changeNav.bind(this, item)}>
                  <a>{item}</a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 主要内容 */}
        <div className="container">
          {/* 热门推荐 */}
          <div className="hot_sale">
            {/* -------- 热门推荐-标题 --------- */}
            <div className="recomend_title">
              <span>热门推荐</span>
            </div>

            {/* --------------------------- */}
            <div className="price">
              <ul>
                <li>
                  <a>10-30万</a>
                </li>
                <li>
                  <a>10-30万</a>
                </li>
                <li>
                  <a>10-30万</a>
                </li>
                <li>
                  <a>10-30万</a>
                </li>
              </ul>
            </div>
            <div className="brand_hot">
              <ul>
                <li>
                  <a>
                    <img
                      src="https://www.rv28.com/rv28/images/brand/xinfei.jpg"
                      alt=""
                    />
                    <p>新飞</p>
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src="https://www.rv28.com/rv28/images/brand/xinfei.jpg"
                      alt=""
                    />
                    <p>新飞</p>
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src="https://www.rv28.com/rv28/images/brand/xinfei.jpg"
                      alt=""
                    />
                    <p>新飞</p>
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src="https://www.rv28.com/rv28/images/brand/xinfei.jpg"
                      alt=""
                    />
                    <p>新飞</p>
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src="https://www.rv28.com/rv28/images/brand/xinfei.jpg"
                      alt=""
                    />
                    <p>新飞</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="hot_car">
              <ul>
                <li>
                  <a>
                    <img
                      src="https://www.rv28.com/rv28/images/brand/xinfei.jpg"
                      alt=""
                    />
                    <p>新飞</p>
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src="https://www.rv28.com/rv28/images/brand/xinfei.jpg"
                      alt=""
                    />
                    <p>新飞</p>
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src="https://www.rv28.com/rv28/images/brand/xinfei.jpg"
                      alt=""
                    />
                    <p>新飞</p>
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src="https://www.rv28.com/rv28/images/brand/xinfei.jpg"
                      alt=""
                    />
                    <p>新飞</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ABCD */}
          <div className="boxcar">
            <div className="list">
              {/* -----标题------- */}
              <div className="car_title">
                <span>A</span>
              </div>
              {/* -----内容----- */}
              <div className="car_all">
                <ul>
                  <li>
                    <a>
                      <img
                        src="https://www.rv28.com/rv28/images/brand/xinfei.jpg"
                        alt=""
                      />
                      <span>房车</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <img
                        src="https://www.rv28.com/rv28/images/brand/xinfei.jpg"
                        alt=""
                      />
                      <span>房车</span>
                    </a>
                  </li>{" "}
                  <li>
                    <a>
                      <img
                        src="https://www.rv28.com/rv28/images/brand/xinfei.jpg"
                        alt=""
                      />
                      <span>房车</span>
                    </a>
                  </li>{" "}
                  <li>
                    <a>
                      <img
                        src="https://www.rv28.com/rv28/images/brand/xinfei.jpg"
                        alt=""
                      />
                      <span>房车</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="list">
              {/* -----标题------- */}
              <div className="car_title">
                <span>A</span>
              </div>
              {/* -----内容----- */}
              <div className="car_all">
                <ul>
                  <li>
                    <a>
                      <img
                        src="https://www.rv28.com/rv28/images/brand/xinfei.jpg"
                        alt=""
                      />
                      <span>房车</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <img
                        src="https://www.rv28.com/rv28/images/brand/xinfei.jpg"
                        alt=""
                      />
                      <span>房车</span>
                    </a>
                  </li>{" "}
                  <li>
                    <a>
                      <img
                        src="https://www.rv28.com/rv28/images/brand/xinfei.jpg"
                        alt=""
                      />
                      <span>房车</span>
                    </a>
                  </li>{" "}
                  <li>
                    <a>
                      <img
                        src="https://www.rv28.com/rv28/images/brand/xinfei.jpg"
                        alt=""
                      />
                      <span>房车</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 点击提示 */}
        <div className="click_tips" style={{ display: isok }}>
          <span>{key}</span>
        </div>
        <AboutUs></AboutUs>
      </div>
      //{" "}
      // </React.Fragment>
    );
  }
}

export default Brand;
