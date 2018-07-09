

const mockOption = () =>{
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
                        data:[
                            100, 200, 300, 400, 1290, 1330, 1320
                        ],
       
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
        authenticationNumber: '500',
        MobileRealname:'100',
        surrenderApply:'2000',
        closureApply:"3000",
        changeApply:'4000',
        appointmentCheck:'5000',
        appointmentRefuse:'600',
        appointmentAgree:'1000',
        creditComplete:'68',
        creditPass:'9',
        creditMoney:'3500',
        surrenderWithdraw:'5588',
        closureWithdraw:'25668',
        mayPhoneReview: '365',
        enterPieceNum: '636',
        phonePassNum: '6999',
        phonePassMoney: '1200',
        phoneRefuseNum: '8000',
        contractNum: '466',
        contractMoney: '4555',
        contractPassNum: '694',
        contractPassMoney: '',
        loanNum: '9669',
        loanMoney: '258',
        newLoanNum: '366',
        newLoanMoney: '2366',
        oldLoanNum: '255',
        oldLoanMoney: '4588'


      },



    ],
    columns: [
      {
        title: '日期',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: '身份验证数',
        dataIndex: 'authenticationNumber',
        key: 'authenticationNumber',
      },
      {
        title: '手机实名',
        dataIndex: 'MobileRealname',
        key: 'MobileRealname',
      },
      {
        title: '交单总数(申请阶段)',
        dataIndex: 'surrenderApply',
        key: 'surrenderApply',
      },
      {
        title: '截流人数(申请阶段)',
        dataIndex: 'closureApply',
        key: 'closureApply',
      },
      {
        title: '转化人数(申请阶段)',
        dataIndex: 'changeApply',
        key: 'changeApply',
      },
      {
        title: '预审人数',
        dataIndex: 'appointmentCheck',
        key: 'appointmentCheck',
      },
      {
        title: '预审拒绝人数',
        dataIndex: 'appointmentRefuse',
        key: 'appointmentRefuse',
      },
      {
        title: '预审通过人数',
        dataIndex: 'appointmentAgree',
        key: 'appointmentAgree',
      },
      {
        title: '授信完成人数',
        dataIndex: 'creditComplete',
        key: 'creditComplete',
      },
      {
        title: '授信通过人数',
        dataIndex: 'creditPass',
        key: 'creditPass',
      },
      {
        title: '授信金额',
        dataIndex: 'creditMoney',
        key: 'creditMoney',
      },
      {
        title: '交单总数(提现阶段)',
        dataIndex: 'surrenderWithdraw',
        key: 'surrenderWithdraw',
      },
      {
        title: '截流人数(提现阶段)',
        dataIndex: 'closureWithdraw',
        key: 'closureWithdraw',
      },
      {
        title: '可电审总量',
        dataIndex: 'mayPhoneReview',
        key: 'mayPhoneReview',
      },
      {
        title: '进件总数',
        dataIndex: 'enterPieceNum',
        key: 'enterPieceNum',
      },
      {
        title: '电审通过量',
        dataIndex: 'phonePassNum',
        key: 'phonePassNum',
      },
      {
        title: '电审通过金额',
        dataIndex: 'phonePassMoney',
        key: 'phonePassMoney',
      },      
      {
        title: '电审拒绝量',
        dataIndex: 'phoneRefuseNum',
        key: 'phoneRefuseNum',
      },
      {
        title: '签约人数',
        dataIndex: 'contractNum',
        key: 'contractNum',
      },
      {
        title: '签约金额',
        dataIndex: 'contractMoney',
        key: 'contractMoney',
      },
      {
        title: '签约通过人数',
        dataIndex: 'contractPassNum',
        key: 'contractPassNum',
      },      
      {
        title: '签约通过金额',
        dataIndex: 'contractPassMoney',
        key: 'contractPassMoney',
      },
      {
        title: '放款人数',
        dataIndex: 'loanNum',
        key: 'loanNum',
      },
      {
        title: '放款金额',
        dataIndex: 'loanMoney',
        key: 'loanMoney',
      },
      {
        title: '新用户贷款人数',
        dataIndex: 'newLoanNum',
        key: 'newLoanNum',
      },      
      {
        title: '新用户贷款金额',
        dataIndex: 'newLoanMoney',
        key: 'newLoanMoney',
      },
      {
        title: '老用户贷款金额',
        dataIndex: 'oldLoanNum',
        key: 'oldLoanNum',
      },
      {
        title: '老用户贷款人数',
        dataIndex: 'oldLoanMoney',
        key: 'oldLoanMoney',
      },
      


    ]

  }
}
module.exports = {
  mockOption,
  tableDate
}
