// 公共通用方法
class CommonUtils {
  
  // 合并对象
  static make_assign() {
		if (Object.assign) {
			return Object.assign;
		} else {
			return function shimAssign(obj, props1, props2, etc) {
				for (var i = 1; i < arguments.length; i++) {
					this.each(Object(arguments[i]), function(val, key) {
						obj[key] = val;
					})
				}			
				return obj;
			}
		}
	}

	static make_create() {
		if (Object.create) {
			return function create(obj, assignProps1, assignProps2, etc) {
				var assignArgsList = this.slice(arguments, 1);
				return assign.apply(this, [Object.create(obj)].concat(assignArgsList));
			}
		} else {
			function F() {} // eslint-disable-line no-inner-declarations
			return function create(obj, assignProps1, assignProps2, etc) {
				var assignArgsList = this.slice(arguments, 1);
				F.prototype = obj;
				return assign.apply(this, [new F()].concat(assignArgsList));
			}
		}
	}

	static make_trim() {
		if (String.prototype.trim) {
			return function trim(str) {
				return String.prototype.trim.call(str);
			}
		} else {
			return function trim(str) {
				return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
			}
		}
	}

	static bind(obj, fn) {
		return function() {
			return fn.apply(obj, Array.prototype.slice.call(arguments, 0));
		}
	}

	static slice(arr, index) {
		return Array.prototype.slice.call(arr, index || 0);
	}

	static each(obj, fn) {
		this.pluck(obj, function(val, key) {
			fn(val, key);
			return false;
		})
	}

	static map(obj, fn) {
		var res = (this.isList(obj) ? [] : {});
		this.pluck(obj, function(v, k) {
			res[k] = fn(v, k);
			return false;
		})
		return res;
	}

	static pluck(obj, fn) {
		if (this.isList(obj)) {
			for (var i=0; i<obj.length; i++) {
				if (fn(obj[i], i)) {
					return obj[i];
				}
			}
		} else {
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					if (fn(obj[key], key)) {
						return obj[key];
					}
				}
			}
		}
	}

	static isList(val) {
		return (val != null && typeof val != 'function' && typeof val.length == 'number');
	}

	static isFunction(val) {
		return val && {}.toString.call(val) === '[object Function]';
	}

	static isObject(val) {
		return val && {}.toString.call(val) === '[object Object]';
	}

}

export default CommonUtils;
