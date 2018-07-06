import React from 'react';
import AyoBase from '../../core';
import './OperatingDetail.css';
import mock from './mock';

import ApassTable from '../../component/ApassTable/ApassTable'
import {Apis,ApassHttp} from '../../core/index';

const {
  PageBase,
} = AyoBase;

class OperatingDetail extends PageBase {
  constructor(props){
    super(props);
    this.state = {
      dataSource: [],
      columns: [],
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

  render() {
    return (
      <div className="operation-box">
        <ApassTable dataSource={this.state.dataSource} columns={this.state.columns}/>
      </div>

    )
  }
}

export default OperatingDetail;
