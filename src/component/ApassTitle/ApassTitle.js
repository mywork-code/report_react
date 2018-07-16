import React from 'react';
import './ApassTitle.css';
import ic_explain from '../../images/ic_explain.png';
import ic_filter from '../../images/ic_filter.png';

export default class AreaTitle extends React.Component {

  render() {
    return (
      <div className="apass-title">
        <img src={ic_explain} onClick={this.props.leftClick}></img>
        <span className="apass-title-text">{this.props.title}</span>
        <img src={ic_filter} onClick={this.props.rightClick}></img>
      </div>
    );
  }

}

