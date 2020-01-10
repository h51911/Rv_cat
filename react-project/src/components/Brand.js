import React, { Component } from "react";
import AboutUs from "../components/AboutUs";
import { connect } from "react-redux";
import axios from "axios";
import "../style/Brand.scss";

// /* 列表 */
// import List from "./List";

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
    isok: "none",
    data: [],
    recommend: [
      {
        img: "https://www.rv28.com/rv28/images/brand/xinfei.jpg",
        title: "新飞"
      },
      {
        img: "https://www.rv28.com/rv28/images/brand/lzone.jpg",
        title: "览众"
      },
      {
        img: "https://www.rv28.com/rv28/images/brand/newstarrv.jpg",
        title: "新星"
      },
      {
        img: "https://www.rv28.com/rv28/images/brand/klenrv.jpg",
        title: "宇通"
      },
      {
        img: "https://www.rv28.com/rv28/images/brand/fenghuang.jpg",
        title: "凤凰"
      }
    ],
    recommendcar: [
      {
        img:
          "https://www.rv28.com/data/attachment/portal/201807/28/212030yvhqebuo4jyhhvgz.jpg.thumb.jpg",
        title: "览众C4"
      },
      {
        img:
          "https://www.rv28.com/data/attachment/portal/201911/10/184406gdc6peco3rfomcr6.jpg.thumb.jpg",
        title: "新星T600"
      },
      {
        img:
          "https://www.rv28.com/data/attachment/portal/201807/28/215304uf83e5jknkcfh887.jpg.thumb.jpg",
        title: "凤凰瑞阳"
      },
      {
        img:
          "https://www.rv28.com/data/attachment/portal/201912/10/221440wglae7p55gv65o20.jpg.thumb.jpg",
        title: "新飞祥菱"
      }
    ],
    recommendprice: ["10-30万", "30-50万", "自行C型", "自行B型"],
    letter: "A"
  };

  /* 字母导航 */
  changeNav = item => {
    this.setState({
      key: item,
      isok: "block"
    });
    /* 1秒后隐藏 */
    setTimeout(() => {
      this.setState({
        isok: "none"
      });
    }, 1000);
    // console.log("this.refs", this.refs);
    if (item == this.state.letter) {
      console.log(6666666);
    }
  };

  /* 跳转列表 */
  toList(data) {
    let { img, title, id } = data;
    // console.log(title);
    // console.log(this.refs.outer);
    /* index 大分类          idx小分类*/
    // console.log(index, idx);
    // let { div } = this.refs;
    // console.log(this.refs);
    this.props.dispatch({
      type: "list",
      payload: [img, title, id]
    });

    this.props.history.push("/list");
    console.log(data);
  }

  async componentDidMount() {
    /*发送请求 */
    let { data } = await axios.get("http://localhost:3001/zheng/brand");
    // console.log(data);

    this.setState({
      data
    });
    /* 监听滚动 */
    window.addEventListener("scroll", this.handleScroll);
  }

  /* 滚动 */
  handleScroll(index) {
    console.log(window.scrollY);
    // console.log("this.refs", this.refs);
  }

  render() {
    let {
      navData,
      key,
      isok,
      data,
      recommend,
      recommendcar,
      recommendprice
    } = this.state;
    // console.log("navData", navData);
    // console.log("data", data);
    return (
      <div className="brand" style={{ background: "white" }}>
        {/* <div>Brand</div> */}
        {/* 右边导航 */}
        <div className="nav">
          <ul>
            {navData.map((item, index) => {
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
          {/* 热门推荐>>>>>>>>>>>>> */}
          <div className="hot_sale">
            {/* -------- 热门推荐-标题 --------- */}
            <div className="recomend_title">
              <span>热门推荐</span>
            </div>

            {/* ----------- */}
            <div className="price">
              <ul>
                {recommendprice.map(item => {
                  return (
                    <li key={item}>
                      <a>{item}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* ----------- */}
            <div className="brand_hot">
              <ul>
                {recommend.map(item => {
                  return (
                    <li key={item.title}>
                      <a>
                        <img src={item.img} alt="" />
                        <p>{item.title}</p>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* ------------ */}
            <div className="hot_car">
              <ul>
                {recommendcar.map(item => {
                  return (
                    <li key={item.title}>
                      <a>
                        <img src={item.img} alt="" />
                        <p>{item.title}</p>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* ABCD >>>>>>>>>>>>>>>>>>>>》》》》》》》*/}
          <div className="boxcar">
            {data.map((item, index) => {
              return (
                <div className="list" key={item.title}>
                  {/* -----标题------- */}
                  <div
                    className="car_title"
                    onChange={this.handleScroll.bind(this, index)}
                    ref="abc"
                  >
                    <span>{item.title}</span>
                  </div>

                  {/* -----内容----- */}
                  <div className="car_all">
                    <ul>
                      {item.item.map((ele, idx) => {
                        return (
                          <li
                            key={ele.title}
                            // onClick={this.toList.bind(this, index, idx)}
                            onClick={this.toList.bind(this, ele)}
                          >
                            <a>
                              <img src={ele.img} alt="" />
                              <span>{ele.title}</span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 点击提示 */}
        <div className="click_tips" style={{ display: isok }}>
          <span>{key}</span>
        </div>
        {/* <List></List>/ */}
        {/* 关于我们 */}
        <AboutUs></AboutUs>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  //这里的形参state是仓库的state
  data: state.data
});
Brand = connect(mapStateToProps)(Brand);
export default Brand;
