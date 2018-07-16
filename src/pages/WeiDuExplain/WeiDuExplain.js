import React from 'react';
import AyoBase from '../../core';
import './WeiDuExplain.css';
import {getColumns,getDataSource,getPagination,getDataSource2} from './mock'

const {
  PageBase,
} = AyoBase;




class WeiDuExplain extends PageBase {
  constructor(){
    super();
    this.state = {
      dataSource:getDataSource(),
      columns:getColumns('授信环节'),
      dataSource2:getDataSource2(),
      columns2:getColumns('决策-提现环节'),
    }
  }


  render() {

    const columns1 = getDataSource().map((data,index) => <li className="weidu-item" key={index}>{data.name+"：" +data.mean}</li>);

    const columns2 = getDataSource2().map((data,index) => <li className="weidu-item" key={index}>{data.name+"：" +data.mean}</li>);


    return (
      <div className="weidu-box">
        <p className="weidu-title">授信环节</p>
          {
            columns1
          }
        <p className="weidu-line"></p>
        <p className="weidu-title"> 决策-提现环节</p>
          {
            columns2
          }
      </div>
    )
  }
}

export default WeiDuExplain;
