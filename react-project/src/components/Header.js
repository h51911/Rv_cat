import React, { Component } from "react";

/* antd */
import { NavBar, Icon } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";

class Header extends Component {
  render() {
    return (
      <NavBar
        className={choose_header}
        mode="dark"
        leftContent={[<Icon type="left"></Icon>]}
        style={{ background: "#4284d9" }}
        rightContent="首页"
        // {[
        //   <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        //   <Icon key="1" type="ellipsis" />,
        // ]}
      >
        详情<Icon type="down"></Icon>
      </NavBar>
    );
  }
}

export default Header;
