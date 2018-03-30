import AbstractCache from '../storages/AbstractCache';
import LocalStore from '../storages/MemoryStore';

/**
 * MemoryCache
 * @auther: yanjj
 * @copyright https://github.com/tesky0125/html5-framework/
 * @example
 *  class DemoCache extends MemoryCache {
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
class MemoryCache extends AbstractCache {
  constructor(options) {
    const opts = options;
    opts.proxy = MemoryStore.getInstance();
    super(opts);
  }

  /**
   * @description 获取MemoryCache单例对象
   * @return      {MemoryCache}
   */
  static getInstance() {
    if (!this.instance) {
      this.instance = new this();
    }
    return this.instance;
  }
}

export default MemoryCache;
