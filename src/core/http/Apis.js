
const BASE_SERVER = 'appweb/data/ws/rest/';

var BASE_URL;

if(process.env.NODE_ENV){
  BASE_URL = 'https://fyd-uat.apass.cn/'
}else{
  BASE_URL = 'https://fyd.apass.cn/'
}

const api = {
  queryReport:'daily/query',
}


module.exports = {
  BASE_SERVER,
  BASE_URL,
  api,
}
