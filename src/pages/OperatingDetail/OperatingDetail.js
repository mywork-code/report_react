import React from 'react';
import AyoBase from '../../core';
import './OperatingDetail.css';
import mock from './mock';
import ApassTable from '../../component/ApassTable/ApassTable'
import {Apis,ApassHttp} from '../../core/index';
const {
  PageBase,
} = AyoBase;

var startTime;
var endTime;
var dateType = "-7";

class OperatingDetail extends PageBase {

  constructor(props){
    super(props);
    this.state = {
      dataSource: [],
      columns: [],
    }
    console.log(this.state);
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
    console.log('step---------> getCurTime',startTime,endTime)
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
        "type": "1",
        "beDate": start,
        "afDate": end
      }
    }, (resp) => {
      console.log(resp);
      if(window.appModel){
        window.appModel.closeLoading();
      }
      resp.forEach(item => {
        if (item.reportDate > 0){
          item.reportDateStr = this.fmtDate(item.reportDate)
        }
      })
      this.setState({
        dataSource:resp,
        columns:mock.tableDate().columns
      })

    },(e) => {
      if(window.appModel){
        window.appModel.closeLoading();
      }
    });
  }

  fmtDate(obj){
    var date =  new Date(obj);
    var y = 1900+date.getYear();
    var m = "0"+(date.getMonth()+1);
    var d = "0"+date.getDate();
    return y+"."+m.substring(m.length-2,m.length)+"."+d.substring(d.length-2,d.length);
  }

  render() {
    return (
      <div className="operation-box">
        <ApassTable dataSource={this.state.dataSource} columns={this.state.columns} fixedFirstColums={true}/>
      </div>
    )
  }
}
export default OperatingDetail;
