const getDemo = () => {
  return {
    //标题，每个图表最多仅有一个标题控件，每个标题控件可设主副标题
    title: {
      //主标题文本，'\n'指定换行
      text: '趋势图',
      //主标题文本超链接
      // link: 'http://www.tqyb.com.cn/weatherLive/climateForecast/2014-01-26/157.html',
      //副标题文本，'\n'指定换行
      // subtext: 'www.stepday.com',
      //副标题文本超链接
      // sublink: 'http://www.stepday.com/myblog/?Echarts',
      //水平安放位置，默认为左侧，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
      x: 'center',
      //垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
      y: 'top'
    },
    //提示框，鼠标悬浮交互时的信息提示
    tooltip: {
      //触发类型，默认（'item'）数据触发，可选为：'item' | 'axis'
      trigger: 'axis'
    },
    //图例，每个图表最多仅有一个图例
    legend: {
      //显示策略，可选为：true（显示） | false（隐藏），默认值为true
      show: true,
      //水平安放位置，默认为全图居中，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
      x: 'center',
      //垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
      y: (22),
      //legend的data: 用于设置图例，data内的字符串数组需要与sereis数组内每一个series的name值对应
      data: ['蒸发量', '降水量', '降水量2']
    },
    //工具箱，每个图表最多仅有一个工具箱
    // toolbox: {
    //   //显示策略，可选为：true（显示） | false（隐藏），默认值为false
    //   show: true,
    //   //启用功能，目前支持feature，工具箱自定义功能回调处理
    //   feature: {
    //     //辅助线标志
    //     mark: {show: true},
    //     //dataZoom，框选区域缩放，自动与存在的dataZoom控件同步，分别是启用，缩放后退
    //     dataZoom: {
    //       show: true,
    //       title: {
    //         dataZoom: '区域缩放',
    //         dataZoomReset: '区域缩放后退'
    //       }
    //     },
    //     //数据视图，打开数据视图，可设置更多属性,readOnly 默认数据视图为只读(即值为true)，可指定readOnly为false打开编辑功能
    //     dataView: {show: true, readOnly: true},
    //     //magicType，动态类型切换，支持直角系下的折线图、柱状图、堆积、平铺转换
    //     magicType: {show: true, type: ['line', 'bar']},
    //     //restore，还原，复位原始图表
    //     restore: {show: true},
    //     //saveAsImage，保存图片（IE8-不支持）,图片类型默认为'png'
    //     saveAsImage: {show: true}
    //   }
    // },
    toolbox: {
      show: true,
      feature: {
        dataView: {readOnly: false},
        restore: {},
        saveAsImage: {}
      }
    },
    //是否启用拖拽重计算特性，默认关闭(即值为false)
    calculable: true,
    //直角坐标系中横轴数组，数组中每一项代表一条横轴坐标轴，仅有一条时可省略数值
    //横轴通常为类目型，但条形图时则横轴为数值型，散点图时则横纵均为数值型
    xAxis: [
      {
        //显示策略，可选为：true（显示） | false（隐藏），默认值为true
        show: true,
        //坐标轴类型，横轴默认为类目型'category'
        type: 'category',
        //类目型坐标轴文本标签数组，指定label内容。 数组项通常为文本，'\n'指定换行
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      }
    ],
    //直角坐标系中纵轴数组，数组中每一项代表一条纵轴坐标轴，仅有一条时可省略数值
    //纵轴通常为数值型，但条形图时则纵轴为类目型
    yAxis: [
      {
        //显示策略，可选为：true（显示） | false（隐藏），默认值为true
        show: true,
        //坐标轴类型，纵轴默认为数值型'value'
        type: 'value',
        //分隔区域，默认不显示
        splitArea: {show: true}
      }
    ],

    //sereis的数据: 用于设置图表数据之用。series是一个对象嵌套的结构；对象内包含对象
    series: [
      {
        //系列名称，如果启用legend，该值将被legend.data索引相关
        name: '蒸发量',
        //图表类型，必要参数！如为空或不支持类型，则该系列数据不被显示。
        type: 'bar',
        //系列中的数据内容数组，折线图以及柱状图时数组长度等于所使用类目轴文本标签数组axis.data的长度，并且他们间是一一对应的。数组项通常为数值
        data: [20.0, 40.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        //系列中的数据标注内容
        // markPoint: {
        //   data: [
        //     {type: 'max', name: '最大值'},
        //     {type: 'min', name: '最小值'}
        //   ]
        // },
        // //系列中的数据标线内容
        // markLine: {
        //   data: [
        //     {type: 'average', name: '平均值'}
        //   ]
        // }
        itemStyle: {}
      },
      {
        //系列名称，如果启用legend，该值将被legend.data索引相关
        name: '降水量',
        //图表类型，必要参数！如为空或不支持类型，则该系列数据不被显示。
        type: 'bar',
        //系列中的数据内容数组，折线图以及柱状图时数组长度等于所使用类目轴文本标签数组axis.data的长度，并且他们间是一一对应的。数组项通常为数值
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        //系列中的数据标注内容
        // markPoint: {
        //   data: [
        //     {type: 'max', name: '最大值'},
        //     {type: 'min', name: '最小值'}
        //   ]
        // },
        // //系列中的数据标线内容
        // markLine: {
        //   data: [
        //     {type: 'average', name: '平均值'}
        //   ]
        // }
      },
      {
        //系列名称，如果启用legend，该值将被legend.data索引相关
        name: '降水量2',
        //图表类型，必要参数！如为空或不支持类型，则该系列数据不被显示。
        type: 'bar',
        //系列中的数据内容数组，折线图以及柱状图时数组长度等于所使用类目轴文本标签数组axis.data的长度，并且他们间是一一对应的。数组项通常为数值
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        //系列中的数据标注内容
        // markPoint: {
        //   data: [
        //     {type: 'max', name: '最大值'},
        //     {type: 'min', name: '最小值'}
        //   ]
        // },
        // //系列中的数据标线内容
        // markLine: {
        //   data: [
        //     {type: 'average', name: '平均值'}
        //   ]
        // }
      }
    ]
  };
}

const getOption = (XData, YData) => {
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


export {getDemo, getOption}
