import React from 'react';
import AyoBase from '../../core';
import ReactEcharts from 'echarts-for-react';
import "./Area.css";
import mock from './mock';

require('echarts/map/js/china.js');

const { PageBase } = AyoBase;


class Area extends PageBase{
  constructor(props){
    super(props);
    this.state = {option:mock.mockOption()}

    console.log(this.state.option);
  }

  render(){
    return (
      <div className="area-box">
        <div className="area-top">
          <ReactEcharts
            option={this.state.option}
            className='react_for_echarts'/>
        </div>
        <div className="area-bottom">

        </div>
      </div>
    )
  }

}


export default Area;
