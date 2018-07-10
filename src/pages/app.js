import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import 'antd/dist/antd.css';

import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'
import AyoBase from '../core';
import '../../public/css/reset.css';
import '../../public/font/iconfont.css';
import Home from './Home/Home';
import FydHome from "./FydHome";
import AjqhHome from "./AjqhHome";
import OperatingDetail from "./OperatingDetail";
import Area from "./viewArea/Area";
import WeiDuExplain from "./WeiDuExplain";

const {
  AppContainer,
} = AyoBase;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <MediaQuery query="(min-device-width: 1224px)">
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/fyd-home" component={FydHome}/>
          <Route exact path="/ajqh-home" component={AjqhHome}/>
          <Route exact path="/operating-detail" component={OperatingDetail}/>
          <Route exact path="/weidu-explain" component={WeiDuExplain}/>
        </MediaQuery>

        <MediaQuery query="(max-device-width: 1224px)">
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/fyd-home" component={FydHome}/>
          <Route exact path="/ajqh-home" component={AjqhHome}/>
          <Route exact path="/operating-detail" component={OperatingDetail}/>
          <Route exact path="/weidu-explain" component={WeiDuExplain}/>
        </MediaQuery>
      </AppContainer>
    </Router>)
}

ReactDOM.render(<App/>, document.getElementById('root'));
