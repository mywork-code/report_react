import React from 'react';
import AyoBase from '../../core';
import './FydHome.css';
import BenefitData from '../data/testData';
import {Tabs} from 'antd'
import YunYingRi from "../YunyingRi/YunYingRi";
import Area from "../viewArea/Area"

const TabPane = Tabs.TabPane;

const {
  PageBase,
} = AyoBase;

class FydHome extends PageBase {
  constructor() {
    super();
    this.state = {}
  }

  componentWillMount() {
    // console.log(this.getQuery())
  }

  handleModeChange() {
    //存储数据至本地
    BenefitData.set({a: 1, b: 2});

    //从本地获取数据
    console.log(BenefitData.get());
  }

  render() {
    return (
      <div>
        <Tabs onChange={this.handleModeChange}
              defaultActiveKey="1"
              tabBarStyle={{marginBottom:0}}
        >
          <TabPane tab="运营日报表" key="1">
            <YunYingRi/>
          </TabPane>
          <TabPane tab="地区监控表" key="2">
            <Area/>
          </TabPane>
          <TabPane tab="运营明细表" key="3">Content of tab 3</TabPane>
          <TabPane tab="用户属性分析表" key="4">Content of tab 4</TabPane>
        </Tabs>
      </div>
    )
  }
}

export default FydHome;
