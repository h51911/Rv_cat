import React, { Component } from "react";
import AboutUs from "../components/AboutUs";
import "../style/Brand.scss";
class Brand extends Component {
  render() {
    return (
      // <React.Fragment >
      <div className="brand" style={{ background: "white" }}>
        {/* <div>Brand</div> */}
        <div className="nav">
          <ul>
            {/* 
          href=""
          href=""
          href=""
           */}
            <li>
              <a>A</a>
            </li>
            <li>
              <a>B</a>
            </li>
            <li>
              <a>C</a>
            </li>
            <li>
              <a>D</a>
            </li>
            <li>
              <a>E</a>
            </li>
            <li>
              <a>F</a>
            </li>
            <li>
              <a>G</a>
            </li>
            <li>
              <a>H</a>
            </li>
            <li>
              <a>I</a>
            </li>
            <li>
              <a>F</a>
            </li>
            <li>
              <a>K</a>
            </li>
            <li>
              <a>L</a>
            </li>
            <li>
              <a>M</a>
            </li>
            <li>
              <a>H</a>
            </li>
            <li>
              <a>N</a>
            </li>
          </ul>
        </div>

        <div className="container">
          <div className="hot_sale"></div>
          <div className="boxcar"></div>
        </div>

        <AboutUs></AboutUs>
      </div>
      //{" "}
      // </React.Fragment>
    );
  }
}

export default Brand;
