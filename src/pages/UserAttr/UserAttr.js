import React from 'react';
import ReactEcharts from 'echarts-for-react';
import UserAttrData from './UserAttrData'
import AyoBase from '../../core/index';
const { PageBase } = AyoBase;


class UserAttr extends PageBase{
  constructor(props){
    super(props);
    this.state = {option:UserAttrData.option}

  }

  render(){
    return (
        <div className="UserAttr">
          <ReactEcharts
            option={this.state.option}
            />
        </div>

    )
  }

}

export default UserAttr
