import React from 'react';
import AyoBase from '../../core';
import './FydHome.css';
import BenefitData from '../data/testData';
import {Tabs} from 'antd'
import YunYingRi from "../../component/YunyingRi/YunYingRi";

const TabPane = Tabs.TabPane;

const {
  PageBase,
} = AyoBase;

class FydHome extends PageBase {
  constructor(){
    super();
    this.state = {
      mode:'top'
    }
  }
  componentWillMount(){
    console.log(111);
    console.log(this.getQuery())
  }
  handleModeChange(){
    console.log(111)
    BenefitData.set({a:1,b:2});
    console.log(BenefitData.get());
  }

  render() {
    return (
      <div>
        <Tabs onChange={this.handleModeChange}
          defaultActiveKey="1"
          tabPosition={this.state.mode}
        >
          <TabPane tab="运营日报表" key="1">
            <YunYingRi/>
          </TabPane>
          <TabPane tab="地区监控表" key="2">Content of tab 2</TabPane>
          <TabPane tab="运营明细表" key="3">Content of tab 3</TabPane>
          <TabPane tab="用户属性分析表" key="4">Content of tab 4</TabPane>
        </Tabs>
      </div>
    )
  }
}

export default FydHome;
