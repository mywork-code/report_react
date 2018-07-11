import React from 'react';
import './ApassFilter2.css';
import checkBox_normal from '../../imgs/ic_checkbox_normal.png';
import checkBox_checked from '../../imgs/ic_checkbox_checked.png';

class FilterCell extends React.Component {
  render() {
    return (
      <div className="cell-box">
        <img className="cell-checkbox" src={this.props.isCheck ? checkBox_checked : checkBox_normal}
             onClick={this.props.checked.bind(this, this.props.index)}/>
        <span className="cell-con">{this.props.value}</span>
      </div>
    );
  }

}

class FilterGroup extends React.Component {

  onCheck = (index) => {
    this.props.groupCellClick(this.props.groupIndex, index);
  }

  render() {
    const childs = this.props.group.child;
    const cells = childs.map((child, index) => {
      return <FilterCell isCheck={child.isCheck} value={child.value} key={index} index={index} checked={this.onCheck}/>
    })
    return (
      <div>
        <div className="filter-box">
          <span>{this.props.group.groupTitle}</span>
        </div>
        {
          cells
        }
      </div>
    );
  }

}


class ApassFilter2 extends React.Component {

  groupCellClick = (groupIndex, childIndex) => {
    this.props.filterCellClick(groupIndex, childIndex);
  }

  groupSelectAll = (groupIndex) => {
    this.props.filterGroupSelectAll(groupIndex);
  }

  render() {
    const filterData = this.props.filterData;
    const groups = filterData.map((group, index) => {
      return <FilterGroup group={group}
                          key={group.groupId}
                          index={index}
                          groupIndex={index}
                          groupSelectAll={this.groupSelectAll}
                          groupCellClick={this.groupCellClick}/>
    });

    return (
      <div className="popvover" style={this.props.visiable ? {display: "block"} : {display: "none"}}>
        <div className="content">
          <div className="title">
            <span onClick={this.props.filterCancel}>取消</span>
            <span>{this.props.title}</span>
            <span onClick={this.props.filterComplete}>完成</span>
          </div>
          <div className="group">
            {groups}
          </div>
        </div>
      </div>
    );
  }

}

export default ApassFilter2
