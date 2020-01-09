import React, { Component } from "react";

/* antd */
import { NavBar, Icon } from "antd-mobile";
/* antd样式 */
import "antd-mobile/dist/antd-mobile.css";

/*  样式  */
import "../style/Header.scss";

class Header extends Component {
  render() {
    return (
      <NavBar
        className={"chooseheader"}
        mode="dark"
        leftContent={[
          <Icon
            type="left"
            // onClick={this.props.history.goBack()}
            key={5}
          ></Icon>
        ]}
        rightContent="首页"
      >
        详情<Icon type="down" key={1}></Icon>
      </NavBar>
    );
  }
}

export default Header;
