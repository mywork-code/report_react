import React from 'react';
import AyoBase from '../../core';
import './FydHome.css';
import BenefitData from '../data/testData';
import {Tabs} from 'antd'
import YunYingRi from "../YunyingRi/YunYingRi";
import Area from "../viewArea/Area"
import UserAttr from "../UserAttr/UserAttr"
import OperatingDetail from "../OperatingDetail/OperatingDetail"

const TabPane = Tabs.TabPane;

const {
  PageBase,
} = AyoBase;

var activeKeyIndex = 1;

class FydHome extends PageBase {
  constructor() {
    super();
    this.state = {}
    this.area = React.createRef();
    window.onDateChanged = function (data) {
      if(activeKeyIndex == 2){
        console.log(data)
        this.area.current.onDateChanged(data);
      }
    };
    window.onDateChanged = window.onDateChanged.bind(this);
  }

  componentWillMount() {
    // console.log(this.getQuery())
  }

  handleModeChange = (activeKey) => {
    activeKeyIndex = activeKey;
    if(activeKeyIndex == 2){
      if(this.area.current){
        let areaTime = this.area.current.getCurTime()
        window.appModel.syncCurrentPageDate(areaTime.dateStart,areaTime.dateEnd)
      }

    }
    // //存储数据至本地
    // BenefitData.set({a: 1, b: 2});
    //
    // //从本地获取数据
    // console.log(BenefitData.get());
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
            <Area ref={this.area}/>
          </TabPane>
          <TabPane tab="运营明细表" key="3"><OperatingDetail/></TabPane>
          <TabPane tab="用户属性分析表" key="4">
            <UserAttr/>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default FydHome;
