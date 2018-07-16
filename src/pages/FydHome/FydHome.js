import React from 'react';
import AyoBase from '../../core';
import './FydHome.css';
import YunYingRi from "../YunyingRi/YunYingRi";
import Area from "../viewArea/Area"
import UserAttr from "../UserAttr/UserAttr"
import OperatingDetail from "../OperatingDetail/OperatingDetail"
import PropTypes from 'prop-types';

import { Tabs } from 'antd-mobile';


const {
  PageBase,
} = AyoBase;

const tabData = [
  {title:"运营日报表"},
  {title:"地区监控表"},
  {title:"运营明细表"},
  // {title:"用户属性分析表"},
];

var activeKeyIndex = 0;
var defaultTime
var pages;

class FydHome extends PageBase {
  constructor() {
    super();
    this.state = {}
    this.area = React.createRef();
    this.ribao = React.createRef();
    this.operating = React.createRef();
    pages = [this.ribao,this.area,this.operating];
    window.onDateChanged = function (data) {
      let curPage = pages[activeKeyIndex];
      if(curPage.current && curPage.current.onDateChanged){
        curPage.current.onDateChanged(data);
      }
    };
    window.onDateChanged = window.onDateChanged.bind(this);

    let date = new Date();
    let endTime = this.coverReqTime(date);
    date.setDate(date.getDate() - 6);
    let startTime =this.coverReqTime(date)
    defaultTime = {dateStart:startTime,dateEnd:endTime,dateType:"-7"};
  }

  componentWillMount() {
  }

  handleModeChange = (tab,activeKey) => {
    activeKeyIndex = activeKey;
    let time;
    if(window.appModel && window.appModel.syncCurrentPageDate){

      let curPage = pages[activeKeyIndex];

      if(curPage.current && curPage.current.getCurTime){
        time = curPage.current.getCurTime();
      }else{
        time = defaultTime;
      }

      if(time){
        window.appModel.syncCurrentPageDate(time.dateStart,time.dateEnd,time.dateType);
      }

    }
  }


  coverReqTime(date){
    let month = date.getMonth()+1;
    month = month < 10 ? "0"+month : month;
    let day = date.getDate();
    day = day < 10 ? "0"+day : day;
    return [date.getFullYear(),"-",month,"-",day].join("");
  }

  render() {
    return (
      <div>
        <Tabs onChange={this.handleModeChange.bind(this)}
              tabs={tabData} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}
              swipeable={false}
              tabBarActiveTextColor="#71AFFF"
              tabBarInactiveTextColor="#303030"
              tabBarUnderlineStyle={{borderColor:"#71AFFF"}}
              animated={false}
        >
            <YunYingRi ref={this.ribao}/>
            <Area ref={this.area}/>
            <OperatingDetail ref={this.operating}/>
        </Tabs>
      </div>
    )
  }
}

FydHome.contextTypes = {
  router:PropTypes.object
}
PropTypes.object
export default FydHome;
