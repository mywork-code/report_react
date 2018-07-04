import request from 'superagent';

/**
 * H5环境下HttpClient通信模块
 * @author humingfei
 */
class BrowserHttpClient {

  /**
   * Http Get方法
   * @param  {Object} options options: {url, query}
   * @param  {function} succ    success callback
   * @param  {function} fail    failure callback
   * @example
   * let getOptions = {
   *   url: '/service/trade/invest-result',
   *   query: {
   *     productId: '123'
   *   },
   * };
   */

	static get(options, succ, fail) {
    request
      .get(options.url)
      // .set('X-Requested-With', 'XMLHttpRequest')
      .query(options.query || {})
      .accept('*/*')
      .timeout(30000)
      .end((err, res) => {
        if (err) {
          fail(err);
          return;
        }
        if (res && res.body) {
          succ(res.body || {});
          return;
        }
      });
  }

  static post(options, succ, fail) {
    request
      .post(options.url)
      // .set('X-Requested-With', 'XMLHttpRequest')
      .query(options.query || {})
      .type('form')
      .accept('*/*')
      .send(options.body || {})
      .timeout(30000)
      .end((err, res) => {
        if (err) {
          fail(err);
          return;
        }
        if (res && res.body) {
          succ(res.body || {});
          return;
        }
      });
  }
}

export default BrowserHttpClient;
