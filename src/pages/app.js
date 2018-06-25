import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  // Link
} from 'react-router-dom'
import Ayobase  from '../core';
const {
  AppContainer,
} = Ayobase;
import '../../public/css/reset.css';
import '../../public/font/iconfont.css';
import UserLogin from './UserLogin';
 
const App = ()=> {
  return (<Router><AppContainer>
      <Route exact path="/" component={UserLogin}/>
      <Route exact path="user-login" component={UserLogin}/>
  </AppContainer></Router>)
}

ReactDOM.render(<App />, document.getElementById('root'));
