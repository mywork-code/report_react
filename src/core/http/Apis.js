
const BASE_SERVER = 'appweb/data/ws/rest/';

var BASE_URL;

var BASE_ESP_URL;

var BASE_AJQH_URL;

if(process.env.NODE_ENV == 'development'){
  BASE_URL = 'https://fyd-uat.apass.cn/';
  BASE_ESP_URL = ' http://10.1.12.57:20080/appweb/';
  // BASE_ESP_URL = 'http://10.254.20.95:8080/appweb/';
  BASE_AJQH_URL = 'https://ajqh-app-uat.apass.cn/appwebv2/data/ws/rest/';
  // BASE_AJQH_URL = 'http://10.254.20.77:8080/appwebv2/data/ws/rest/';

}else{
  BASE_URL = 'https://fyd.apass.cn/';
  BASE_ESP_URL = 'http://espapp.apass.cn/appweb/';
  BASE_AJQH_URL = 'https://ajqh-app-prod.apass.cn/appwebv2/data/ws/rest/';
}


const api = {
  queryReport:'daily/query',
  flowMonitor:'dkcs/querydkcs',
  queryproduct:'dkcs/queryproduct',
  ribaobiao:'daily/query'
}



module.exports = {
  BASE_SERVER,
  BASE_ESP_URL,
  BASE_AJQH_URL,
  BASE_URL,
  api,
}
