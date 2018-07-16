const mockOption = () =>{

    return {
              //图表的标题
                title: {
                    text: ''
                },
                //图表展示的类别，这里的data和series中得name对应
                legend: {
                    data: [],
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
                    data: [],
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
                        name: '',
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
                        data:[],
       
                    }, {
                        name: '',
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
                    
                        ]
                    },
                    {
                        name: '',
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
                        
                        ]
                    }

                ]   

    };
}
const tableDate = () => {
  return {
    dataSource: [],
    operatioSource: [
      {
        date: '5月1号',
        regNumber: '258',
        actNumber:'27',
        orderPeople:"135",
        orederGoods:'369',
        orederMoney:'5000',
        payPeople:'12',
        payGoods:'8888',
        payMoney:'4555',
        payRate:'0.05%'
      },
      {
        date: '5月2号',
        regNumber: '258',
        actNumber:'27',
        orderPeople:"135",
        orederGoods:'369',
        orederMoney:'5000',
        payPeople:'12',
        payGoods:'8888',
        payMoney:'4555',
        payRate:'0.05%'
      },
      {
        date: '5月3号',
        regNumber: '258',
        actNumber:'27',
        orderPeople:"135",
        orederGoods:'369',
        orederMoney:'5000',
        payPeople:'12',
        payGoods:'8888',
        payMoney:'4555',
        payRate:'0.05%'
      },
      {
        date: '5月4号',
        regNumber: '258',
        actNumber:'27',
        orderPeople:"135",
        orederGoods:'369',
        orederMoney:'5000',
        payPeople:'12',
        payGoods:'8888',
        payMoney:'4555',
        payRate:'0.05%'
      },
      {
        date: '5月5号',
        regNumber: '258',
        actNumber:'27',
        orderPeople:"135",
        orederGoods:'369',
        orederMoney:'5000',
        payPeople:'12',
        payGoods:'8888',
        payMoney:'4555',
        payRate:'0.05%'
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
    ],
    operatioColumns: [
      {
        title: '日期',
        dataIndex: 'date',
        key: 'date',
        visiable:true,
      },
      {
        title: '注册用户数',
        dataIndex: 'regNumber',
        key: 'regNumber',
        visiable:true,
      },
      {
        title: '活跃用户数',
        dataIndex: 'actNumber',
        key: 'actNumber',
        visiable:true,
      },
      {
        title: '下单人数',
        dataIndex: 'orderPeople',
        key: 'orderPeople',
        visiable:true,
      },
      {
        title: '下单商品件数',
        dataIndex: 'orederGoods',
        key: 'orederGoods',
        visiable:true
      },
      {
        title: '下单金额',
        dataIndex: 'orederMoney',
        key: 'orederMoney',
        visiable:true
      },
      {
        title: '支付人数',
        dataIndex: 'payPeople',
        key: 'payPeople',
        visiable:true
      },
      {
        title: '支付商品件数',
        dataIndex: 'payGoods',
        key: 'payGoods',
        visiable:true
      },
      {
        title: '支付金额',
        dataIndex: 'payMoney',
        key: 'payMoney',
        visiable:true
      },      
      {
        title: '支付下单转化率',
        dataIndex: 'payRate',
        key: 'payRate',
        visiable:true
      },   


    ],


  }
}
const filterData = () => {
  return [
    {
      groupTitle:'产品筛选',
      groupId:'productStep',
      haveSelect:true,
      child:[
      ]
    }
  ]
}
const filterAllData = () => {
  return [
    {
      groupTitle:'产品筛选',
      groupId:'productStep',
      haveSelect:true,
      child:[]
    },
    {
      groupTitle:'渠道筛选',
      groupId:'channelStep',
      haveSelect:true,
      child:[
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
