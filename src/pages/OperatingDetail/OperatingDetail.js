import React from 'react';
import AyoBase from '../../core';
import './OperatingDetail.css';
import BenefitData from '../data/testData';
import {Tabs} from 'antd'
import YunYingRi from "../YunyingRi/YunYingRi";
import Area from "../viewArea/Area"
import ReactEcharts from 'echarts-for-react';
import mock from './mock';

const TabPane = Tabs.TabPane;

const {
  PageBase,
} = AyoBase;

class OperatingDetail extends PageBase {
  constructor(props){
    super(props);
    this.state = {option:mock.mockOption(event),
        charts: [
           820, 932, 901, 934, 1290, 1330, 1320
        ]
    }

    console.log(this.state.option);
  }
  componentWillMount(){
    // console.log(this.getQuery())
  }
  handleModeChange(){
    //存储数据至本地
    BenefitData.set({a:1,b:2});

    //从本地获取数据
    console.log(BenefitData.get());
  }
  handleClick(event) {
    // document.getElementsByClassName("tabs-cell").setAttribute("class", "");

    var paras = document.getElementsByClassName('tabs-cell');
    for(var i=0;i<paras.length;i++) {
      paras[i].children[0].setAttribute("class","")
    }
    event.target.setAttribute("class","isClick");
    console.log('tab切换')
  }
  viewDetails(event) {
  
    event.target.parentNode.style.backgroundColor="#E0E0E0";
    // setTimeout(function(){
    //   event.target.parentNode.style.backgroundColor="#E0E0E0";
    // },1000)
  }
  getDpr(){
        var dpr = $('html').attr('data-dpr');
        if (dpr == 1) {
            return 12;
        }else if (dpr == 2) {
            return  24;
        }else {
            return 36;
        }
  };
  render() {
    return (
      <div className="operation-box">
          <div className="detail-row">
              <div className="row-cell weight">日期</div>
              <div className="row-cell weight">身份验证数</div>
              <div className="row-cell weight">手机实名</div>
              <div className="row-cell weight">交单总数(申请阶段)</div>
              <div className="row-cell weight">截流人数(申请阶段)</div>
              <div className="row-cell weight">转化人数(申请阶段)</div>
              <div className="row-cell weight">预审人数</div>
              <div className="row-cell weight">预审拒绝人数</div>
              <div className="row-cell weight">预审通过人数</div>
              <div className="row-cell weight">授信完成人数</div>
              <div className="row-cell weight">授信通过人数</div>
              <div className="row-cell weight">授信金额</div>
              <div className="row-cell weight">交单总数(提现阶段)</div>
              <div className="row-cell weight">截流人数(提现阶段)</div>
              <div className="row-cell weight">可电审总量</div>
              <div className="row-cell weight">进件总数</div>
              <div className="row-cell weight">电审通过量</div>
              <div className="row-cell weight">电审通过金额</div>
              <div className="row-cell weight">电审拒绝量</div>
              <div className="row-cell weight">签约人数</div>
              <div className="row-cell weight">签约金额</div>
              <div className="row-cell weight">签约通过人数</div>
              <div className="row-cell weight">签约通过金额</div>
              <div className="row-cell weight">放款人数</div>
              <div className="row-cell weight">放款金额</div>
              <div className="row-cell weight">新用户贷款人数</div>
              <div className="row-cell weight">新用户贷款金额</div>
              <div className="row-cell weight">老用户贷款金额</div>
              <div className="row-cell weight">老用户贷款人数</div>
          </div>
          <div className="detail-row">
              <div className="row-cell weight">2018..07.05</div>
              <div className="row-cell weight">1000</div>
              <div className="row-cell weight">1000</div>
              <div className="row-cell weight">1000</div>
              <div className="row-cell weight">1000</div>
              <div className="row-cell weight">1000</div>
              <div className="row-cell weight">1000</div>
              <div className="row-cell weight">1000</div>
              <div className="row-cell weight">预审通过人数</div>
              <div className="row-cell weight">授信完成人数</div>
              <div className="row-cell weight">授信通过人数</div>
              <div className="row-cell weight">授信金额</div>
              <div className="row-cell weight">交单总数(提现阶段)</div>
              <div className="row-cell weight">截流人数(提现阶段)</div>
              <div className="row-cell weight">可电审总量</div>
              <div className="row-cell weight">进件总数</div>
              <div className="row-cell weight">电审通过量</div>
              <div className="row-cell weight">电审通过金额</div>
              <div className="row-cell weight">电审拒绝量</div>
              <div className="row-cell weight">签约人数</div>
              <div className="row-cell weight">签约金额</div>
              <div className="row-cell weight">签约通过人数</div>
              <div className="row-cell weight">签约通过金额</div>
              <div className="row-cell weight">放款人数</div>
              <div className="row-cell weight">放款金额</div>
              <div className="row-cell weight">新用户贷款人数</div>
              <div className="row-cell weight">新用户贷款金额</div>
              <div className="row-cell weight">老用户贷款金额</div>
              <div className="row-cell weight">老用户贷款人数</div>
          </div>          
  


      </div>
               
    )
  }
}

export default OperatingDetail;
