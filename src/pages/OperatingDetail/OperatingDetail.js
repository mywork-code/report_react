import React from 'react';
import AyoBase from '../../core';
import './OperatingDetail.css';
import BenefitData from '../data/testData';
import {Tabs} from 'antd'
import YunYingRi from "../YunyingRi/YunYingRi";
import Area from "../viewArea/Area"
import ReactEcharts from 'echarts-for-react';
import mock from './mock';
import ApassTable from '../../component/ApassTable/ApassTable'


const TabPane = Tabs.TabPane;

const {
  PageBase,
} = AyoBase;

class OperatingDetail extends PageBase {
  constructor(props){
    super(props);
    this.state = {
       dataSource: mock.tableDate().dataSource,
       columns: mock.tableDate().columns,
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
  componentDidMount(){
    ApassHttp.post({
      url:Apis.api.queryReport,
      params:{
        "type": "1",
        "beDate": "2018-07-02",
        "afDate": "2018-07-04"
      }
    })
  }  
  render() {
    return (
        <ApassTable dataSource={this.state.dataSource} columns={this.state.columns}/>
               
    )
  }
}

export default OperatingDetail;
