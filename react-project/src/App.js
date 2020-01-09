import React from 'react';
import { Route, Link, NavLink, Switch, Redirect, withRouter } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home.jsx';
import Choose from './pages/Choose.jsx';
import Second from './pages/Second.jsx';
import Mine from './pages/Mine.jsx';
import Video from './pages/Video.jsx';
import VideoXiang from './pages/VideoXiang.jsx';

import './style/font_hr5tn4apse8/iconfont.css';
import { TabBar } from 'antd-mobile';
import DetailPage from "./components/DetailPage";
import List from "./components/List";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/choose' component={Choose} />
          <Route path='/second' component={Second} />
          <Route path='/mine' component={Mine} />
          <Route path='/video' component={Video} exact />
          <Route path="/detailpage" component={DetailPage} />
          <Route path="/list" component={List} />
          {/*嵌套路由*/}
          <Route path='/video/xiang/:id' component={VideoXiang} />
          <Route path='/notfound' render={() => <h1>你访问的页面不存在</h1>} />
          {/* "/" 跳转到 "/home" */}
          <Redirect from="/" to="/home" exact />
          {/* 404 */}
          <Redirect to="/notfound" />
        </Switch>
        <div className="tab">
          <ul>
            <li>
              <NavLink to="/home" activeStyle={{ color: "#4284d9" }}>
                首页
              </NavLink>
            </li>

            <li>
              <NavLink to="/choose" activeStyle={{ color: "#4284d9" }}>
                选车
              </NavLink>
            </li>
            <li>
              <div className="ctn">
                <span className="iconfont icon-jiahao"></span>
              </div>
            </li>
            <li>
              <NavLink to="/second" activeStyle={{ color: "#4284d9" }}>
                二手
              </NavLink>
            </li>
            <li>
              <NavLink to="/mine" activeStyle={{ color: "#4284d9" }}>
                我的
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
App = withRouter(App);
export default App;
