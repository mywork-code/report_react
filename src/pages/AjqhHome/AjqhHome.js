import React from 'react';
import AyoBase from '../../core';
import './AjqhHome.css';
import BenefitData from '../data/testData';
import YunYingRi from "../YunyingRi/YunYingRi";
import Area from "../viewArea/Area"
import ReactEcharts from 'echarts-for-react';
import mock from './mock';
import ApassTable from '../../component/ApassTable/ApassTable'
import ic_explain from '../../images/ic_explain.png'
import ic_filter from '../../images/ic_filter.png'
import ApassFilter from '../../component/ApassFilter/ApassFilter'
import {Apis,ApassHttp} from '../../core/';
import { Toast } from 'antd-mobile';


const {
  PageBase,
} = AyoBase;

class AjqhTitle extends React.Component {

    render(){
      return(
         <div className="AjqhTitle">
          <span className="AjqhTitle-text">{this.props.title}</span>
          <img src={ic_filter} onClick={this.props.rightClick}></img>
         </div>
        )
    }
}

class FydHome extends PageBase {
  constructor(props){
    super(props);
    this.state = {
      option: mock.mockOption(),
      dataSource: [],
      operatioSource: mock.tableDate().operatioSource,
      columns: mock.tableDate().columns,
      operatioColumns: mock.tableDate().operatioColumns,
      filterData: mock.filterData(),
      filterAllData: mock.filterAllData(),
      filterVisiable: false,
      filterAllVisiable: false,
      formData:[600, 300, 901, 934, 1290, 1330, 1320],
      xAxisData:[],
      seriesData1:[],
      seriesData2:[],
      seriesData3:[],
      productScreen:[],
      productScr:[],
      channelScr:[],
      nameArr:[]

    }
  }
  componentDidMount(){
   let newOptions = mock.mockOption();
    ApassHttp.postajqh({
      url:Apis.api.flowMonitor,
      params:{
        "type": "1",
        "prefixDate":"",
        "postpositionDate":"",
        "produceName":"",
        "channel":""

      }
    },(resp) => {
      var list = resp.list;
      console.log(resp)
      var ProduceMap = resp.ProduceMap;
      let newDataSource = new Array();
      let map = new Map();
      list.map((res) => {
        this.tableDataCover(newDataSource,res);
      });
      console.log(ProduceMap)
      var Producelist1 = ProduceMap.Producelist1;
      var Producelist2 = ProduceMap.Producelist2;
      var Producelist3 = ProduceMap.Producelist3;
      console.log(Producelist1)
      var that = this;
      Object.keys(Producelist1).forEach(function(key){
        that.state.seriesData1.push(Producelist1[key].num);
        that.state.xAxisData.push(Producelist1[key].createDate)
      });
      Object.keys(Producelist2).forEach(function(key){
        that.state.seriesData2.push(Producelist2[key].num);
      });
      Object.keys(Producelist3).forEach(function(key){
        that.state.seriesData3.push(Producelist3[key].num);
      });
      var nameArr=[];
      var name1 = Producelist1[0].produceNameto;
      var name2 = Producelist2[0].produceNameto;
      var name3 = Producelist3[0].produceNameto;
      this.state.nameArr.push(name1);
      this.state.nameArr.push(name2);
      this.state.nameArr.push(name3);
      console.log(this.state.nameArr)
      console.log(this.state.xAxisData)
     // Object.keys(arr).forEach(function(key){
     //    // console.log(key)

     //    // that.state.seriesData1.push(ProduceMap[key].num);
     //    // that.state.xAxisData.push(that.timesToDate(ProduceMap[key].createDate))
     // });

     console.log(this.state.seriesData1);
     console.log(this.state.xAxisData)
     newOptions.series[0].data = this.state.seriesData1;
     newOptions.series[1].data = this.state.seriesData2;
     newOptions.series[2].data = this.state.seriesData3;
     newOptions.series[0].name = Producelist1[0].produceNameto;
     newOptions.series[1].name = Producelist2[0].produceNameto;
     newOptions.series[2].name = Producelist3[0].produceNameto;
     newOptions.xAxis[0].data = this.state.xAxisData;
     newOptions.legend.data =  this.state.nameArr;
      this.setState({
        dataSource:newDataSource,
        option:newOptions
      });


    })
  }

  tableDataCover(array,res){
    array.push({
      date: res.createDate,
      source:res.channel,
      registerNum:res.num,
      product:res.produceName,
      clickNum:res.customerNum,
    });
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
    if(document.getElementsByClassName('tabs-cell')[0].children[0].getAttribute("class")=="isClick") {
      console.log("===============================>");
      ApassHttp.postesp(
        {
            url:'dataanalysis/operationAnalysisController/getOperationAnalysisList',
            params:{
              "days":"",
              "dateStart":"2018-06-05",
              "dateEnd":"2018-09-15",
              "platformids":"0"

            }
        },(resp)=>{
            console.log(resp);

        },(err)=>{
          console.log('请求失败')
        });

        document.getElementsByClassName('flowCon')[0].style.display ="none";
        document.getElementsByClassName('operationCon')[0].style.display ="block";
    } else {
        document.getElementsByClassName('flowCon')[0].style.display ="block";
        document.getElementsByClassName('operationCon')[0].style.display ="none";
    }

  }
  viewDetails(event) {

    event.target.parentNode.style.backgroundColor="#E0E0E0";
    // setTimeout(function(){
    //   event.target.parentNode.style.backgroundColor="#E0E0E0";
    // },1000)
  }
  timestampToDate(times){
    let date = new Date();
    date.setTime(times);
    return [(date.getMonth()+1),"月",date.getDate(),"日"].join("");
  }
  timesToDate(times){
    let date = new Date();
    date.setTime(times);
    return [(date.getMonth()+1),".",date.getDate(),"."].join("");
  }
  showExPlain = () => {
  }

