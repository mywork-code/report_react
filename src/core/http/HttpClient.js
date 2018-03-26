import BrowserHttpClient from './BrowserHttpClient';

/**
 * H5环境下HttpClient通信模块中间处理模块
 * @author humingfei
 */
class HttpClient {

  /**
   * http get 请求
   * @param  {Object} options  原始Get请求参数
   * @param  {function} succ    success callback
   * @param  {function} fail    failure callback
   * @example
   *   {
   *     url: '/mapp/service/public',
   *     query: params,
   *   }
   */
  get(options, succ, fail) {
    // 发起http 请求
    BrowserHttpClient.get(options, (nData) => {
      this.preSuccessCallback(options, nData, succ);
    }, (failData) => {
      this.preErrorCallback(options, failData, fail);
    });
  }

  /**
   * http post 请求
   * @param  {Object} options  原始Post请求参数
   * @param  {function} succ    success callback
   * @param  {function} fail    failure callback
   * @example
   *   {
   *     url: '/mapp/service/public',
   *     query:params1, 可空
   *     body: params2,
   *     isShowLoading: '0',
   *   }
   */
  post(options, succ, fail) {
    // 发起http 请求
    BrowserHttpClient.post(options, (nData) => {
      this.preSuccessCallback(options, nData, succ);
    }, (failData) => {
      this.preErrorCallback(options, failData, fail);
    });
  }

  /**
   * 请求前处理参数
   * @author humingfei
   * @param  {Object}   options    请求参数
   * @param  {Func}   preHandler  预处理函数
   * 暂时不用。。。
   */
  preRequestHandler(options, preHandler) {
   
  }

  /**
   * 成功回调处理
   * @author humingfei
   * @param  {Object}   options    请求参数
   * @param  {Object}   nData      成功请求返回参数
   * @param  {Func}   succ       成功处理函数
   */
  preSuccessCallback(options, nData, succ) {
    succ && succ(nData);
  }

  /**
   * 错误回调处理
   * @author humingfei
   * @date   2017-01-06
   * @param  {Object}   options    请求参数
   * @param  {Object}   failData   错误请求返回数据
   * @param  {Func}   fail       错误处理函数
   */
  preErrorCallback(options, failData, fail) {
    fail && fail(failData);
  }
}

export default new HttpClient();
