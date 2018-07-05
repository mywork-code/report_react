import React from 'react';
import ReactEcharts from 'echarts-for-react';
import UserAge from './UserAge'
import UserMarr from './UserMarriage';

import UserMaleFemaleRatio from './UserMaleFemaleRatio';

import AyoBase from '../../core/index';
const { PageBase } = AyoBase;


class UserAttr extends PageBase{
  constructor(props){
    super(props);
    this.state = {MaleFemale:UserMaleFemaleRatio.MaleFemaleOption ,Age:UserAge.AgeOption,Marr:UserMarr.MarrOption}


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

        </div>

    )
  }

}

export default UserAttr