  showFilter = () => {
    ApassHttp.postajqh({
      url:Apis.api.queryproduct,
      params:{
      }
    },(resp) => {
      let newFilterData= mock.filterData();
      var productList = resp.ProductList;
      // console.log(resp.ProductList)
      productList.forEach(function(e,index){
        // newFilterData[0].child[0].value = e;
        var obj = {
          value:e,
          isCheck:true,
        }

        newFilterData[0].child.push(obj);

      });

      console.log(newFilterData)
      this.setState({
        filterData:newFilterData,
        filterVisiable:true
      })


      let groupData = this.state.filterData;
       // console.log("88888",groupData[0].child)
      let child = groupData[0].child;
      child.forEach((data) => {
        data.isCheck = false;
      });
      groupData.haveSelect = this.haveSelect(child);
      this.setState((prevState) => ({
        filterData: prevState.filterData
      }));


    })
    // this.setState({filterVisiable: true});
  }
  filterCancel = () => {
    this.setState({filterVisiable: false});
  }

  filterComplete = () => {
    this.state.productScreen=[];
    var filterData = this.state.filterData;
    let hasCheck = 0;
    filterData.map((data,bigIndex) => {
        data.child.map((col,index) => {
          if(col.isCheck==true) {
              hasCheck = hasCheck + 1;
              this.state.productScreen.push(col.value)
          }

        })
    })
    if (hasCheck < 1) {
      Toast.info("最少选择1项",1);
    }else if (hasCheck > 3) {
      Toast.info("最多只可选择3项",1);
    }else {
      this.setState({filterVisiable: false});
    }


    console.log(this.state.productScreen)
  }
  filterCellClick = (groupIndex,childIndex) => {
    let groupData = this.state.filterData[groupIndex];
    let child = groupData.child;
    child[childIndex].isCheck = !child[childIndex].isCheck;
    groupData.haveSelect = this.haveSelect(child);
    //
    let hasCheck = 0;
    this.state.filterData.forEach((item1, index1) => {
      item1.child.forEach((item, index) => {
        if (item.isCheck) {
          hasCheck = hasCheck + 1;
        }
      })
    })
    if (hasCheck > 3) {
      Toast.info("最多只可选择3项",1);
      child[childIndex].isCheck = !child[childIndex].isCheck;
    }
    //
    this.setState((prevState) => ({
      filterData: prevState.filterData
    }));
  }



  filterGroupSelectAll = (groupIndex) =>{
    let groupData = this.state.filterData[groupIndex];
    let child = groupData.child;
    let hasCheck = 0;
    child.forEach((data) => {
      data.isCheck = !data.isCheck
      if(data.isCheck) {
        hasCheck = hasCheck + 1;
      }
    });

    if (hasCheck > 3) {
      Toast.info("最多只可选择3项",1);
      child.forEach((data) => {
        data.isCheck = false;
      });
    } else {

    }
    groupData.haveSelect = this.haveSelect(child);
    this.setState((prevState) => ({
        filterData: prevState.filterData
    }));
  }
  //
 showAllFilter = () => {
    ApassHttp.postajqh({
      url:Apis.api.queryproduct,
      params:{
      }
    },(resp) => {
      let newFilterAllData= mock.filterAllData();
      var productList = resp.ProductList;
      var channelList =resp.ChannelList;
      console.log(resp)
      productList.forEach(function(e,index){
        var obj = {
          value:e,
          isCheck:true,
        }
        newFilterAllData[0].child.push(obj);
      });
      channelList.forEach(function(e,index){
        var obj = {
          value:e,
          isCheck:true,
        }
        newFilterAllData[1].child.push(obj);
      });

      console.log(newFilterAllData[0].child)
      this.setState({
        filterAllData:newFilterAllData,
        filterAllVisiable:true

      })
    })
  }
  filterAllCancel = () => {
    this.setState({filterAllVisiable: false});
  }

  filterAllComplete = () => {
    this.state.productScr = [];
    this.state.channelScr = [];
    this.setState({filterAllVisiable: false});
      var filterData = this.state.filterAllData;
          filterData[0].child.map((col,index) => {
            if(col.isCheck==true) {
              this.state.productScr.push(col.value);
            }
          })
          filterData[1].child.map((col,index) => {
            if(col.isCheck==true) {
              this.state.channelScr.push(col.value);
            }

          })
      console.log(this.state.productScr)
      console.log(this.state.channelScr)

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
              <div className="tabs-cell"><span  onClick={this.handleClick} className="">电商运营报表</span></div>
              <div className="tabs-cell"><span  onClick={this.handleClick} className="isClick">贷超流量监控表</span></div>
          </div>
          <div className="flowCon">
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
           <div className="operationCon">
              <ApassTable dataSource={this.state.operatioSource} columns={this.state.operatioColumns}/>
           </div>
      </div>


    )
  }
}

export default FydHome;
