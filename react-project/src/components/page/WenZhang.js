import React, { Component } from "react";
import "../../style/pageAll.scss";
/* 字体图标 */
import "../../style/iconfont2/iconfont.css";
import DetailShare from "../DetailShare";
class WenZhang extends Component {
  state = {
    datalist: [
      {
        title: "开着房车带着父母和孩子去找北（14）踏上回家返程凉山雷波马湖 ...",
        view: "6412",
        num: "0",
        img:
          "https://www.rv28.com/data/attachment/portal/201912/25/101637uwm3hs4lljylz3oy.jpg.thumb.jpg"
      },
      {
        title:
          "开着房车带着父母和孩子去找北（13）正式开始郭亮挂壁公路的行程 ...",
        view: "7875",
        num: "4",
        img:
          "https://www.rv28.com/data/attachment/portal/201911/23/084518hdczmjm2lzfjz9f2.jpg.thumb.jpg"
      },
      {
        title: "开着房车带着父母和孩子去找北（11）向北京出发",
        view: "7732",
        num: "2",
        img:
          "https://www.rv28.com/data/attachment/portal/201910/11/095026yqyw5km5pqhn2nfn.jpg.thumb.jpg"
      },
      {
        title: "开着房车带着父母和孩子去找北（10）一路向北到达二连浩特国门 ...",
        view: "16907",
        num: "0",
        img:
          "https://www.rv28.com/data/attachment/portal/201909/18/094750krsbsfnpcrbbpjys.jpg.thumb.jpg"
      },
      {
        title: "开着房车带着父母和孩子去找北（9）探秘乌兰哈达火山群",
        view: "10170",
        num: "1",
        img:
          "https://www.rv28.com/data/attachment/portal/201908/27/121321qaaa8p068ivvazeg.jpg.thumb.jpg"
      },
      {
        title: "开着房车带着父母和孩子去找北（8）离开鄂尔多斯到达呼和浩特 ...",
        view: "9034",
        num: "1",
        img:
          "https://www.rv28.com/data/attachment/portal/201907/31/104959zg19xk6676gs6kl6.jpg.thumb.jpg"
      },
      {
        title: "开着房车带着父母和孩子去找北（7）目睹一代天骄成吉思汗陵园 ...",
        view: "13236",
        num: "0",
        img:
          "https://www.rv28.com/data/attachment/portal/201907/11/095952unz1n5igbigmubig.jpg.thumb.jpg"
      },
      {
        title:
          "开着房车带着父母和孩子去找北（6）目睹波浪谷一线天的风采 ... ...",
        view: "13676",
        num: "2",
        img:
          "https://www.rv28.com/data/attachment/portal/201906/21/102655lxokeoebktr6tf6v.jpg.thumb.jpg"
      },
      {
        title:
          "侣友福田G9旅居车，中顶高顶齐全，简约白棕色搭配，最低17.8万起 ...",
        view: "21602",
        num: "11",
        img:
          "https://www.rv28.com/data/attachment/portal/201905/21/151612gax5grg5dnr65gf2.jpg.thumb.jpg"
      },
      {
        title: "5月9日第4届成都房车生活节，侣友福田G9房车参展",
        view: "11026",
        num: "2",
        img:
          "https://www.rv28.com/data/attachment/portal/201904/28/171257wol8q5fwoqw88ewr.jpg.thumb.jpg"
      },
      {
        title: "侣友福田G9房车，空间紧凑功能齐全，售价不到20万",
        view: "29110",
        num: "11",
        img:
          "https://www.rv28.com/data/attachment/portal/201811/07/100813tpcsg1gc74pff1ak.jpg.thumb.jpg"
      }
    ]
  };
  render() {
    return (
      <>
        <DetailShare></DetailShare>
        <div className="list_article">
          <div className="tt-first">
            <h3>相关文章</h3>
          </div>
          <div className="card-news">
            <ul>
              {this.state.datalist.map(item => {
                return (
                  <li key={item.title}>
                    <div className="con-box">
                      <h4>{item.title}</h4>
                      <p>
                        <span>
                          <i className="iconfont icon-yincang"></i>
                          {item.view}
                        </span>
                        <span>
                          <i className="iconfont icon-pinglun"></i>
                          {item.num}
                        </span>
                      </p>
                    </div>
                    <div className="img-box">
                      <img src={item.img} alt="" />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default WenZhang;
