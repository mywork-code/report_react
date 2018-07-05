import React from 'react';
import './ApassFilter.css'


class FilterCell extends React.Component{

  constructor(props){
    super(props)
  }

  render(){

  }

}

class FilterGroup extends React.Component{



}


class ApassFilter extends React.Component{

  constructor(props){
    super(props)
  }

  render(){

    return(
      <div className="popvover">
        <div className="content">
          <div className="title">
            <span>取消</span>
            <span>{this.props.title}</span>
            <span>完成</span>
          </div>
        </div>
      </div>
    );
  }

}

export default ApassFilter
