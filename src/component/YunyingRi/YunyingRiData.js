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
      text: '趋势图',
      x: 'center',
      y: 'top',
      textStyle: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px'
      },
      top: '10px',

    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: [{
        name: '有效注册率',
        // 强制设置图形为矩形。
        icon: 'react',
        // 设置图例颜色
        backgroundColor:'#7daff9'
      }, {
        name: '授信完成率',
        icon: 'react',
        backgroundColor:'#7988d1'
      }, {
        name: '决策完成数',
        icon: 'react',
        backgroundColor:'#f6bd77'
      }],
      textStyle: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px'
      },
      top: '30px'
    },
    toolbox: {
      show: true,
      feature: {
        dataView: {readOnly: false},
        myFilter: {
          show: true,
          title: '维度指标',
          icon: 'path://M127.168 156.416l288 379.264v277.376c0 8.32 4.736 15.36 10.688 20.16l145.792 91.2a23.872 23.872 0 0 0 24.832 0 24.448 24.448 0 0 0 11.904-20.096V535.68l288-379.264 1.152-1.152a38.592 38.592 0 0 0 1.216-39.104 40.512 40.512 0 0 0-33.216-20.16H158.08a35.392 35.392 0 0 0-33.216 20.16 41.472 41.472 0 0 0 1.216 39.04l1.152 1.28z m718.208-12.992L565.76 514.368c-3.584 3.584-4.736 9.472-4.736 14.208v333.056L462.592 800V528.64c0-4.8-1.216-10.688-4.736-14.272l-280.96-370.944H845.44z" fill="#707473" p-id="828',
          onclick: function () {
            alert(11)
          },
        },
      },
    },
    grid: {
      top: 70,//离容器上侧距离
      left: 30,
      right: 60,
      bottom: 30
    },
    dataZoom: {
      show: false,
      start: 0,
      end: 100
    },
    visualMap: {
      type: 'continuous',
      show: false,
      min: 0,
      max: 1000,
      color: ['#7daff9', '#7988d1', '#F00056', '#FF2D51', '#FF2121', '#FF4C00', '#FF7500',
        '#FF8936', '#FFA400', '#F0C239', '#FFF143', '#FAFF72', '#C9DD22', '#AFDD22',
        '#9ED900', '#00E500', '#0EB83A', '#0AA344', '#0C8918', '#057748', '#177CB0']
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        data: (function () {
          let now = new Date();
          let res = [];
          let len = 50;
          while (len--) {
            res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
            now = new Date(now - 2000);
          }
          return res;
        })()
      },
      {
        show:false,
        type: 'category',
        boundaryGap: true,
        data: (function () {
          let res = [];
          let len = 50;
          while (len--) {
            res.push(50 - len + 1);
          }
          return res;
        })()
      }
    ],
    yAxis: [
      {
        type: 'value',
        scale: true,
        max: 20,
        min: 0,
        boundaryGap: [0.2, 0.2]
      },
      {
        type: 'value',
        scale: true,
        max: 1200,
        min: 0,
        boundaryGap: [0.2, 0.2]
      }
    ],
    series: [
      {
        name: '有效注册率',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            barBorderRadius: 4,
          }
        },
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
          return idx * 10;
        },
        animationDelayUpdate: function (idx) {
          return idx * 10;
        },
        data: (function () {
          let res = [];
          let len = 50;
          while (len--) {
            res.push(Math.round(Math.random() * 1000));
          }
          return res;
        })()
      },
      {
        name: '授信完成率',
        type: 'line',
        data: (function () {
          let res = [];
          let len = 0;
          while (len < 50) {
            res.push((Math.random() * 10 + 5).toFixed(1) - 0);
            len++;
          }
          return res;
        })()
      },
      {
        name: '决策完成数',
        type: 'line',
        data: (function () {
          let res = [];
          let len = 0;
          while (len < 50) {
            res.push((Math.random() * 10 + 5).toFixed(1) - 0);
            len++;
          }
          return res;
        })()
      }
    ]
  }
};


export {getDemo, getOption}
