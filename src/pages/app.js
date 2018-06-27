import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  // Link
} from 'react-router-dom'
import AyoBase  from '../core';
import '../../public/css/reset.css';
import '../../public/font/iconfont.css';
import UserLogin from './UserLogin';
import FydHome from './FydHome';

const {
  AppContainer,
} = AyoBase;

const App = ()=> {
  return (<Router><AppContainer>
      <Route exact path="/" component={FydHome}/>
      <Route exact path="user-login" component={UserLogin}/>
  </AppContainer></Router>)
}

ReactDOM.render(<App />, document.getElementById('root'));
