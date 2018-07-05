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
      // 修改提示框
      //     console.log(params);
      //     var toast =  '<div>'+params.data.name+'</div>'
      //
      //     toast += '<p>'+ '西安市有效注册人数：200' +'</p>'
      //     toast += '<p>'+ '咸阳市有效注册人数：200' +'</p>'
      //
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
      feature: {
        dataView: {readOnly: false},
        restore: {},
        saveAsImage: {}
      }
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
        data: []
      },
    ]
  };
}

const tableDate = () => {
  return {
    dataSource: [
      {
        date: '5月1号',
        region: '安徽',
        effectiveRegisterNum:'1',
        phoneAuthNum:'2',
        decisionCompletionNum:"3",
        decisionPassNum:'4',
        withdrawNum:'5',
        withdrawPassNum:'6',
        phoneReviewNum:'7',
        phoneReviewPassNum:'8',
        signMoney:'9',
        decisionCompletionRate:'10%',
        decisionPassRate:'20%',
        withdrawRate:'30%'

      },
      {
        date: '5月1号',
        region: '安徽',
        effectiveRegisterNum:'1',
        phoneAuthNum:'2',
        decisionCompletionNum:"3",
        decisionPassNum:'4',
        withdrawNum:'5',
        withdrawPassNum:'6',
        phoneReviewNum:'7',
        phoneReviewPassNum:'8',
        signMoney:'9',
        decisionCompletionRate:'10%',
        decisionPassRate:'20%',
        withdrawRate:'30%'

      },
      {
        date: '5月1号',
        region: '安徽',
        effectiveRegisterNum:'1',
        phoneAuthNum:'2',
        decisionCompletionNum:"3",
        decisionPassNum:'4',
        withdrawNum:'5',
        withdrawPassNum:'6',
        phoneReviewNum:'7',
        phoneReviewPassNum:'8',
        signMoney:'9',
        decisionCompletionRate:'10%',
        decisionPassRate:'20%',
        withdrawRate:'30%'

      },
      {
        date: '5月1号',
        region: '安徽',
        effectiveRegisterNum:'1',
        phoneAuthNum:'2',
        decisionCompletionNum:"3",
        decisionPassNum:'4',
        withdrawNum:'5',
        withdrawPassNum:'6',
        phoneReviewNum:'7',
        phoneReviewPassNum:'8',
        signMoney:'9',
        decisionCompletionRate:'10%',
        decisionPassRate:'20%',
        withdrawRate:'30%'

      },
      {
        date: '5月1号',
        region: '安徽',
        effectiveRegisterNum:'1',
        phoneAuthNum:'2',
        decisionCompletionNum:"3",
        decisionPassNum:'4',
        withdrawNum:'5',
        withdrawPassNum:'6',
        phoneReviewNum:'7',
        phoneReviewPassNum:'8',
        signMoney:'9',
        decisionCompletionRate:'10%',
        decisionPassRate:'20%',
        withdrawRate:'30%'

      },
      {
        date: '5月1号',
        region: '安徽',
        effectiveRegisterNum:'1',
        phoneAuthNum:'2',
        decisionCompletionNum:"3",
        decisionPassNum:'4',
        withdrawNum:'5',
        withdrawPassNum:'6',
        phoneReviewNum:'7',
        phoneReviewPassNum:'8',
        signMoney:'9',
        decisionCompletionRate:'10%',
        decisionPassRate:'20%',
        withdrawRate:'30%'

      },
      {
        date: '5月1号',
        region: '安徽',
        effectiveRegisterNum:'1',
        phoneAuthNum:'2',
        decisionCompletionNum:"3",
        decisionPassNum:'4',
        withdrawNum:'5',
        withdrawPassNum:'6',
        phoneReviewNum:'7',
        phoneReviewPassNum:'8',
        signMoney:'9',
        decisionCompletionRate:'10%',
        decisionPassRate:'20%',
        withdrawRate:'30%'

      },
      {
        date: '5月1号',
        region: '安徽',
        effectiveRegisterNum:'1',
        phoneAuthNum:'2',
        decisionCompletionNum:"3",
        decisionPassNum:'4',
        withdrawNum:'5',
        withdrawPassNum:'6',
        phoneReviewNum:'7',
        phoneReviewPassNum:'8',
        signMoney:'9',
        decisionCompletionRate:'10%',
        decisionPassRate:'20%',
        withdrawRate:'30%'

      },
      {
        date: '5月1号',
        region: '安徽',
        effectiveRegisterNum:'1',
        phoneAuthNum:'2',
        decisionCompletionNum:"3",
        decisionPassNum:'4',
        withdrawNum:'5',
        withdrawPassNum:'6',
        phoneReviewNum:'7',
        phoneReviewPassNum:'8',
        signMoney:'9',
        decisionCompletionRate:'10%',
        decisionPassRate:'20%',
        withdrawRate:'30%'

      },
      {
        date: '5月1号',
        region: '安徽',
        effectiveRegisterNum:'1',
        phoneAuthNum:'2',
        decisionCompletionNum:"3",
        decisionPassNum:'4',
        withdrawNum:'5',
        withdrawPassNum:'6',
        phoneReviewNum:'7',
        phoneReviewPassNum:'8',
        signMoney:'9',
        decisionCompletionRate:'10%',
        decisionPassRate:'20%',
        withdrawRate:'30%'

      },
      {
        date: '5月1号',
        region: '安徽',
        effectiveRegisterNum:'1',
        phoneAuthNum:'2',
        decisionCompletionNum:"3",
        decisionPassNum:'4',
        withdrawNum:'5',
        withdrawPassNum:'6',
        phoneReviewNum:'7',
        phoneReviewPassNum:'8',
        signMoney:'9',
        decisionCompletionRate:'10%',
        decisionPassRate:'20%',
        withdrawRate:'30%'

      },{
        date: '5月1号',
        region: '安徽',
        effectiveRegisterNum:'1',
        phoneAuthNum:'2',
        decisionCompletionNum:"3",
        decisionPassNum:'4',
        withdrawNum:'5',
        withdrawPassNum:'6',
        phoneReviewNum:'7',
        phoneReviewPassNum:'8',
        signMoney:'9',
        decisionCompletionRate:'10%',
        decisionPassRate:'20%',
        withdrawRate:'30%'

      },{
        date: '5月1号',
        region: '安徽',
        effectiveRegisterNum:'1',
        phoneAuthNum:'2',
        decisionCompletionNum:"3",
        decisionPassNum:'4',
        withdrawNum:'5',
        withdrawPassNum:'6',
        phoneReviewNum:'7',
        phoneReviewPassNum:'8',
        signMoney:'9',
        decisionCompletionRate:'10%',
        decisionPassRate:'20%',
        withdrawRate:'30%'

      },{
        date: '5月1号',
        region: '安徽',
        effectiveRegisterNum:'1',
        phoneAuthNum:'2',
        decisionCompletionNum:"3",
        decisionPassNum:'4',
        withdrawNum:'5',
        withdrawPassNum:'6',
        phoneReviewNum:'7',
        phoneReviewPassNum:'8',
        signMoney:'9',
        decisionCompletionRate:'10%',
        decisionPassRate:'20%',
        withdrawRate:'30%'

      },{
        date: '5月1号',
        region: '安徽',
        effectiveRegisterNum:'1',
        phoneAuthNum:'2',
        decisionCompletionNum:"3",
        decisionPassNum:'4',
        withdrawNum:'5',
        withdrawPassNum:'6',
        phoneReviewNum:'7',
        phoneReviewPassNum:'8',
        signMoney:'9',
        decisionCompletionRate:'10%',
        decisionPassRate:'20%',
        withdrawRate:'30%'

      },{
        date: '5月1号',
        region: '安徽',
        effectiveRegisterNum:'1',
        phoneAuthNum:'2',
        decisionCompletionNum:"3",
        decisionPassNum:'4',
        withdrawNum:'5',
        withdrawPassNum:'6',
        phoneReviewNum:'7',
        phoneReviewPassNum:'8',
        signMoney:'9',
        decisionCompletionRate:'10%',
        decisionPassRate:'20%',
        withdrawRate:'30%'

      },{
        date: '5月1号',
        region: '安徽',
        effectiveRegisterNum:'1',
        phoneAuthNum:'2',
        decisionCompletionNum:"3",
        decisionPassNum:'4',
        withdrawNum:'5',
        withdrawPassNum:'6',
        phoneReviewNum:'7',
        phoneReviewPassNum:'8',
        signMoney:'9',
        decisionCompletionRate:'10%',
        decisionPassRate:'20%',
        withdrawRate:'30%'

      },{
        date: '5月1号',
        region: '安徽',
        effectiveRegisterNum:'1',
        phoneAuthNum:'2',
        decisionCompletionNum:"3",
        decisionPassNum:'4',
        withdrawNum:'5',
        withdrawPassNum:'6',
        phoneReviewNum:'7',
        phoneReviewPassNum:'8',
        signMoney:'9',
        decisionCompletionRate:'10%',
        decisionPassRate:'20%',
        withdrawRate:'30%'

      },








    ],
    columns: [
      {
        title: '日期',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: '所在地区',
        dataIndex: 'region',
        key: 'region',
      },
      {
        title: '有效注册人数',
        dataIndex: 'effectiveRegisterNum',
        key: 'effectiveRegisterNum',
      },
      {
        title: '手机认证数',
        dataIndex: 'phoneAuthNum',
        key: 'phoneAuthNum',
      },
      {
        title: '决策完成数',
        dataIndex: 'decisionCompletionNum',
        key: 'decisionCompletionNum',
      },
      {
        title: '决策通过数',
        dataIndex: 'decisionPassNum',
        key: 'decisionPassNum',
      },
      {
        title: '提现人数',
        dataIndex: 'withdrawNum',
        key: 'withdrawNum',
      },
      {
        title: '提现通过人数',
        dataIndex: 'withdrawPassNum',
        key: 'withdrawPassNum',
      },
      {
        title: '电审人数',
        dataIndex: 'phoneReviewNum',
        key: 'phoneReviewNum',
      },
      {
        title: '电审通过人数',
        dataIndex: 'phoneReviewPassNum',
        key: 'phoneReviewPassNum',
      },
      {
        title: '签约金额',
        dataIndex: 'signMoney',
        key: 'signMoney',
      },
      {
        title: '决策完成率',
        dataIndex: 'decisionCompletionRate',
        key: 'decisionCompletionRate',
      },
      {
        title: '决策通过率',
        dataIndex: 'decisionPassRate',
        key: 'decisionPassRate',
      },
      {
        title: '提现率',
        dataIndex: 'withdrawRate',
        key: 'withdrawRate',
      },
    ]

  }
}


module.exports = {
  mockOption,
  tableDate
}
