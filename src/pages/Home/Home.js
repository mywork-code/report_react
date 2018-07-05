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
  toAjqhHome = ()=>{
      //demo传参
      this.forward('ajqh-home',{
        query:{
          a:1,
          b:2
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

              <div className="ajqh-icon" onClick={this.toAjqhHome}>
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
