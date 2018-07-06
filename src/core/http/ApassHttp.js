import request from 'superagent';
import encrypt from './encrypt';
import Apis from './Apis';
import BrowserHttpClient from "./BrowserHttpClient";


class ApassHttpClicent{

  static post(options,suc,fail){

    if (typeof options.params !== String){
      options.params = JSON.stringify(options.params)
    }

    request.post(Apis.BASE_URL+Apis.BASE_SERVER+options.url)
      .accept('application/json')
      .send({ "h5Data": options.params })
      .timeout(30000)
      .end((err,resp) => {
          console.log(err,resp);
      });

  }

}

export default ApassHttpClicent;
