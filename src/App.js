import React from 'react';
import { HashRouter, Route, Link, NavLink, Switch, Redirect, withRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Choose from './pages/Choose.jsx';
import Second from './pages/Second.jsx';
import Mine from './pages/Mine.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/choose' component={Choose} />
          <Route path='/second' component={Second} />
          <Route path='/mine' component={Mine} />
          <Route path='/notfound' render={() => <h1>你访问的页面不存在</h1>} />
          {/* "/" 跳转到 "/home" */}
          <Redirect from="/" to="/home" exact />
          {/* 404 */}
          <Redirect to="/notfound" />
        </Switch>
      </div>
    )
  };
}

export default App;
