const mockOption = () => {
  return {
    title: {
      text: '用户地区分布',
      left: 'center',
      top: 0,
      textStyle: {
        color: "#484848"
      }
    },
    tooltip: {
      trigger: 'item',
      // formatter: function(params){
      //     //修改提示框
      //     var toast =  '<div>'+params.data.name+'</div>'
      //
      //     let map = this.ApassConverData.get(params.data.name);
      //
      //     map.forEach((v,k) => {
      //       toast += '<p>'+ k +':' + v +'</p>'
      //     })
      //
      //   return toast;
      //
      // }
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      show: false,
      data: ['有效注册人数']
    },
    visualMap: {
      min: 0,
      max: 500,
      left: 'left',
      top: 'bottom',
      text: ['低', '高'],       // 文本，默认为数值文本
      calculable: true,
      show: false,
      inRange: {
        color: ['#C9ECFB', "#CFECFB", "#A9DEF8", "#79CCF4"]
        // color: ["#A9DEF8","#79CCF4"]
      }
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      // feature: {
      //   dataView: {readOnly: false},
      //   restore: {},
      //   saveAsImage: {}
      // }
    },
    series: [
      {
        name: '有效注册人数',
        type: 'map',
        mapType: 'china',
        showLegendSymbol: false,//隐藏地图上面的指示点
        roam: false,
        itemStyle: {
          normal: {
            areaColor: '#C9EBFB',
            borderColor: "#ffffff",
          },
          emphasis: {
            areaColor: "#3BA4D7"
          }
        },
        label: {
          normal: {
            show: true,
            color: "#303030",
            fontSize: "12px",
          },
          emphasis: {}
        },
        data: [
          {name:"上海",value:"30"}
        ]
      },
    ]
  };
}

const tableDate = () => {
  return {
    dataSource: [],
    columns: [
      {
        title: '日期',
        dataIndex: 'date',
        key: 'date',
        visiable:true,
      },
      {
        title: '所在地区',
        dataIndex: 'region',
        key: 'region',
        visiable:true,
      },
      {
        title: '有效注册人数',
        dataIndex: 'effectiveRegisterNum',
        key: 'effectiveRegisterNum',
        visiable:true,
      },
      {
        title: '手机认证数',
        dataIndex: 'phoneAuthNum',
        key: 'phoneAuthNum',
        visiable:true,
      },
      {
        title: '决策完成数',
        dataIndex: 'decisionCompletionNum',
        key: 'decisionCompletionNum',
        visiable:true,
      },
      {
        title: '决策通过数',
        dataIndex: 'decisionPassNum',
        key: 'decisionPassNum',
        visiable:true,
      },
      {
        title: '提现人数',
        dataIndex: 'withdrawNum',
        key: 'withdrawNum',
        visiable:true,
      },
      {
        title: '提现通过人数',
        dataIndex: 'withdrawPassNum',
        key: 'withdrawPassNum',
        visiable:true,
      },
      {
        title: '电审人数',
        dataIndex: 'phoneReviewNum',
        key: 'phoneReviewNum',
        visiable:true,
      },
      {
        title: '电审通过人数',
        dataIndex: 'phoneReviewPassNum',
        key: 'phoneReviewPassNum',
        visiable:true,
      },
      {
        title: '签约金额',
        dataIndex: 'signMoney',
        key: 'signMoney',
        visiable:true,
      },
      {
        title: '决策完成率',
        dataIndex: 'decisionCompletionRate',
        key: 'decisionCompletionRate',
        visiable:true,
      },
      {
        title: '决策通过率',
        dataIndex: 'decisionPassRate',
        key: 'decisionPassRate',
        visiable:true,
      },
      {
        title: '提现率',
        dataIndex: 'withdrawRate',
        key: 'withdrawRate',
        visiable:true,
      },
    ]

  }
}

const filterData = () => {
  return [
    {
      groupTitle:'授信环节',
      groupId:'creditStep',
      haveSelect:true,
      child:[
        {
          value:'所在地区',
          isCheck:true,
        },
        {
          value:'有效注册人数',
          isCheck:true,
        },
        {
          value:'手机认证数',
          isCheck:true,
        }
      ]
    },
    {
      groupTitle:'决策-提现环节',
      groupId:'withdrawStep',
      haveSelect:true,
      child:[
        {
          value:'决策完成数',
          isCheck:true,
        },
        {
          value:'决策通过数',
          isCheck:true,
        },
        {
          value:'提现人数',
          isCheck:true,
        },
        {
          value:'提现通过人数',
          isCheck:true,
        },
        {
          value:'电审人数',
          isCheck:true,
        },
        {
          value:'电审通过人数',
          isCheck:true,
        },
        {
          value:'签约金额',
          isCheck:true,
        },
        {
          value:'决策完成率',
          isCheck:true,
        },
        {
          value:'决策通过率',
          isCheck:true,
        },
        {
          value:'提现率',
          isCheck:true,
        },
      ]
    }
  ]
}

const StoreCityTable = new Map([
  ["北京中原","北京"],
  ["天津中原","天津"],
  ["武汉中原","湖北"],
  ["济南中原","山东"],
  ["大连中原","辽宁"],
  ["沈阳中原","黑龙江"],
  ["长春中原","吉林"],
  ["合肥中原","安徽"],
  ["杭州中原","浙江"],
  ["宁波中原","浙江"],
  ["常州中原","江苏"],
  ["南京中原","江苏"],
  ["苏州中原","江苏"],
  ["无锡中原","江苏"],
  ["上海中原","上海"],
  ["长沙中原","湖南"],
  ["成都中原","四川"],
  ["西安中原","陕西"],
  ["郑州中原","河南"],
  ["重庆中原","重庆"],
  ["昆明中原","云南"],
  ["南宁中原","广西"],
  ["海口中原","海南"],
  ["南昌中原","江西"],
  ["厦门中原","福建"],
  ["福州中原","福建"],
  ["佛山中原","广东"],
  ["东莞中原","广东"],
  ["广州中原","广东"],
  ["惠州中原","广东"],
  ["中山中原","广东"],
  ["珠海中原","广东"],
  ["深圳中原","广东"],
]);



module.exports = {
  mockOption,
  tableDate,
  filterData,
  StoreCityTable,
}
