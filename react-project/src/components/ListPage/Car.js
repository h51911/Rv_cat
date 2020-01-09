import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class Car extends Component {
  state = {
    data: []
  };
  async componentDidMount() {
    /*发送请求 */
    let { data } = await axios.get("http://localhost:3001/zheng/brand");
    // console.log(data);

    this.setState({
      data
    });

  }

  render() {
    /* id */
    console.log("car", this.props.list[2]);
    return (
      <div className="list_car" style={{ background: "white" }}>
        <ul>
          <li>
            <a>
              <img
                src="https://www.rv28.com/data/attachment/portal/201911/17/113827ztb5hdlxdnrhxmb4.jpg.thumb.jpg"
                alt=""
              />
              <h4>爱旅途大通V90房车 </h4>
              <p>
                <strong>35.8万</strong>
              </p>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  //这里的形参state是仓库的state
  list: state.list
});
Car = connect(mapStateToProps)(Car);
export default Car;
