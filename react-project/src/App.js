import React, { lazy, Suspense } from 'react';
import { Route, Link, NavLink, Switch, Redirect, withRouter } from 'react-router-dom';
import './App.scss';

// import Home from './pages/Home.jsx';
// import Choose from './pages/Choose.jsx';
// import Second from './pages/Second.jsx';
// import Mine from './pages/Mine.jsx';
// import Video from './pages/Video.jsx';
// import VideoXiang from './pages/VideoXiang.jsx';
// import Reg2 from './pages/Reg2.jsx';
// import Login2 from './pages/Login2.jsx';
// import Space from './pages/Space.jsx';
// import DetailPage from "./components/DetailPage";
// import List from "./components/List";
// import Search from './pages/Search';

import './style/font_hr5tn4apse8/iconfont.css';
import { TabBar } from 'antd-mobile';

//路由按需加载优化
const Home = lazy(() => import("./pages/Home"));
const Choose = lazy(() => import("./pages/Choose.jsx"));
const Second = lazy(() => import("./pages/Second.jsx"));
const Mine = lazy(() => import("./pages/Mine.jsx"));
const Video = lazy(() => import("./pages/Video.jsx"));
const VideoXiang = lazy(() => import("./pages/VideoXiang.jsx"));
const Reg2 = lazy(() => import("./pages/Reg2.jsx"));
const Login2 = lazy(() => import("./pages/Login2.jsx"));
const Space = lazy(() => import("./pages/Space.jsx"));
const DetailPage = lazy(() => import("./components/DetailPage"));
const List = lazy(() => import("./components/List"));
const Search = lazy(() => import("./pages/Search"));

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Suspense fallback={<div>加载中...</div>}>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/choose' component={Choose} />
            <Route path='/second' component={Second} />
            <Route path='/mine' component={Mine} />
            <Route path='/video2' component={Video} exact />
            <Route path="/detailpage" component={DetailPage} />
            <Route path="/list" component={List} />
            <Route path='/reg2' component={Reg2} />
            <Route path='/login2' component={Login2} />
            <Route path='/space' component={Space} />
            <Route path='/search' component={Search} />
            {/*嵌套路由*/}
            <Route path='/video2/xiang/:id' component={VideoXiang} />
            <Route path='/notfound' render={() => <h1>你访问的页面不存在</h1>} />
            {/* "/" 跳转到 "/home" */}
            <Redirect from="/" to="/home" exact />
            {/* 404 */}
            <Redirect to="/notfound" />
          </Switch>
        </Suspense>
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
