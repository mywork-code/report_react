import React from 'react';
import Ayobase  from '../../core';
import './UserLogin.css';
import BenefitData from '../data/testData';
const {
  PageBase,
} = Ayobase;

class UserLogin extends PageBase {
  constructor(props) {
    super(props);
  }

  testClick = () => {
  	//console.log(Ayobase);

    BenefitData.set("key",{
      fuck: 1
    })
  }

  getSeesionData = () => {
    console.log(BenefitData.get());
  }

  render() {
  	return(<div className="user-login"> 
      <h1 onClick={this.testClick} className="clearfix">fghgfh</h1>
      <table className="fictitious-keyboard example" onClick={this.getSeesionData}><tbody>
       <tr><td>1</td><td>1</td><td>1</td></tr>
       <tr><td>1</td><td>1</td><td>1</td></tr>
       <tr><td colSpan="2">1</td><td>1</td></tr>
      </tbody></table>
      <p>1</p> <p>1</p> <p>1</p> <p>1</p> <p>1</p> <p>1</p> <p>1</p> <p>1</p>
      <div className="b1"></div>
      </div>)
  }
}
 
export default UserLogin;
