import React from 'react';
import AyoBase from '../../core/index';
import './YunYingRi.css';
import {Row,Col,Modal} from 'antd'
import {getDemo,getOption} from './YunyingRiData'

const {
  PageBase,
} = AyoBase;
import ReactEcharts from 'echarts-for-react';
import HttpClient from "../../core/http/HttpClient";


class YunYingRi extends PageBase {
   constructor(props) {
     super(props);
     this.state = {
        visible : true
     };
   }
   componentDidMount(){
     HttpClient.get({
       url: 'http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=10',
     }, (data) => {
       console.log(data);
     });
   }
  handleOk= (e)=>{
     console.log(e)
     this.setState({
       visible:false
     });
  }
  handleCancel= (e)=>{
     this.setState({
       visible:false
     });
  }



  render() {
  	return(
       <div className='yunying-grap'>
         <Row>
           <Col span={2}></Col>
           <Col span={20}>
             <div>
               <ReactEcharts
                 option={getOption()}
                 style={{height: '450px',weight:'676px'}}
               />
               <Modal
                 title="Basic Modal"
                 visible={this.state.visible}
                 onOk={this.handleOk.bind(this)}
                 onCancel={this.handleCancel.bind(this)}
               >
                 <p>Some contents...</p>
                 <p>Some contents...</p>
                 <p>Some contents...</p>
               </Modal>
             </div>
           </Col>
           <Col span={2}></Col>
         </Row>
       </div>
    )
  }
}

export default YunYingRi;
