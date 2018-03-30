import AbstractCache from '../storages/AbstractCache';
import LocalStore from '../storages/SessionStore';

/**
 * SessionCache
 * @auther: yanjj
 * @copyright https://github.com/tesky0125/html5-framework/
 * @example
 *  class DemoCache extends SessionCache {
 *    constructor() {
 *      const options = {
 *        lifeTime = '2D',          //超时时间两天
 *        defaultData : {
 *          name : ''
 *        },
 *        key : 'demo_key'
 *      }
 *      super(options);
 *    }
 *  }
 *
 * const demoCache = DemoCache.getInstance();
 * const data = {'name':'yanjj' };
 * demoCache.set(data);
 * demoCache.setAttr('name','fanke');
 */
class SessionCache extends AbstractCache {
  constructor(options) {
    /**
     * 本地存储对象, 如果是隐私模式，就存入内存中，否则存入sessionStorage中
     */
    const opts = options;
    opts.proxy = SessionStore.getInstance();
    super(opts);
  }

  /**
   * @description 获取SessionCache单例对象
   * @return      {SessionCache}
   */
  static getInstance() {
    if (!this.instance) {
      this.instance = new this();
    }
    return this.instance;
  }
}

export default SessionCache;
