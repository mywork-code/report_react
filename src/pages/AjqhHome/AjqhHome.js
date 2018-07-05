import React from 'react';
import AyoBase from '../../core';
import './AjqhHome.css';
import BenefitData from '../data/testData';
import {Tabs} from 'antd'
import YunYingRi from "../YunyingRi/YunYingRi";
import Area from "../viewArea/Area"
import ReactEcharts from 'echarts-for-react';
import mock from './mock';

const TabPane = Tabs.TabPane;

const {
  PageBase,
} = AyoBase;

class FydHome extends PageBase {
  constructor(props){
    super(props);
    this.state = {option:mock.mockOption(event),
        charts: [
           820, 932, 901, 934, 1290, 1330, 1320
        ]
    }

    console.log(this.state.option);
  }
  componentWillMount(){
    // console.log(this.getQuery())
  }
  handleModeChange(){
    //存储数据至本地
    BenefitData.set({a:1,b:2});

    //从本地获取数据
    console.log(BenefitData.get());
  }
  handleClick(event) {
    // document.getElementsByClassName("tabs-cell").setAttribute("class", "");

    var paras = document.getElementsByClassName('tabs-cell');
    for(var i=0;i<paras.length;i++) {
      paras[i].children[0].setAttribute("class","")
    }
    event.target.setAttribute("class","isClick");
    console.log('tab切换')
  }
  viewDetails(event) {

    event.target.parentNode.style.backgroundColor="#E0E0E0";
    // setTimeout(function(){
    //   event.target.parentNode.style.backgroundColor="#E0E0E0";
    // },1000)
  }
  getDpr(){
        var dpr = $('html').attr('data-dpr');
        if (dpr == 1) {
            return 12;
        }else if (dpr == 2) {
            return  24;
        }else {
            return 36;
        }
  };
  render() {
    return (
      // <div className="ajqh-tabs">
      //     <div className="tabs-cell"><span  onClick={this.handleClick} className="isClick">电商运营报表</span></div>
      //     <div className="tabs-cell"><span  onClick={this.handleClick} className="">贷超流量监控表</span></div>

      // </div>
      <div className="area-box">
          <div className="ajqh-tabs">
              <div className="tabs-cell"><span  onClick={this.handleClick} className="isClick">电商运营报表</span></div>
              <div className="tabs-cell"><span  onClick={this.handleClick} className="">贷超流量监控表</span></div>
          </div>
          <div className="operation-title">趋势图  
              <img src='http://www.wwtliu.com///sxtstu///blueberrypai///indexImg///banner1.jpg'/>
          </div>          
          <div className="area-top">
            <ReactEcharts
              option={this.state.option}
              className='react_for_echarts'/>
          </div>
          <div className="area-bottom">

          </div>
          <div className="space-line"></div>
          <div className="tabs-title">各渠道监控表  
          <img src='http://www.wwtliu.com///sxtstu///blueberrypai///indexImg///banner1.jpg'/>
          </div>
          <div className="operation-row">
              <div className="row-cell weight">日期</div>
              <div className="row-cell weight">渠道</div>
              <div className="row-cell weight">注册人数</div>
              <div className="row-cell weight">产品</div>
              <div className="row-cell weight">点击人数</div>
          </div>
          <div className="operation-row" onClick={this.viewDetails}>
              <div className="row-cell">5月1日</div>
              <div className="row-cell">3000</div>
              <div className="row-cell">5000</div>
              <div className="row-cell">4564</div>
              <div className="row-cell">44445</div>
          </div>
          <div className="operation-row">
              <div className="row-cell">5月2日</div>
              <div className="row-cell">1000</div>
              <div className="row-cell">5000</div>
              <div className="row-cell">4564</div>
              <div className="row-cell">44445</div>
          </div>  
          <div className="operation-row">
              <div className="row-cell">5月3日</div>
              <div className="row-cell">2000</div>
              <div className="row-cell">5000</div>
              <div className="row-cell">4564</div>
              <div className="row-cell">44445</div>
          </div>                     
      </div>
               
    )
  }
}

export default FydHome;
