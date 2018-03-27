import React from 'react';
import PropTypes from 'prop-types';
import request from 'superagent';
//import WebStorageCache from 'web-storage-cache'; // 文档 https://github.com/WQTeam/web-storage-cache

const WebStorageCache = { };
class PageBase extends React.Component {
  constructor(props) {
    super(props);
    this.wsCache = new WebStorageCache({
      storage: 'localStorage',
      exp: Infinity
    });
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

 // 发送ajax请求
 sendRequest(params, success, error) {
   if (params.method === 'get') {
     this._sendGetRequest(params, success, error);
   } else if (params.method === 'post') {
     this._sendPostRequest(params, success, error);
   } else {
    console.error('请求方法为空');
   }
 }

 // 发送get请求
 _sendGetRequest(params, success, error) {
   request.get(params.url).query(params.query || {}).set('Accept', 'application/json').then(function(res) {
      if (res.status === 200) {
        success && this.preSuccessCallback(res.body);
      } else {
        alert('系统异常')
      }
   }).catch(function(err) {
      error && error(err);
   })
 }

 // 发送post请求
 _sendPostRequest(params, success, error) {
  request.post(params.url).send(params.query || {}).set('Accept', 'application/json').then(function(res) {
      if (res.status === 200) {
        success && this.preSuccessCallback(res.body);
      } else {
        alert('系统异常')
      }
   }).catch(function(err) {
      error && error(err);
   })
 }

   /**
   * 成功回调处理
   * @param  {Object}   nData      成功请求返回参数
   * @param  {Func}   succ       成功处理函数
   */
  preSuccessCallback(nData, succ) {
    if (nData.status === 1) {
      alert(nData.msg || '请登录');
    } else {
      succ(nData);
    }
  }

 /**
  * localStorage 本地储存
  */
  saveLocalStorageData(key, value, options) {
    this.wsCache.set(key, value, options || {});
  }

 /**
  * localStorage 本地储存
  */
  getLocalStorageData(key) {
    return this.wsCache.get(key);
  }

 /**
  * sessionStorage 本地储存
  */
  /*saveSessionStorageData(key, value, options) {
    
  }*/

  /**
  * sessionStorage 本地储存
  */
  /*getSessionStorageData(key) {
    return this.wsCache.get(key);
  }*/

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