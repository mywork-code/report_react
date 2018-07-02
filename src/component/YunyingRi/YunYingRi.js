import React from 'react';
import AyoBase from '../../core';
import './YunYingRi.css';
import getOption from './YunyingRiData'

const {
  PageBase,
} = AyoBase;
import ReactEcharts from 'echarts-for-react';
import HttpClient from "../../core/http/HttpClient";


class YunYingRi extends PageBase {
   constructor(props) {
     super(props);
     this.state = {

     };
   }
   componentWillMount(){
     HttpClient.get({
       url: 'http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=10',
     }, (data) => {
       console.log(data);
     });
   }



  render() {

  	return(
       <div>
         <ReactEcharts
           option={getOption()}
           style={{height: '300px'}}
           opts={{renderer: 'svg'}} // use svg to render the chart.
         />

       </div>
    )
  }
}

export default YunYingRi;
