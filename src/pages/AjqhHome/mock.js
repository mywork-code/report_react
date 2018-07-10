

const mockOption = () =>{
console.log(window.localStorage.getItem("formData"))
    return {
              //图表的标题
                title: {
                    text: ''
                },
                //图表展示的类别，这里的data和series中得name对应
                legend: {
                    data: ['飞豹贷', '熊猫贷款','淘钱宝'],
                    textStyle: {
                       fontSize:"12px" // 用 legend.textStyle.fontSize 更改示例大小
                    }      
                },
                //这里的是采用什么方式触发数据，这里显示的竖轴，跟随鼠标移动到节点上会显示内容
                tooltip: {
                    trigger: 'axis'
                },
                //代表x轴，这里type类型代表字符
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,//这里表示是否补齐空白
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisLabel:{
                        fontSize:"12px"
                    }


                }],
                //代表y轴，这里type类型代表num类型
                yAxis: [{
                    type: 'value',
                    axisLabel:{
                        fontSize:"12px"
                    }                        
                }],
                //图表类型，type表示按照什么类型图表显示，line代表折线，下面的内容与
                //legend一一对应
                series: [{
                        name: '飞豹贷',
                        type: 'line',
                        smooth: true,
                        symbol:'circle',
                        itemStyle: {
                            normal: {
                                // areaStyle: {
                                //     type: 'default'
                                // },
                                color: "#71AFFF"
                            }
                        },
                        data:window.localStorage.getItem("formData"),
       
                    }, {
                        name: '熊猫贷款',
                        type: 'line',
                        smooth: true,
                        symbol:'circle',
                        itemStyle: {
                            normal: {
                                // areaStyle: {
                                //     type: 'default'
                                // },
                                color: "#FFBB6A"
                            }
                        },
                        data: [
                           820, 932, 901, 934, 1290, 1330, 1320
                        ]
                    },
                    {
                        name: '淘钱宝',
                        type: 'line',
                        smooth: true,
                        symbol:'circle',
                        itemStyle: {
                            normal: {
                                // areaStyle: {
                                //     type: 'default'
                                // },
                                color: "#DB235D"
                            }
                        },
                        data: [
                           100, 100, 100, 934, 1290, 1330, 1320
                        ]
                    }

                ]   

    };
}
const tableDate = () => {
  return {
    dataSource: [
      {
        date: '5月1号',
        source: '258',
        registerNum:'27',
        product:"135",
        clickNum:'369'

      },
      {
        date: '5月2号',
        source: '258',
        registerNum:'27',
        product:"135",
        clickNum:'369'

      },
      {
        date: '5月3号',
        source: '258',
        registerNum:'27',
        product:"135",
        clickNum:'369'

      },
      {
        date: '5月4号',
        source: '258',
        registerNum:'27',
        product:"135",
        clickNum:'369'

      },            
     
    ],
    columns: [
      {
        title: '日期',
        dataIndex: 'date',
        key: 'date',
        visiable:true,
      },
      {
        title: '渠道',
        dataIndex: 'source',
        key: 'source',
        visiable:true,
      },
      {
        title: '注册人数',
        dataIndex: 'registerNum',
        key: 'registerNum',
        visiable:true,
      },
      {
        title: '产品',
        dataIndex: 'product',
        key: 'product',
        visiable:true,
      },
      {
        title: '点击人数',
        dataIndex: 'clickNum',
        key: 'clickNum',
        visiable:true
      }



    ]

  }
}
const filterData = () => {
  return [
    {
      groupTitle:'产品筛选',
      groupId:'productStep',
      haveSelect:true,
      child:[
        {
          value:'熊猫贷款',
          isCheck:true,
        },
        {
          value:'秒易花',
          isCheck:true,
        },
        {
          value:'借云',
          isCheck:true,
        },
        {
          value:'康乐享',
          isCheck:true,
        },
        {
          value:'淘钱宝',
          isCheck:true,
        },
        {
          value:'花花白卡',
          isCheck:true,
        }


      ]
    }
  ]
}
const filterAllData = () => {
  return [
    {
      groupTitle:'产品筛选',
      groupId:'withdrawStep',
      haveSelect:true,
      child:[
        {
          value:'熊猫贷款',
          isCheck:true,
        },
        {
          value:'秒易花',
          isCheck:true,
        },
        {
          value:'借云',
          isCheck:true,
        },
        {
          value:'康乐享',
          isCheck:true,
        },
        {
          value:'淘钱宝',
          isCheck:true,
        },
        {
          value:'花花白卡',
          isCheck:true,
        }

      ]
    },
    {
      groupTitle:'渠道筛选',
      groupId:'withdrawStep',
      haveSelect:true,
      child:[
        {
          value:'今日头条',
          isCheck:true,
        },
        {
          value:'百度',
          isCheck:true,
        },
        {
          value:'360',
          isCheck:true,
        }
      ]
    }
  ]
}

module.exports = {
  mockOption,
  tableDate,
  filterData,
  filterAllData

}
