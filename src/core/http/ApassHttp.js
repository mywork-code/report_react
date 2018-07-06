import request from 'superagent';
import encrypt from './encrypt';
import Apis from './Apis';
import BrowserHttpClient from "./BrowserHttpClient";


class ApassHttpClicent{

  static post(options,suc,fail){

    if (typeof options.params !== String){
      //TODO token ？？？
      options.params['x-auth-token'] = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqd3Rfd2l0aG91dF9zcHJpbmdfc2VjdXJpdHkiLCJhdXRoIjoie1wibW9iaWxlXCI6XCIxMzUyNDg3NDc3N1wiLFwidXNlcklkXCI6XCI4MDA5NDY2M1wifSIsImV4cCI6MTUzMTQ1NDUxNX0.cZudZIoDU6JnBhrWLkH3jtHKHICMPb7TE1Z-ZETwhnivU81ZR-TG6Cd7OWKOyznilFk33cxFoiLr7XDAcq9aSQ';
      options.params = JSON.stringify(options.params);
    }

    options.params = encrypt.encryptAES(options.params);

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
