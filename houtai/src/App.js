import React, { Component } from 'react';
import './App.css';
import  Apps from './page/app'
import {HashRouter} from 'react-router-dom';
import Login from './page/login/Login';

function App() {
  
    return (
      <HashRouter>
         {

           localStorage.getItem('username')?<> <Apps/></>:<><Login/></>
         }
        
      </HashRouter>
    );


}

export default App;
