import React from 'react';
// import {
//   PageBase
// } from '../../core';
import './Footer.css';

class Footer extends React.Component {
   constructor(props) {
     super(props);

     this.state = {};
   }

  render() {
  	return(
  	  <div className="flex-hrz footer-group">
        <div className="flex-full footer-item active">
          <p><i className="icon iconfont icon-yunyingfenxi"></i></p>
          <p className="icon-des">运营分析</p>
        </div>
        <div className="flex-full footer-item">
          <p><i className="icon iconfont icon-yingyonggaikuang1"></i></p>
          <p className="icon-des">应用概况</p>
        </div>
  	  </div>
    )
  }
}

export default Footer;
