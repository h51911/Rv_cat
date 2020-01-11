import React from "react";
import "../style/Home.scss";
import noavatar from "../assets/noavatar_middle.gif";
import Lunbotu from "../components/Lunbotu.jsx";
import Buytop from "../components/Buytop.jsx";
import Pb from "../components/Pb.jsx";
import AboutUs from "../components/AboutUs.js";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      img: [
        "https://www.rv28.com/data/attachment/portal/202001/01/194626ectzmxod68cdd1mf.jpg",
        "https://www.rv28.com/data/attachment/forum/201912/27/100022wlrlwkojjvrjdhhu.jpg",
        "https://www.rv28.com/data/attachment/portal/201912/26/123901kck7622a962tc8oq.jpg",
        "https://www.rv28.com/data/attachment/forum/201909/21/190818rx0z0606sh6qxiiy.jpg.thumb.jpg",
        "https://www.rv28.com/data/attachment/portal/201912/20/074536ha475pp50r3x7p4r.jpg"
      ]
    };
  }
  render() {
    return (
      <div className="home">
        <div className="header">
          <div className="head-left">
            <img src={noavatar} alt="" />
          </div>
          <div className="images">
            <img
              src="https://www.rv28.com/rv28/touch/indexlogo.png?rvmao"
              alt=""
            />
          </div>
          <div className="head-right">
            <span className="iconfont icon-fangdajing"></span>
          </div>
        </div>
        <main>
          <Lunbotu />
          <Buytop />
          <div className="line"></div>
          <Pb />
        </main>
        <AboutUs></AboutUs>
      </div>
    );
  }
}
export default Home;
