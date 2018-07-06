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
      that.setState({
        dataSource:mock.tableDate().dataSource,
        columns:mock.tableDate().columns
      })
    })
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
