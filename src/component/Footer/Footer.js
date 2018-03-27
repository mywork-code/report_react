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
    const {
      showFooter = true
    } = this.props;
    if (!showFooter) return null;
  	return(<div className="flex-hrz footer-group">
  	  <div className="flex-full footer-item active">
        <p><i className="icon iconfont icon-pic"></i></p>
        <p className="icon-des">首页</p>
      </div>
      <div className="flex-full footer-item">
        <p><i className="icon iconfont icon-editor"></i></p>
        <p className="icon-des">股票</p>
      </div>
      <div className="flex-full footer-item">
        <p><i className="icon iconfont icon-createtask"></i></p>
        <p className="icon-des">社区</p>
      </div>
      <div className="flex-full footer-item">
        <p><i className="icon iconfont icon-shangchuan1"></i></p>
        <p className="icon-des">我的</p>
      </div>
  	</div>)
  }
}
 
export default Footer;
