import React from 'react';
import ReactEcharts from 'echarts-for-react';
import UserAge from './UserAge'
import UserMarr from './UserMarriage';
import UserMaleFemale from './UserMaleFemaleRatio';
import UserMobile from './UserMobile';
import AyoBase from '../../core/index';
const { PageBase } = AyoBase;


class UserAttr extends PageBase{
  constructor(props){
    super(props);
    this.state = {MaleFemale:UserMaleFemale.MaleFemaleOption ,Age:UserAge.AgeOption,Marr:UserMarr.MarrOption , Mobile:UserMobile.MoboleOption}

  }

  render(){
    return (
        <div className="UserAttr">
          <ReactEcharts
            option={this.state.MaleFemale}
          />
          <ReactEcharts
            option={this.state.Age}
            />
          <ReactEcharts
            option={this.state.Marr}
          />
          <ReactEcharts
            option={this.state.Mobile}
          />
        </div>

    )
  }

}

export default UserAttr
