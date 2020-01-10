import React from "react";
import { Route, Link, NavLink, Switch, Redirect, withRouter } from 'react-router-dom';
import Head from "../components/head.jsx";
import "../style/Mine.scss";
import "../style/font_1599253_v9xfyclsy9b/iconfont.css";

class Mine extends React.Component {
    constructor(props){
      super(props);
      this.tuichu = this.tuichu.bind(this);
    }
    componentDidMount(){
      var name = localStorage.getItem("name");
      if (name){
        
      }else{
        this.props.history.push('/login2');
      }
    }
  tuichu(){
    localStorage.removeItem("name");
    this.props.history.push('/login2');
  }
    render() {
        return (
            <div className="mine">
                {/* 个人中心 */}
                <Head>个人中心</Head>
                {/* 视图层 */}
                <div className="rv_wdkjzt cl">
                    <div className="rv_wdkjxx cl">
                    <div className="grtx cl z">
                        <a>
                            <img src="http://www.rv28.com/uc_server/avatar.php?uid=73074&amp;size=middle"/>
                        </a>
                    </div>
                    <div className="grxx cl z">
                        <a>
                    <h2>{localStorage.getItem("name")}</h2>
                            <p>该用户懒到没有签名！</p>
                        </a></div>
                    <div className="grewm cl y">
                        <a>
                            <img src="https://www.rv28.com/rv28/touch/kjewm.png" alt=""/>
                        </a>
                    </div>
                </div>

    <div className="rv_wdjf cl">
      <a>
        <div className="jflb cl">
          <ul>
            <li><em>威望</em>
              <p>0</p>
            </li>
            <li><em>金币</em>
              <p>2</p>
            </li>
            <li><em>车币</em>
              <p>0</p>
            </li>
          </ul>
        </div>
      </a>
    </div>

    <div className="rv_wdscxz cl">
      <div className="rv_wdscys rv_rwqhays  cl">
        <ul>
          <li style={{width:"33%", display:"inline"}}>
              <a>赚取金币</a>
              </li>
          <li style={{width:"33%", display:"inline", borderLeft:"1px solid #4284d9" , borderRight:"1px solid #4284d9"}}><a
             >查看收益</a></li>
          <li style={{width:"33%", display:"inline"}}>
              <a>我要提现</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="rv_wdkjgn cl">
      <ul>
        <li>

          <a className="rv_kjgnsc">
            <i className="font iconfont icon-zhengfangti 
            " style={{color: "orange"}}></i>
            收藏&amp;关注
            <img src="https://www.rv28.com/rv28/touch/kjxz.png" alt=""/>
          </a>
        </li>
        <li className="wdwdx">

          <a className="rv_kjgntx">
            <i className="font iconfont icon-lingdang" style={{color: "#1196DB"}}></i>
            互动&amp;提醒
            <img src="https://www.rv28.com/rv28/touch/kjxz.png" alt=""/>
          </a>
        </li>
      </ul>
    </div>
    <div className="rv_wdkjgn cl">
      <ul>
        <li>
          <a className="rv_kjgngy">
            <i className="font iconfont icon-tanhao" style={{color: "#AFCD50"}}></i>我的贴子
            <img src="https://www.rv28.com/rv28/touch/kjxz.png" alt=""/>
          </a>
        </li>
        <li>
          <a className="rv_kjgnqz">
            <i className="font iconfont icon-qunzu" style={{color: "#00BB9C"}}></i>我的群组
            <img src="https://www.rv28.com/rv28/touch/kjxz.png" alt=""/>
          </a>
        </li>
        <li>
          <a className="rv_kjgnxx">
            <i className="font iconfont icon-xiaoxi" style={{color: "#0488CF"}}></i>我的消息
            <img src="https://www.rv28.com/rv28/touch/kjxz.png" alt=""/>
          </a>
        </li>
        <li>
          <a className="rv_kjgnhy">
            <i className="font iconfont icon-weixiao" style={{color: "#F4C600"}}></i>我的好友
            <img src="https://www.rv28.com/rv28/touch/kjxz.png" alt=""/>
          </a>
        </li>
        <li className="wdwdx">
          <a className="rv_kjgnjf">
            <i className="font iconfont icon-jifen" style={{color: "#EA8010"}}></i>我的积分
            <img src="https://www.rv28.com/rv28/touch/kjxz.png" alt=""/>
          </a>
        </li>
      </ul>
    </div>
    <div className="rv_wdkjgn cl">
      <ul>
        <li>
          <a className="rv_kjgngy">
            <i className="font iconfont icon-guanyuwomen1" style={{color: '#AFCD50'}}></i>关于我们
            <img src="https://www.rv28.com/rv28/touch/kjxz.png" alt=""/>
          </a>
        </li>
        <li className="wdwdx">
          <a className="rv_kjgntc" onClick={this.tuichu}>
            <i className="font iconfont icon-tuichudenglu" style={{color: "#EB4F38"}}></i>退出登录
            <img src="https://www.rv28.com/rv28/touch/kjxz.png" alt=""/>
          </a>
        </li>
      </ul>
    </div>
  </div>
            </div>
        )
    }
}
Mine = withRouter(Mine);
export default Mine;