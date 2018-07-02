import React from 'react';
import AyoBase from '../../core';
import './Home.css';
import BenefitData from '../data/testData';
import {Row,Col,Card} from 'antd'

const { Meta } = Card;

const {
  PageBase,
  HttpClient,
} = AyoBase;

class Home extends PageBase {
  constructor(props) {
    super(props);
  }

  testClick = () => {
    //console.log(AyoBase);

    //this.showLoading();
    // this.forward('fyd-home',{
    //   query:{
    //     a:1,
    //   }
    // })

    HttpClient.get({
      url: 'http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=10',
    }, (data) => {
      console.log(data);
    });
  }
  toFydHome = ()=>{
    //demo传参
    this.forward('fyd-home',{
      query:{
        aaa:1,
        bbb:2
      }
    })

  }


  render() {
    return (
      <div className="user-home">
        <Row>
          <Col span={24}>

              <div className="fyd-icon" onClick={this.toFydHome}>
                <img src='http://www.wwtliu.com///sxtstu///blueberrypai///indexImg///banner1.jpg'/>
              </div>
              <div className="fyd-title">房易贷</div>

              <div className="ajqh-icon">
                <img src='http://www.wwtliu.com///sxtstu///blueberrypai///indexImg///banner2.jpg'/>
              </div>
              <div className="ajqh-title">安家趣花</div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home;
