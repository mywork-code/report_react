import React from 'react';
import AyoBase from '../../core/index';
import './YunYingRi.css';
import ApassTable from '../../component/ApassTable/ApassTable';
import ApassFilter from '../../component/ApassFilter/ApassFilter'
import mock from './mock'
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'
import { Toast } from 'antd-mobile';

import ic_explain from '../../images/ic_explain.png'
import ic_filter from '../../images/ic_filter.png'

const {
  PageBase,
} = AyoBase;
import ReactEcharts from 'echarts-for-react';
import {ApassHttp, Apis} from "../../core";

import ApassTitle from '../../component/ApassTitle/ApassTitle';

var startTime;
var endTime;
let dateType = "-7";;

class YunYingRi extends PageBase {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      option: '',
      dataSource: [],
      columns: mock.tableData().columns,
      filterData: mock.filterData(),
      filterData2: mock.filterData2(),
      filterVisiable: false,
      filterVisiable2: false,
    };

    this.showFilter.bind(this);
    this.getLegendDataArr.bind(this);
    this.getSeriesArr.bind(this);
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
    let hasCheck = 0;
    filterData.map((data, bigIndex) => {
      data.child.map((col, index) => {
        if(col.isCheck){
          hasCheck = hasCheck + 1;
        }
        columns.forEach((item, index) => {
          if (item.title == col.value) {
            item.visiable = col.isCheck
          }
        })
      })
    })

    if (hasCheck < 1) {
      Modal.warning({
        title: '警告',
        content: '最少选择1项',
      });
    }

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

  filterComplete2 = () => {
    this.getLegendDataArr();
    this.getSeriesArr();
    this.setState({filterVisiable2: false});
  }

  filterCellClick2 = (groupIndex, childIndex) => {
    let groupData = this.state.filterData2[groupIndex];
    let child = groupData.child;
    child[childIndex].isCheck = !child[childIndex].isCheck;

    let hasCheck = 0;
    this.state.filterData2.forEach((item1, index1) => {
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
    this.setState((prevState) => ({
      filterData2: prevState.filterData2
    }));

  }

  filterCancel2 = () => {
    this.setState({filterVisiable2: false});
  }

  filterGroupSelectAll2 = () => {

  }


  getLegendDataArr = () => {
    var arr = [];
    this.state.filterData2.forEach((item, index) => {
      item.child.forEach((chItem, chIndex) => {
        if (chItem.isCheck) {
          arr.push(chItem.value)
        }
      })
    })
    return arr;
  }
  getXAxisData = ()=>{
    var arr = [];
    this.state.dataSource.forEach((jsonObj,index)=>{
      arr.push(jsonObj.date)
    })

    return arr;
  }
  getSeriesArr = () => {
    var arr = [];
    this.state.filterData2.forEach((item, index) => {
      item.child.forEach((chItem, chIndex) => {
        if (chItem.isCheck) {
          let jsonObj = {};
          jsonObj.name = chItem.value,
            new RegExp("率").test(chItem.value) ?
              (
                jsonObj.type = 'line',
                  jsonObj.yAxisIndex = 1
              ) :
              (
                jsonObj.type = 'bar',
                  jsonObj.yAxisIndex = 0
              )
          jsonObj.data = this.getSeriesData(chItem.value);
          arr.push(jsonObj)
        }
      })
    })
    return arr;
  }

  getSeriesData = (item) => {
    var arr = [];
    this.state.dataSource.forEach((jsonObj, index) => {
      if (item == "有效注册率") {
        arr.push(jsonObj.effectiveRegisterPer)
      }
      else if (item == "决策完成率") {
        arr.push(jsonObj.decisionCompletionPer)
      }
      else if (item == "决策通过率") {
        arr.push(jsonObj.decisionPassPer)
      }
      else if (item == "提现率") {
        arr.push(jsonObj.drawMoneyPer)
      }
      else if (item == "电审通过率") {
        arr.push(jsonObj.autoCheckPer)
      }
      else if (item == "综合转化率") {
        arr.push(jsonObj.compositePer)
      }
      else if (item == "趣花注册人数") {
        arr.push(jsonObj.ajqhRegisterNum)
      }
      else if (item == "房易贷注册人数") {
        arr.push(jsonObj.fydRegisterNum)
      }
      else if (item == "注册截流数") {
        arr.push(jsonObj.intercepteRegisterNum)
      }
      else if (item == "中原交互总数") {
        arr.push(jsonObj.alternationWithZhongYuanNum)
      }
      else if (item == "有效注册数") {
        arr.push(jsonObj.effectiveRegisterNum)
      }
      else if (item == "手机认证数") {
        arr.push(jsonObj.mobileAuthenticationNum)
      }
      else if (item == "银行卡认证数") {
        arr.push(jsonObj.cardAuthenticationNum)
      }
      else if (item == "决策通过数") {
        arr.push(jsonObj.decisionPassNum)
      }
      else if (item == "提现人数") {
        arr.push(jsonObj.drawMoneyNum)
      }
      else if (item == "提现通过人数") {
        arr.push(jsonObj.drawMoneyPassNum)
      }
      else if (item == "签约金额") {
        arr.push(jsonObj.signMoneyCount)
      }
      else if (item == "决策完成数") {
        arr.push(jsonObj.decisionCompletionNum)
      }
      else if (item == "电审人数") {
        arr.push(jsonObj.autoCheckNum)
      }
      else if (item == "电审通过人数") {
        arr.push(jsonObj.autoCheckPassNum)
      }
    })

    return arr;
  }

  componentDidMount() {
    this.setState({
      option: this.getOption(this.getLegendDataArr(), this.getXAxisData(), this.getSeriesArr())
    })

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
  tableDataCover(array,res){
    array.push({
      date: this.timestampToDate(res.reportDate),
      effectiveRegisterPer: res.registerCount==0 ? 0 :  res.zyInvokeSuccessCount/res.registerCount,
      decisionCompletionPer:res.zyInvokeSuccessCount,
      decisionPassPer:this.toFloatMethod(res.authFinishPassCal),
      drawMoneyPer:this.toFloatMethod(res.withdrawApplyCal),
      autoCheckPer: res.auditWaitCount == 0 ? 0 : res.auditPassCount/res.auditWaitCount,
      compositePer: res.zyInvokeSuccessCount == 0 ? 0 :  res.auditPassCount/res.zyInvokeSuccessCount,
      ajqhRegisterNum: res.registerCount,
      fydRegisterNum: res.zyInvokeSuccessCount,
      intercepteRegisterNum:res.zyInvokeTotalCount-res.zyInvokeSuccessCount,
      alternationWithZhongYuanNum:res.zyInvokeTotalCount,
      effectiveRegisterNum:res.zyInvokeSuccessCount,
      mobileAuthenticationNum:res.identityAuthCount,
      cardAuthenticationNum:res.cardAuthCount,
      decisionPassNum:res.authFinishPass,
      drawMoneyNum:res.withdrawApply,
      drawMoneyPassNum:res.withdrawApply-res.withdrawApplyReject,
      signMoneyCount:res.submitOrderPassTotalAmount,
      decisionCompletionNum:res.authFinishPass,
      autoCheckNum:res.auditWaitCount,
      autoCheckPassNum:res.auditPassCount,
    });
  }
  toFloatMethod = (str)=>{
    let temp =str.substring(0,str.length-1);
    console.log(Number(temp)/100)
    return Number(temp)/100;

  }
  timestampToDate(times){
    if(startTime == endTime){
      let date = new Date();
      date.setTime(times);
      return [date.getHours()+1,":","00"].join("");
    }else {
      let date = new Date();
      date.setTime(times);
      return [(date.getMonth()+1),"月",date.getDate(),"日"].join("");

    }
  }

  onDateChanged = (data) => {
    if(data.dateStart != startTime || data.dateEnd != endTime){
      startTime = data.dateStart;
      endTime = data.dateEnd;
      dateType = data.dateType;
      this.getDataByTime(data.dateStart,data.dateEnd);
    }
  }


  getCurTime = () => {
    return {dateStart:startTime,dateEnd:endTime,dateType:dateType};
  }

  getDataByTime(start,end){
    if(window.appModel){
      window.appModel.showLoading();
    }
    ApassHttp.post({
      url: Apis.api.ribaobiao,
      params: {
        "type": "1",
        "beDate": start,
        "afDate": end,
      }
    }, (resp) => {
      console.log(resp)
      if( window.appModel){
        window.appModel.closeLoading();
      }
      let newDataSource = [];
      resp.map((res) => {
        this.tableDataCover(newDataSource,res);
      });
      this.setState({
        dataSource:newDataSource,
      });
    },(e) => {
      if(window.appModel){
        window.appModel.closeLoading();
      }
    });
  }

  getOption = (legendDataArr, xAxisData,seriesArr) => {
    return {
      title: {
        text: "趋势图",
        subtext: "",
        link: "",
        x: "center",
        textStyle: {
          fontSize: 16,
          fontWeight: "normal",
          color: "#333"
        },
        padding: 10,
        borderColor: "#ccc"
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        // data: ["有效注册率", "决策完成率", "提现率"],//TODO
        type:'scroll',
        data: legendDataArr,
        textStyle: {
          align: "right",
          fontSize: 12,
          color: "#333"
        },
        itemHeight: 12,
        itemWidth: 12,
        borderColor: "#ccc",
        padding: 40
      },
      toolbox: {
        show: true,
        feature: {
          myDimensionalyModel: {
            show: true,
            title: '维度指标',
            icon: 'path://M562.688 978.688c-9.184 0-18.72-2.144-28.288-6.4l-106.112-46.976c-38.144-16.864-68.128-62.784-68.192-104.512l-0.672-291.136c-0.064-31.68-16.736-79.392-36.48-104.192l-216.736-272.96c-19.712-24.8-15.456-43.424-11.168-52.288s16.192-23.776 47.904-23.776h689.76c31.712 0 43.616 14.88 47.936 23.744 4.288 8.864 8.544 ' +
            '27.456-11.2 52.32l-216.768 272.992c-19.68 24.8-36.384 72.544-36.448 104.192l-0.704 389.92c-0.096 34.784-21.792 ' +
            '59.072-52.832 59.072zM142.944 108.448c-11.264 0-17.792 2.944-19.104 5.664-1.312 2.752 0.448 9.696 7.424 18.496l216.736 272.96c24.288 ' +
            '30.56 43.328 85.024 43.392 124.032l0.672 291.136c0.064 29.056 22.56 63.52 49.12 75.328l106.112 46.976c5.472 2.4 10.656 3.648 15.328 3.648 ' +
            '19.296 0 20.8-20.768 20.8-27.168l0.704-389.92c0.064-39.008 19.136-93.472 43.36-124.032l216.768-272.96c7.008-8.8 8.736-15.776 7.424-18.496-1.344-2.72-7.872-5.664-19.136-5.664H142.944z ' +
            'M945.056 563.36h-224.8a16 16 0 0 1 0-32h224.8a16 16 0 0 1 0 32zM945.056 699.168h-224.8a16 16 0 0 1 0-32h224.8a16 16 0 0 1 0 32zM945.056 835.04h-224.8a16 16 0 0 1 0-32h224.8a16 ' +
            '16 0 0 1 0 32z',
            onclick: () => {
              this.setState({
                filterVisiable2: true
              })
            }
          }
        },
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          // data: ["2018-06-30", "2018-07-01", "2018-07-02", "2018-07-03", "2018-07-04", "2018-07-05", "2018-07-06"],
          data:xAxisData,
          axisLine: {
            show: false
          }
        }
      ],
      grid: {
        y: 70
      },
      yAxis: [
        {
          type: "value",
          axisLine: {
            lineStyle: {
              width: 2
            },
            show: false
          },
          nameLocation: "end",
          axisLabel: {
            textStyle: {
              fontSize: 10,
              color: "#333"
            }
          },
          min: 0,
          nameTextStyle: {
            baseline: "middle"
          }
        },
        {
          type: "value",
          min: 0,
          max: 1,
          axisLine: {
            lineStyle: {
              width: 2
            },
            show: false
          },
          axisLabel: {
            textStyle: {
              fontSize: 10
            }
          },
          nameTextStyle: {
            align: "center"
          }
        }
      ],
      /*series: [//TODO

        {
          name: "有效注册率",
          type: "line",
          data: [0.5, 0.24, 0.33, 0.56, 0.22, 0.68, 0.88],
          itemStyle: {
            normal: {
              color: "rgb(67, 177, 126)"
            }
          },
          yAxisIndex: 1
        },
        {
          name: "决策完成率",
          type: "line",
          data: [0.4, 0.8, 0.3, 0.8, 0.4, 0.2, 0.9],
          itemStyle: {
            normal: {
              color: "rgb(156, 204, 102)"
            }
          },
          yAxisIndex: 0
        },
        {
          name: "提现率",
          type: "line",
          data: [0.5, 0.4, 0.7, 0.6, 0.4, 0.8, 0.3],
          itemStyle: {
            normal: {
              lineStyle: {
                color: "rgb(247, 143, 64)"
              }
            }
          },
          yAxisIndex: 1
        }
      ],*/
      series: seriesArr

    }
  };

  render() {
    return (
      <div className='yunying-grap'>
        <ReactEcharts
          option={this.getOption(this.getLegendDataArr(), this.getXAxisData(), this.getSeriesArr())}
          style={{height: '450px', weight: '676px'}}
        />
        <ApassTitle title="各地区用户业务转化监控" leftClick={this.showExPlain.bind(this)} rightClick={this.showFilter}/>
        <ApassFilter title="维度指标配置" filterData={this.state.filterData}
                     visiable={this.state.filterVisiable}
                     filterCancel={this.filterCancel}
                     filterComplete={this.filterComplete}
                     filterCellClick={this.filterCellClick}
                     filterGroupSelectAll={this.filterGroupSelectAll}
        />

        <ApassFilter title="维度指标配置" filterData={this.state.filterData2}
                     visiable={this.state.filterVisiable2}
                     filterCancel={this.filterCancel2}
                     filterComplete={this.filterComplete2}
                     filterCellClick={this.filterCellClick2}
                     filterGroupSelectAll={this.filterGroupSelectAll2}
                     show
        />

        <ApassTable dataSource={this.state.dataSource} columns={this.state.columns} fixedFirstColums={true}/>
      </div>
    )
  }
}

export default YunYingRi;
