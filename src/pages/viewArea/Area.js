import React from 'react';
import AyoBase from '../../core';
import ReactEcharts from 'echarts-for-react';
import "./Area.css";
import mock from './mock';
import AreaTable from '../../component/AreaTable/AreaTable'

require('echarts/map/js/china.js');

const {PageBase} = AyoBase;


class Area extends PageBase {
  constructor(props) {
    super(props);
    this.state = {
      option: mock.mockOption(),
      dataSource:mock.tableDate().dataSource,
      columns:mock.tableDate().columns,
    }

    console.log(this.state.option);
  }

  render() {
    return (
      <div className="area-box">
        <div className="area-top">
          <ReactEcharts
            option={this.state.option}
            className='react_for_echarts'/>
        </div>
        <AreaTable columns={this.state.columns} />
      </div>
    )
  }

}


export default Area;
