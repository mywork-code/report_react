import React from 'react';
import PropTypes from 'prop-types';
import request from 'superagent';

class PageBase extends React.Component {
  constructor(props) {
    super(props);
  }

  // 向前跳转 
  forward(viewPath, options) {
    let myViewPath = null;
    if (!viewPath) {
      console.error('should set forward viewpath.');
    } else {
      const {
        history
      } = this.props;
      if (viewPath.indexOf('/') < 0) {
        myViewPath = '/' + viewPath;
      }
      const targetRoute = {
        pathname: myViewPath,
      };
      options && options.query && (targetRoute.query = options.query);
      options && options.state && (targetRoute.state = options.state);
      history.push(targetRoute);
    }
  }
  // 返回上一页面
  back() {
    const {
      history
    } = this.props;
    history.goBack();
  }

  // 替换当前路由
  replaceRouter(viewPath) {
    if (!viewPath) {
      console.error('should set forward viewpath.');
    } else {
      let myViewPath = null;
      const {
        history
      } = this.props;
      if (viewPath.indexOf('/') < 0) {
        myViewPath = '/' + viewPath;
      }
      const targetRoute = {
        pathname: myViewPath,
      };
      history.replace(targetRoute);
    }
  }

  /**
   * 获取view query信息
   * @return {Object}
   */
  getQuery() {
    return this.props.location.query;
  }

  /**
   * 调用显示loading
   * @description 禁止在render中使用
   */
  showLoading() {
    this.context.showLoading();
  }

  /**
   * 调用隐藏loading
   * @description 禁止在render中使用
   */
  hideLoading() {
    this.context.hideLoading();
  }

}
/**
 * 静态context，用来与AppContainer建立关联
 * @type {Object}
 */
PageBase.contextTypes = {
  showLoading: PropTypes.func,
  hideLoading: PropTypes.func,
  // showToast: PropTypes.func,
  // closeToast: PropTypes.func,
  // router: React.PropTypes.object.isRequired,
};

export default PageBase;