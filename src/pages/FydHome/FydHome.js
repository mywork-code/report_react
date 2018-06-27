import React from 'react';
import AyoBase  from '../../core';
import './FydHome.css';
import BenefitData from '../data/testData';
import Footer from '../../component/Footer';
import Header from '../../component/Header';
const {
  PageBase,
} = AyoBase;

class FydHome extends PageBase {
  constructor(props) {
    super(props);
  }

  testClick = () => {
  	console.log(AyoBase);

    BenefitData.set("key",{
      fuck: 1
    })
  }

  getSeesionData = () => {
    console.log(BenefitData.get());
  }

  render() {
  	return(
  	  <div className="user-home">
          <div className="fyd-icon" onClick={this.testClick}>
            <img src='http://www.wwtliu.com///sxtstu///blueberrypai///indexImg///banner1.jpg' />
          </div>
          <div className="fyd-title">房易贷</div>
          <div className="ajqh-icon"><img src='http://www.wwtliu.com///sxtstu///blueberrypai///indexImg///banner2.jpg' /></div>
          <div className="ajqh-title">安家趣花</div>
      </div>
    )
  }
}

export default FydHome;
