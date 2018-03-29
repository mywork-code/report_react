import CommonUtils from '../../utils/CommonUtils';

class StoreEngine {
	constructor() {
	  this.version = '1.0.0';
	  this.enabled = false;
	}
  
  /** 获得返回给定键的值, 如果该值未定义 它将返回optionalDefaultValue
   *  @param {String} key 
   *  @param {any} optionalDefaultValue 
   */
	get(key, optionalDefaultValue) {
		const data = this.storage.read(this._namespacePrefix + key)
		return this._deserialize(data, optionalDefaultValue)
	}

  /** 设置给定key 对应的值, 如果这个key 对应的值为空，则清楚对应的key的值
   *  @param {String} key 
   *  @param {any} value 
   */
	set(key value) {
    if (value === undefined) {
			return this.remove(key);
		}
		this.storage.write(this._namespacePrefix + key, this._serialize(value));
		return value;
	}

	/** 移除存储在给定键上的键和值
   *  @param {String} key 
   */
	remove(key) {
		this.storage.remove(this._namespacePrefix + key)
	}
}