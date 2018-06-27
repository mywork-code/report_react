import React from 'react';
import './Header.css';

class Header extends React.Component {
   constructor(props) {
     super(props);

     this.state = {

     };
   }

  render() {
  	return(
  	  <div className='header-group'>
        选择业务
  	  </div>
    )
  }
}

export default Header;
