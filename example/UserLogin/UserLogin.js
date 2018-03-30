import React from 'react';
import Ayobase  from '../../src';
import './UserLogin.css';

const {
  PageBase,
} = Ayobase;
class UserLogin extends PageBase {
  constructor(props) {
    super(props);
  }

  testClick = () => {
  	console.log(Ayobase);
  }

  render() {
  	return(<div className="user-login"><h1 onClick={this.testClick}>fuck dssfhhdoifu</h1></div>)
  }
}
 
export default UserLogin;
