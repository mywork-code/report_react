import React from 'react';
import AyoBase from '../../core';
import ReactEcharts from 'echarts-for-react';
import "./Area.css";
import mock from './mock';
import ApassTable from '../../component/ApassTable/ApassTable'
import ApassFilter from '../../component/ApassFilter/ApassFilter'

import ic_explain from '../../imgs/ic_explain.png'
import ic_filter from '../../imgs/ic_filter.png'

require('echarts/map/js/china.js');

const {PageBase} = AyoBase;

class AreaTitle extends React.Component {

  render() {
    return (
      <div className="title">
        <img src={ic_explain} onClick={this.props.leftClick}></img>
        <span className="title-text">{this.props.title}</span>
        <img src={ic_filter} onClick={this.props.rightClick}></img>
      </div>
    );
  }

}


class Area extends PageBase {
  constructor(props) {
    super(props);
    this.state = {
      option: mock.mockOption(),
      dataSource: mock.tableDate().dataSource,
      columns: mock.tableDate().columns,
    }
  }

  showExPlain = () =>{
  }

  showColumnsSelect = () => {
  }

  render() {
    return (
      <div className="area-box">
        <ReactEcharts
          option={this.state.option}
          className='map'/>
        <AreaTitle title="各地区用户业务转化监控" leftClick={this.showExPlain} rightClick={this.showColumnsSelect} />
        <ApassTable dataSource={this.state.dataSource} columns={this.state.columns}/>
        <ApassFilter title="维度指标配置" />
      </div>
    )
  }

}


export default Area;
