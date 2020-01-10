import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "../../style/List.scss";
import Ad from "../Ad";
import AboutUs from "../AboutUs";

class Car extends Component {
  state = {
    data: [{ item: [] }]
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
    /* id */
    // console.log("car", this.props.list[2]);
    let { data } = this.state;
    let { item } = data[0];
    // let { item } = data;

    console.log("data", item);

    return (
      <>
        <div className="list_car" style={{ background: "white" }}>
          <ul>
            {item.map(ele => {
              return (
                <li key={ele.id}>
                  <a>
                    <img src={ele.img} alt="" />
                    <h4>{ele.title} </h4>
                    <p>
                      <strong>{ele.price}</strong>
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
Car = connect(mapStateToProps)(Car);
export default Car;
