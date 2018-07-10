import React from 'react';
import AyoBase from '../../core';
import './WeiDuExplain.css';
import {Table} from 'antd';
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
    return (
      <div style={{background:'#ffffff'}}>
        <Table dataSource={this.state.dataSource} columns={this.state.columns}
               pagination={getPagination()}/>
        <Table dataSource={this.state.dataSource2} columns={this.state.columns2}
               pagination={getPagination()}/>
      </div>
    )
  }
}

export default WeiDuExplain;
