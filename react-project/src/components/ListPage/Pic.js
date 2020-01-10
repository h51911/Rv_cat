import React, { Component } from "react";
import "../../style/List.scss";
import { connect } from "react-redux";
import axios from "axios";
import Ad from "../Ad";
import AboutUs from "../AboutUs";
class Pic extends Component {
  state = {
    data: [{ pic: [] }]
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
    let { pic } = data[0];
    // let { item } = data;
    console.log("pic", pic);
    return (
      <>
        <div className="list_pic">
          <ul>
            {pic == []
              ? ""
              : pic.map(item => {
                  return (
                    <li key={item.id}>
                      <a>
                        <img src={item.img} alt="" />
                        <h4>{item.title}</h4>
                        <p>
                          共<strong>{item.num}</strong>张图片
                        </p>
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
Pic = connect(mapStateToProps)(Pic);
export default Pic;
