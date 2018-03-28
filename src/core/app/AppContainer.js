import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScreenLoading from '../../component/ScreenLoading';
class AppContainer extends Component {
	 /**
   * React用于建立父div与子div关系的函数
   * @description private
  */
  getChildContext() {
    return {
      showLoading: this.showLoading,
      hideLoading: this.hideLoading,
    /*showToast: this.showToast,
      closeToast: this.closeToast,*/
    };
  }
	constructor(props) {
	  super(props);
	  this.state = {
      showLoading: false,
    };

    const arrHandler = [
      'showLoading',
      'hideLoading',
    ];
    arrHandler.forEach(methodName => {
      this[methodName] = this[methodName].bind(this);
    });
	}

  /**
   * 调用显示loading
   */
  showLoading() {
    this.setState({
      showLoading: true,
    });
  }

  /**
   * 调用隐藏loading
   */
  hideLoading() {
    this.setState({
      showLoading: false,
    });
  }

	render () {
    const {
      showLoading
    } = this.state;
		return (<div className="app-container">
		  {this.props.children}
      {showLoading ? <ScreenLoading /> : null}
		</div>);
	}
}

AppContainer.childContextTypes = {
  showLoading: PropTypes.func,
  hideLoading: PropTypes.func,
 /*showToast: PropTypes.func,
  closeToast: PropTypes.func,*/
};

export default AppContainer;
