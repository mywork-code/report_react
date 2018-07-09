import React from 'react';
import AyoBase from '../../core';
import './OperatingDetail.css';
import mock from './mock';
import ApassTable from '../../component/ApassTable/ApassTable'


import ApassTable from '../../component/ApassTable/ApassTable'
import {Apis,ApassHttp} from '../../core/index';

const {
  PageBase,
} = AyoBase;

class OperatingDetail extends PageBase {
  constructor(props){
    super(props);
    this.state = {
<<<<<<< HEAD
       dataSource: mock.tableDate().dataSource,
       columns: mock.tableDate().columns,
=======
      dataSource: [],
      columns: [],
>>>>>>> acfcff14b4eb5f54b1bc17f9fe37d522d3ec85ef
    }

    console.log(this.state);
  }

  componentWillMount(){
    // console.log(this.getQuery())

  }

  componentDidMount(){
    const that = this
    ApassHttp.post({
      url:Apis.api.queryReport,
      params:{
        "type": "1",
        "beDate": "2018-07-02",
        "afDate": "2018-07-04"
      }
    },(resp) => {
      // 请求接口成功-赋值
      console.log(resp);
      resp.forEach(item => {
        if (item.reportDate > 0){
          item.reportDateStr = that.fmtDate(item.reportDate)
        }
      })

      that.setState({
        dataSource:resp,
        columns:mock.tableDate().columns
      })
    })
  }

  fmtDate(obj){
    var date =  new Date(obj);
    var y = 1900+date.getYear();
    var m = "0"+(date.getMonth()+1);
    var d = "0"+date.getDate();
    return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
  }
<<<<<<< HEAD
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
               
=======

  render() {
    return (
      <div className="operation-box">
        <ApassTable dataSource={this.state.dataSource} columns={this.state.columns}/>
      </div>

>>>>>>> acfcff14b4eb5f54b1bc17f9fe37d522d3ec85ef
    )
  }
}

export default OperatingDetail;
