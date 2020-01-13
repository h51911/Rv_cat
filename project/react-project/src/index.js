import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './pages/Menu/Menu';
import Login from './pages/Login/Login';
import Alayout from './layout/Alayout/Alayout';
import Teacher from './layout/Teacher/Teacher';
import Admin from './layout/Admin/Admin';
import Ssuccess from './pages/Student/Ssuccess/Ssuccess';
import * as serviceWorker from './serviceWorker';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/menu">
                <Menu />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/alayout">
                <Alayout />
            </Route>
            <Route path="/teacher">
                <Teacher />
            </Route>
            <Route path="/admin">
                <Admin />
            </Route>
            <Route path="/ssuccess">
                <Ssuccess />
            </Route>
            <Redirect to="/menu" />
        </Switch>

    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
