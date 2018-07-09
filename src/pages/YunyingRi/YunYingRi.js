import React from 'react';
import AyoBase from '../../core/index';
import './YunYingRi.css';
import {Row, Col, Modal} from 'antd'
import ApassFilter from '../../component/ApassFilter/ApassFilter'
import YunyingRiData from './YunyingRiData'

import ic_explain from '../../imgs/ic_explain.png'
import ic_filter from '../../imgs/ic_filter.png'


const {
  PageBase,
} = AyoBase;
import ReactEcharts from 'echarts-for-react';
import HttpClient from "../../core/http/HttpClient";

class AreaTitle extends React.Component {
  render() {
    return (
      <div className="title">
        <img src={ic_explain} onClick={this.props.leftClick}></img>
        <span className="title-text">{this.props.title}</span>
        <img src={ic_filter} onClick={this.props.rightClick}></img>
      </div>
    );
  }
}

class YunYingRi extends PageBase {
  constructor(props) {
    super(props);
    this.state = {
      option: this.getOption(),
      dataSource: YunyingRiData.tableData().dataSource,
      columns: YunyingRiData.tableData().columns,
      filterData: YunyingRiData.filterData(),
      filterVisiable: true,
    };
  }

  componentDidMount() {
    HttpClient.get({
      url: 'http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=10',
    }, (data) => {
      console.log(data);
    });
  }
  showExPlain = () => {
  }

  showFilter = () => {
    this.setState({filterVisiable: true});
  }
  filterCancel = () => {
    this.setState({filterVisiable: false});
  }

  filterComplete = () => {
    this.setState({filterVisiable: false});
    var filterData = this.state.filterData;
    var columns = this.state.columns;
    filterData.map((data,bigIndex) => {
      let offset = 0;
      if(bigIndex != 0){
        offset = filterData[bigIndex-1].child.length
      }
      data.child.map((col,index) => {
        columns[index+offset+1].visiable = col.isCheck;
      })
    })

    this.setState((prevState) => {
      columns:prevState.columns
    })

  }

  filterCellClick = (groupIndex,childIndex) => {
    let groupData = this.state.filterData[groupIndex];
    let child = groupData.child;
    child[childIndex].isCheck = !child[childIndex].isCheck;
    groupData.haveSelect = this.haveSelect(child);
    this.setState((prevState) => ({
      filterData: prevState.filterData
    }));
  }


  filterGroupSelectAll = (groupIndex) =>{
    let groupData = this.state.filterData[groupIndex];
    let child = groupData.child;
    child.forEach((data) => {
      data.isCheck = !data.isCheck
    });
    groupData.haveSelect = this.haveSelect(child);
    this.setState((prevState) => ({
      filterData: prevState.filterData
    }));
  }

  haveSelect(arr){
    let temp = false;
    arr.forEach((child) =>{
      if(child.isCheck){
        temp = true;
        return temp;
      }
    })
    return temp;
  }


