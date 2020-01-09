import React, { Component } from "react";
import { connect } from "react-redux";
import "../../style/pageAll.scss";
class ZongShu extends Component {
  render() {
    let {data} =this.props
    console.log(this.props);

    return (
      <div className="car1">
        <div className="top">
          <div className="show">
            <div className="left">
              <img
                className="img1"
                src={data[0]}
                alt=""
              />
              <span>外观</span>
            </div>
            <div className="right">
              <ul>
                <li>
                  <img
                    src="https://www.rv28.com/data/attachment/portal/201907/02/171059jbicupq7bplefbki.jpg.thumb.jpg"
                    alt=""
                  />
                  <span>中控</span>
                </li>
                <li>
                  <img
                    src="https://www.rv28.com/data/attachment/portal/201907/02/094059sgr6oyncbokgck4r.jpg.thumb.jpg"
                    alt=""
                  />
                  <span>内饰</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="consult">
            <div className="img">
              <a href="">
                <img
                  src="https://www.rv28.com/data/attachment/portal/201903/25/094647qlov7slz7x0lzmtx.jpg.thumb.jpg"
                  alt=""
                />
              </a>
            </div>

            <div className="price">
              <p>五十铃KV100房车</p>
              <p>
                报价：<strong>100万</strong>
              </p>
            </div>
            <div className="final_price">
              <span className="span1">询底价</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  //这里的形参state是仓库的state
  data: state.data
});
ZongShu = connect(mapStateToProps)(ZongShu);
export default ZongShu;
