import React from 'react';
import AyoBase from '../../core';
import './AjqhHome.css';
import BenefitData from '../data/testData';
import {Tabs} from 'antd'
import YunYingRi from "../YunyingRi/YunYingRi";
import Area from "../viewArea/Area"
import ReactEcharts from 'echarts-for-react';
import mock from './mock';
import ApassTable from '../../component/ApassTable/ApassTable'
import ic_explain from '../../imgs/ic_explain.png'
import ic_filter from '../../imgs/ic_filter.png'
import ApassFilter from '../../component/ApassFilter/ApassFilter'
import {Apis,ApassHttp} from '../../core/';

const TabPane = Tabs.TabPane;

const {
  PageBase,
} = AyoBase;

class AjqhTitle extends React.Component {

  render() {
    return (
      <div className="AjqhTitle">
        <span className="AjqhTitle-text">{this.props.title}</span>
        <img src={ic_filter} onClick={this.props.rightClick}></img>
      </div>
    );
  }

}

class FydHome extends PageBase {
  constructor(props){
    super(props);
    this.state = {
      option: mock.mockOption(),
      dataSource: mock.tableDate().dataSource,
      columns: mock.tableDate().columns,
      filterData: mock.filterData(),
      filterAllData: mock.filterAllData(),
      filterVisiable: false,
      filterAllVisiable: false,
      formData:[600, 300, 901, 934, 1290, 1330, 1320],

    }
  }

  componentDidMount(){

       window.localStorage.removeItem("formData")
       window.localStorage.setItem("formData",this.state.formData)


    ApassHttp.post({
      url:Apis.api.flowMonitor,
      params:{
        "type": "1",
        "prefixDate": "2018-07-02",
        "postpositionDate": "2018-07-04",
        "produceName":"",
        channel:""

      }
    },(resp) => {
      console.log(resp);
    })
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
  showExPlain = () => {
  }

  showFilter = () => {
    this.setState({filterVisiable: true});
  }
  filterCancel = () => {
    this.setState({filterVisiable: false});
  }

  filterComplete = () => {
    this.setState({filterVisiable: false});
    var filterData = this.state.filterData;
    filterData.map((data,bigIndex) => {
        data.child.map((col,index) => {
          if(col.isCheck==true) {
            console.log(col.value)
          }

        })
    })

    // this.setState((prevState) => {
    //   columns:prevState.columns
  
    // })
  }
  filterCellClick = (groupIndex,childIndex) => {
    let groupData = this.state.filterData[groupIndex];
    let child = groupData.child;
    child[childIndex].isCheck = !child[childIndex].isCheck;
    groupData.haveSelect = this.haveSelect(child);
    this.setState((prevState) => ({
      filterData: prevState.filterData
    }));
  }



  filterGroupSelectAll = (groupIndex) =>{
    let groupData = this.state.filterData[groupIndex];
    let child = groupData.child;
    child.forEach((data) => {
      data.isCheck = !data.isCheck
    });
    groupData.haveSelect = this.haveSelect(child);
    this.setState((prevState) => ({
      filterData: prevState.filterData
    }));
  }
  //
 showAllFilter = () => {
    this.setState({filterAllVisiable: true});
  }
  filterAllCancel = () => {
    this.setState({filterAllVisiable: false});
  }

  filterAllComplete = () => {
    this.setState({filterAllVisiable: false});
      var filterData = this.state.filterAllData;
      filterData.map((data,bigIndex) => {
          data.child.map((col,index) => {
            if(col.isCheck==true) {
              console.log(col.value)
            }
            
          })
      })

  }

  filterAllCellClick = (groupIndex,childIndex) => {
    let groupData = this.state.filterAllData[groupIndex];
    let child = groupData.child;
    child[childIndex].isCheck = !child[childIndex].isCheck;
    groupData.haveSelect = this.haveSelect(child);
    this.setState((prevState) => ({
      filterData: prevState.filterData
    }));
  }


  filterAllGroupSelectAll = (groupIndex) =>{
    let groupData = this.state.filterAllData[groupIndex];
    let child = groupData.child;
    child.forEach((data) => {
      data.isCheck = !data.isCheck
    });
    groupData.haveSelect = this.haveSelect(child);
    this.setState((prevState) => ({
      filterData: prevState.filterData
    }));
  }


  //
 haveSelect(arr){
    let temp = false;
    arr.forEach((child) =>{
      if(child.isCheck){
        temp = true;
        return temp;
      }
    })
    return temp;
  }

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
          <AjqhTitle title="趋势图" rightClick={this.showFilter}/>         
          <div className="area-top">
            <ReactEcharts
              option={this.state.option}
              className='react_for_echarts'/>
          </div>
          <div className="area-bottom">

          </div>
          <div className="space-line"></div>
          <AjqhTitle title="各渠道监控表" leftClick={this.showExPlain} rightClick={this.showAllFilter}/>
          <div className="border-line"></div>
          <ApassTable dataSource={this.state.dataSource} columns={this.state.columns}/>
          <ApassFilter title="维度指标配置" filterData={this.state.filterData}
               visiable={this.state.filterVisiable}
               filterCancel={this.filterCancel}
               filterComplete={this.filterComplete}
               filterCellClick={this.filterCellClick}
               filterGroupSelectAll={this.filterGroupSelectAll}
           />
          <ApassFilter title="维度指标配置" filterData={this.state.filterAllData}
               visiable={this.state.filterAllVisiable}
               filterCancel={this.filterAllCancel}
               filterComplete={this.filterAllComplete}
               filterCellClick={this.filterAllCellClick}
               filterGroupSelectAll={this.filterAllGroupSelectAll}
           />                              
      </div>
               
    )
  }
}

export default FydHome;
