import React from 'react';
import AyoBase from '../../core';
import ReactEcharts from 'echarts-for-react';
import "./Area.css";
import mock from './mock';
import ApassTable from '../../component/ApassTable/ApassTable';
import ApassFilter from '../../component/ApassFilter/ApassFilter';
import ApassTitle from '../../component/ApassTitle/ApassTitle';
import {Apis, ApassHttp} from '../../core/index';



require('echarts/map/js/china.js');


const {PageBase} = AyoBase;


let startTime;
let endTime;
let dateType = "-7";

class Area extends PageBase {

  constructor(props) {
    super(props);
    this.state = {
      option: mock.mockOption(),
      dataSource: [],
      columns: mock.tableDate().columns,
      filterData: mock.filterData(),
      filterVisiable: false,
      startTime:'',
      endTime:''
    }
  }

  onDateChanged = (data) => {
    if(data.dateStart != startTime || data.dateEnd != endTime){
      startTime = data.dateStart;
      endTime = data.dateEnd;
      dateType = data.dateType;
      if(window.appModel && window.appModel.syncCurrentPageDate){
        window.appModel.syncCurrentPageDate(startTime,endTime,dateType);
      }
      this.getDataByTime(data.dateStart,data.dateEnd);
    }
  }

  getCurTime = () => {
    return {dateStart:startTime,dateEnd:endTime,dateType:dateType};
  }

  componentDidMount() {
    let date = new Date();
    endTime = this.coverReqTime(date);
    date.setDate(date.getDate() - 6);
    startTime =this.coverReqTime(date)
    this.getDataByTime(startTime,endTime);
  }

  coverReqTime(date){
    let month = date.getMonth()+1;
    month = month < 10 ? "0"+month : month;
    let day = date.getDate();
    day = day < 10 ? "0"+day : day;
    return [date.getFullYear(),"-",month,"-",day].join("");
  }

  getDataByTime(start,end){
    if(window.appModel){
      window.appModel.showLoading();
    }

    ApassHttp.post({
      url: Apis.api.queryReport,
      params: {
        "type": "2",
        "beDate": start,
        "afDate": end
      }
    }, (resp) => {
      if( window.appModel){
        window.appModel.closeLoading();
      }
      let newDataSource = new Array();
      let map = new Map();
      resp.map((res) => {
        this.tableDataCover(newDataSource,res);
        this.mapDataFilter(map,res);
      });
      let newOptions = this.mapDataCover(map);
      this.setState({
        dataSource:newDataSource,
        option:newOptions
      });
    },(e) => {
      if(window.appModel){
        window.appModel.closeLoading();
      }
    });
  }


  tableDataCover(array,res){
    array.push({
      date: this.timestampToDate(res.reportDate),
      region:res.providedBy,
      effectiveRegisterNum:res.zyInvokeSuccessCount,
      phoneAuthNum:res.mobileAuthCount,
      decisionCompletionNum:res.authFinishCount,
      decisionPassNum:res.authFinishPass,
      withdrawNum:res.withdrawApply,
      withdrawPassNum: (Number(res.withdrawApply) - Number(res.withdrawApplyReject)),
      phoneReviewNum: res.auditWaitCount,
      phoneReviewPassNum:res.auditPassCount,
      signMoney:res.submitOrderTotalAmount,
      decisionCompletionRate:res.authFinishCountCal,
      decisionPassRate:res.authFinishPassCal,
      withdrawRate:res.withdrawApplyCal,
    });
  }


  mapDataFilter(map,res){
    if(!map.has(res.providedBy)){
      map.set(res.providedBy,res.zyInvokeSuccessCount);
    }else{
      map.set(res.providedBy,map.get(res.providedBy)+res.zyInvokeSuccessCount);
    }
  }

  mapDataCover(map){
    let provinceCity = new Map();
    let provinceNum = new Map();
    map.forEach((v,k) => {
        console.log(k,v);
        if(!provinceCity.has(mock.StoreCityTable.get(k))){
          let city = new Map();
          city.set(k,v);
          provinceCity.set(mock.StoreCityTable.get(k),city);
          provinceNum.set(mock.StoreCityTable.get(k),v);
        }else{
          let city = provinceCity.get(mock.StoreCityTable.get(k));
          city.set(k,v);
          provinceNum.set(mock.StoreCityTable.get(k),provinceNum.get(mock.StoreCityTable.get(k))+v);
        }
    });

    let newOptions = mock.mockOption();

    newOptions.series[0].data = new Array();
    provinceNum.forEach((v,k) =>{
      newOptions.series[0].data.push({name:k,value:v});
    });

    newOptions.tooltip.formatter = function (params) {
      if(params.data){
        var toast =  '<div>'+params.data.name+ '-有效注册人数' +'</div>'

        let map = provinceCity.get(params.data.name);

        map.forEach((v,k) => {
          toast += '<p>'+ k +':' + v +'</p>'
        })

        return toast;
      }else{
        return '<div>暂无</div>'
      }
    };
    return newOptions;
  }


  timestampToDate(times){
    let date = new Date();
    date.setTime(times);
    return [(date.getMonth()+1),"月",date.getDate(),"日"].join("");
  }


  showExPlain = () => {
      if(window.appModel){
        let url;
        if(process.env.NODE_ENV == 'development'){
          url = "https://report-uat.apass.cn/#/weidu-explain"
        }else{
          url = "https://report.apass.cn/#/weidu-explain"
        }
        window.appModel.showNewWebPage(url, "维度释义");
      }
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
    var columns = this.state.columns;
    filterData.map((data, bigIndex) => {
      let offset = 0;
      if (bigIndex != 0) {
        offset = filterData[bigIndex - 1].child.length
      }
      data.child.map((col, index) => {
        columns[index + offset + 1].visiable = col.isCheck;
      })
    })

    this.setState((prevState) => {
      columns:prevState.columns
    })

  }

  filterCellClick = (groupIndex, childIndex) => {
    let groupData = this.state.filterData[groupIndex];
    let child = groupData.child;
    child[childIndex].isCheck = !child[childIndex].isCheck;
    groupData.haveSelect = this.haveSelect(child);
    this.setState((prevState) => ({
      filterData: prevState.filterData
    }));
  }


  filterGroupSelectAll = (groupIndex) => {
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

  haveSelect(arr) {
    let temp = false;
    arr.forEach((child) => {
      if (child.isCheck) {
        temp = true;
        return temp;
      }
    })
    return temp;
  }

  render() {
    return (
      <div className="view-area-box">
        <ReactEcharts
          option={this.state.option}
          className='view-area-map'/>

        <ApassTitle title="各地区用户业务转化监控" leftClick={this.showExPlain} rightClick={this.showFilter}/>
        <ApassTable dataSource={this.state.dataSource} columns={this.state.columns} fixedFirstColums={true}/>
        <ApassFilter title="维度指标配置" filterData={this.state.filterData}
                     visiable={this.state.filterVisiable}
                     filterCancel={this.filterCancel}
                     filterComplete={this.filterComplete}
                     filterCellClick={this.filterCellClick}
                     filterGroupSelectAll={this.filterGroupSelectAll}
        />
      </div>
    )
  }

}


export default Area;
