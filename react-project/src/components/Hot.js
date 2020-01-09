import React, { Component } from "react";
import { connect } from "react-redux";
import "../style/Hot.scss";
import AboutUs from "../components/AboutUs";
import DetailPage from "../components/DetailPage";
import axios from "axios";

// console.log(DetailPage);
// import { withStorage } from "../utils/hoc";
// console.log(withStorage);

class Hot extends Component {
  state = {
    data: []
  };

  gotoDetail = (data, img, title, price) => {
    this.props.dispatch({
      type: "gai",
      payload: [img, title, price]
    });
    // console.log(this.props);
    // console.log(data);
    // console.log(this.props);
    this.props.history.push("/detailpage");
  };

  async componentDidMount() {
    /*发送请求 */
    let { data } = await axios.get("http://localhost:3001/zheng/car");
    //     console.log(data);
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
          {data.map((item, index) => {
            return (
              <li
                key={item.title}
                onClick={this.gotoDetail.bind(
                  this,
                  data[index],
                  item.img,
                  item.title,
                  item.price
                )}
              >
                <img src={item.img} alt={item.title} />
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
// Hot = withStorage(Hot);
const mapStateToProps = state => ({
  //这里的形参state是仓库的state
  data: state.data
});
Hot = connect(mapStateToProps)(Hot);
export default Hot;
