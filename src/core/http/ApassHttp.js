import request from 'superagent';
import encrypt from './encrypt';
import Apis from './Apis';
import { Toast } from 'antd-mobile';
class ApassHttpClicent{
  static post(options,suc,fail){
    if (typeof options.params !== String){
      //TODO token ？？？
      options.params['x-auth-token'] = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqd3Rfd2l0aG91dF9zcHJpbmdfc2VjdXJpdHkiLCJhdXRoIjoie1wibW9iaWxlXCI6XCIxMzEyMjI1ODgzNlwiLFwidXNlcklkXCI6XCI4MDA5NDY5MFwifSIsImV4cCI6MTUzMjA2NTY3Nn0.EV37tvJblNNm1vf72s0xI-qAw-TYG8Pp-dX_x4AZLTR7qwWlygFYNJpPJLdbpZwJlUCn8WHEFIUVj0goMyK1BA';
      options.params = JSON.stringify(options.params);
    }
    options.params = encrypt.encryptAES(options.params);
    console.log(options.params)
    request.post(Apis.BASE_URL+Apis.BASE_SERVER+options.url)
      .accept('application/json')
      .send({ "h5Data": options.params })
      .timeout(30000)
      .end((err,resp) => {
        if (err) {
          fail && fail(err);
          return;
        }
        if (resp && resp.body) {
          if(resp.body.status == '1'){
            suc(resp.body.data);
          }else if(resp.body.status == '0'){
            if(resp.body.msg) Toast.info(resp.body.msg,1);
          }else if(resp.body.status == '-2'){
             //TODO  重新登录
          }else{
            fail && fail({status:"-1000",msg:'服务器位置的状态码'});
          }
          return;
        }
      });
  }

    static postesp(options,suc,fail){
    if (typeof options.params !== String){
      //TODO token ？？？
      options.params['x-auth-token'] = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqd3Rfd2l0aG91dF9zcHJpbmdfc2VjdXJpdHkiLCJhdXRoIjoie1wibW9iaWxlXCI6XCIxMzEyMjI1ODgzNlwiLFwidXNlcklkXCI6XCI4MDA5NDY5MFwifSIsImV4cCI6MTUzMjA2NTY3Nn0.EV37tvJblNNm1vf72s0xI-qAw-TYG8Pp-dX_x4AZLTR7qwWlygFYNJpPJLdbpZwJlUCn8WHEFIUVj0goMyK1BA';
      options.params = JSON.stringify(options.params);
    }

    console.log(Apis.BASE_ESP_URL,"====>",Apis.BASE_ESP_URL+options.url);

    options.params = encrypt.encryptAES(options.params);
    request.post(Apis.BASE_ESP_URL+options.url)
      .accept('application/json')
      .send({ "h5Data": options.params })
      .timeout(30000)
      .end((err,resp) => {
        if (err) {
          fail && fail(err);
          return;
        }
        if (resp && resp.body) {
          if(resp.body.status == '1'){
            suc(resp.body.data);
          }else if(resp.body.status == '0'){
            if(resp.body.msg) Toast.info(resp.body.msg,1);
          }else if(resp.body.status == '-2'){
             //TODO  重新登录
          }else{
            fail && fail({status:"-1000",msg:'服务器位置的状态码'});
          }
          return;
        }
      });
  }

  static postajqh(options,suc,fail){
    if (typeof options.params !== String){
      //TODO token ？？？
      options.params['x-auth-token'] = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqd3Rfd2l0aG91dF9zcHJpbmdfc2VjdXJpdHkiLCJhdXRoIjoie1wibW9iaWxlXCI6XCIxMzEyMjI1ODgzNlwiLFwidXNlcklkXCI6XCI4MDA5NDY5MFwifSIsImV4cCI6MTUzMjA2NTY3Nn0.EV37tvJblNNm1vf72s0xI-qAw-TYG8Pp-dX_x4AZLTR7qwWlygFYNJpPJLdbpZwJlUCn8WHEFIUVj0goMyK1BA';
      options.params = JSON.stringify(options.params);
    }

    console.log(Apis.BASE_ESP_URL,"====>",Apis.BASE_ESP_URL+options.url);

    options.params = encrypt.encryptAES(options.params);
    request.post(Apis.BASE_AJQH_URL+options.url)
      .accept('application/json')
      .send({ "h5Data": options.params })
      .timeout(30000)
      .end((err,resp) => {
        if (err) {
          fail && fail(err);
          return;
        }
        if (resp && resp.body) {
          if(resp.body.status == '1'){
            suc(resp.body.data);
          }else if(resp.body.status == '0'){
            if(resp.body.msg) Toast.info(resp.body.msg,1);
          }else if(resp.body.status == '-2'){
             //TODO  重新登录
          }else{
            fail && fail({status:"-1000",msg:'服务器位置的状态码'});
          }
          return;
        }
      });
  }



}
export default ApassHttpClicent;
