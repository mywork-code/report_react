import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import 'antd/dist/antd.css';

import Area from './viewArea/Area'


import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'
import AyoBase  from '../core';
import '../../public/css/reset.css';
import '../../public/font/iconfont.css';
import Home from './Home/Home';
import FydHome from "./FydHome";

const {
  AppContainer,
} = AyoBase;

const App = ()=> {
  return (
    <Router>
      <AppContainer>
        <MediaQuery query="(min-device-width: 1224px)">
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/fyd-home" component={FydHome}/>
        </MediaQuery>

        <MediaQuery query="(max-device-width: 1224px)">
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/fyd-home" component={FydHome}/>
        </MediaQuery>
      </AppContainer>
    </Router>)
}

ReactDOM.render(<Area />, document.getElementById('root'));