  getOption = (XData, YData) => {
    return {
      title: {
        text: "趋势图",
        subtext: "",
        link: "",
        x: "center",
        textStyle: {
          fontSize: 16,
          fontWeight: "normal",
          color: "#333"
        },
        padding: 10,
        borderColor: "#ccc"
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["有效注册率", "决策完成率", "提现率"],
        textStyle: {
          align: "right",
          fontSize: 12,
          color: "#333"
        },
        itemHeight: 12,
        itemWidth: 12,
        borderColor: "#ccc",
        padding: 40
      },
      toolbox: {
        show: true,
        feature: {
          dataView: {
            readOnly: true,
            show: true
          },
          restore: {
            show: true
          },
          saveAsImage: {
            show: true
          },
          myDimensionalyModel: {
            show: true,
            title: '维度指标',
            icon: 'path://M562.688 978.688c-9.184 0-18.72-2.144-28.288-6.4l-106.112-46.976c-38.144-16.864-68.128-62.784-68.192-104.512l-0.672-291.136c-0.064-31.68-16.736-79.392-36.48-104.192l-216.736-272.96c-19.712-24.8-15.456-43.424-11.168-52.288s16.192-23.776 47.904-23.776h689.76c31.712 0 43.616 14.88 47.936 23.744 4.288 8.864 8.544 ' +
            '27.456-11.2 52.32l-216.768 272.992c-19.68 24.8-36.384 72.544-36.448 104.192l-0.704 389.92c-0.096 34.784-21.792 ' +
            '59.072-52.832 59.072zM142.944 108.448c-11.264 0-17.792 2.944-19.104 5.664-1.312 2.752 0.448 9.696 7.424 18.496l216.736 272.96c24.288 ' +
            '30.56 43.328 85.024 43.392 124.032l0.672 291.136c0.064 29.056 22.56 63.52 49.12 75.328l106.112 46.976c5.472 2.4 10.656 3.648 15.328 3.648 ' +
            '19.296 0 20.8-20.768 20.8-27.168l0.704-389.92c0.064-39.008 19.136-93.472 43.36-124.032l216.768-272.96c7.008-8.8 8.736-15.776 7.424-18.496-1.344-2.72-7.872-5.664-19.136-5.664H142.944z ' +
            'M945.056 563.36h-224.8a16 16 0 0 1 0-32h224.8a16 16 0 0 1 0 32zM945.056 699.168h-224.8a16 16 0 0 1 0-32h224.8a16 16 0 0 1 0 32zM945.056 835.04h-224.8a16 16 0 0 1 0-32h224.8a16 ' +
            '16 0 0 1 0 32z',
            onclick: () => {

            }
          }
        },
        showTitle: true
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          data: ["2018-06-30", "2018-07-01", "2018-07-02", "2018-07-03", "2018-07-04", "2018-07-05", "2018-07-06"],
        }
      ],
      grid: {
        y: 70
      },
      yAxis: [
        {
          type: "value",
          name: "",
          axisLine: {
            lineStyle: {
              width: 2
            },
            show: false
          },
          nameLocation: "end",
          axisLabel: {
            textStyle: {
              fontSize: 10,
              color: "#333"
            }
          },
          min: 0,
          nameTextStyle: {
            baseline: "middle"
          }
        },
        {
          type: "value",
          name: "",
          min: 0,
          max: 1,
          axisLine: {
            lineStyle: {
              width: 2
            },
            show: false
          },
          axisLabel: {
            textStyle: {
              fontSize: 10
            }
          },
          nameTextStyle: {
            align: "center"
          }
        }
      ],
      series: [
        {
          name: "有效注册率",
          type: "line",
          data: [0.5, 0.24, 0.33, 0.56, 0.22, 0.68, 0.88],
          itemStyle: {
            normal: {
              color: "rgb(67, 177, 126)"
            }
          },
          yAxisIndex: 1
        },
        {
          name: "决策完成率",
          type: "line",
          data: [0.4, 0.8, 0.3, 0.8, 0.4, 0.2, 0.9],
          itemStyle: {
            normal: {
              color: "rgb(156, 204, 102)"
            }
          },
          yAxisIndex: 0
        },
        {
          name: "提现率",
          type: "line",
          data: [0.5, 0.4, 0.7, 0.6, 0.4, 0.8, 0.3],
          itemStyle: {
            normal: {
              lineStyle: {
                color: "rgb(247, 143, 64)"
              }
            }
          },
          yAxisIndex: 1
        }
      ]
    }
  };

  render() {
    return (
      <div className='yunying-grap'>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <div>
              <ReactEcharts
                option={this.state.option}
                style={{height: '450px', weight: '676px'}}
              />
              <AreaTitle title="各地区用户业务转化监控" leftClick={this.showExPlain} rightClick={this.showFilter}/>

              <ApassFilter title="维度指标配置" filterData={this.state.filterData}
                           visiable={this.state.filterVisiable}
                           filterCancel={this.filterCancel}
                           filterComplete={this.filterComplete}
                           filterCellClick={this.filterCellClick}
                           filterGroupSelectAll={this.filterGroupSelectAll}
              />

            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}

export default YunYingRi;
