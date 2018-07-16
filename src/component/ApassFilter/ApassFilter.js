import React from 'react';
import './ApassFilter.css';
import checkBox_normal from '../../images/ic_checkbox_normal.png';
import checkBox_checked from '../../images/ic_checkbox_checked.png';

import 'rmc-dialog/assets/index.css';
import Dialog from 'rmc-dialog/lib/DialogWrap';



class FilterCell extends React.Component {
  render() {
    return (
      <div className="apass-filter-cell-box">
        <img className="apass-filter-cell-checkbox" src={this.props.isCheck ? checkBox_checked : checkBox_normal}
             onClick={this.props.checked.bind(this, this.props.index)}/>
        <span className="apass-filter-cell-con">{this.props.value}</span>
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
        <div className="apass-filter-filter-box">
          <span className="apass-filter-title-name">{this.props.group.groupTitle}</span>
          <span className="apass-filter-title-select" style={this.props.showSelectAll ? {display:"block"} : {display:"none"}} onClick={this.props.groupSelectAll.bind(this, this.props.groupIndex)}>{this.props.group.haveSelect ? "反选" : '全选'}</span>
        </div>
        {
          cells
        }
      </div>
    );
  }

}

function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}


class ApassFilter extends React.Component {

  groupCellClick = (groupIndex, childIndex) => {
    this.props.filterCellClick(groupIndex, childIndex);
  }

  groupSelectAll = (groupIndex) => {
    this.props.filterGroupSelectAll(groupIndex);
  }

  onWrapTouchStart = (e) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, '.am-modal-content');
    if (!pNode) {
      e.preventDefault();
    }
  }

  render() {
    const filterData = this.props.filterData;
    const groups = filterData.map((group, index) => {
      return <FilterGroup group={group}
                          key={group.groupId}
                          index={index}
                          groupIndex={index}
                          groupSelectAll={this.groupSelectAll}
                          groupCellClick={this.groupCellClick}
                          showSelectAll={this.props.showSelectAll}
                          />
    });

    return (
        <Dialog
          wrapClassName='apass-filter-modal'
          style={{width:"80%"}}
          visible={this.props.visiable}
          maskClosable={false}
          closable={false}
          animation="zoom"
          maskAnimation="fade"
          bodyStyle={{padding:"0",width:"100%"}}
        >
          <div className="apass-filter-content">
            <div className="apass-filter-title">
              <span onClick={this.props.filterCancel}>取消</span>
              <span>{this.props.title}</span>
              <span onClick={this.props.filterComplete}>完成</span>
            </div>
            <div className="apass-filter-group">
              {groups}
            </div>
          </div>
        </Dialog>
    );
  }

}

export default ApassFilter
