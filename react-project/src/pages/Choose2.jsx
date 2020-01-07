import React from "react";
/* 样式 */
import "../style/Choose.scss";
/* antd */
import { Tabs, WhiteSpace } from "antd-mobile";
import { StickyContainer, Sticky } from "react-sticky";

/* 头部 */
import Header from "../components/Header";

/* 切换 */

class Choose extends React.Component {
  state = {
    list: [
      { title: "按品牌", key: "t1" },
      { title: "按条件", key: "t2" },
      { title: "热门车", key: "t3" }
    ],
    activeKey: "t1"
  };

  // renderTabBar(props) {
  //   return (
  //     <Sticky>
  //       {({ style }) => (
  //         <div style={{ ...style, zIndex: 1 }}>
  //           <Tabs.DefaultTabBar {...props} />
  //         </div>
  //       )}
  //     </Sticky>
  //   );
  // }

  render() {
    let { list, activeKey } = this.state;
    return (
      <div className="choose">
        {/* 头部 */}
        <Header></Header>

        {/* 切换 */}
        {/* <WhiteSpace /> */}
        <StickyContainer>
          <Tabs
            tabs={list}
            initialPage={activeKey}
            style={{ display: "block" }}
          >
            <div
              // style={{
              //   display: "flex",
              //   alignItems: "center",
              //   justifyContent: "center",
              //   height: "250px",
              //   backgroundColor: "#fff"
              // }}
              style={{ display: "block", height: "30px" }}
            >
              111111111
            </div>
            <div
            // style={{
            //   display: "flex",
            //   alignItems: "center",
            //   justifyContent: "center",
            //   height: "250px",
            //   backgroundColor: "#fff"
            // }}
            >
              2222222222222
            </div>

            <div
            // style={{
            //   display: "flex",
            //   alignItems: "center",
            //   justifyContent: "center",
            //   height: "250px",
            //   backgroundColor: "#fff"
            // }}
            >
              333333333333
            </div>
          </Tabs>
        </StickyContainer>
        {/* <WhiteSpace /> */}
      </div>
    );
  }
}
export default Choose;
