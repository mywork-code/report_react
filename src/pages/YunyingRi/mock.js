
const tableData = () => {
  return {
    dataSource: [
      /*{
        date: '5月1号',//日期reportDate
        effectiveRegisterPer: '0.2',//有效注册率
        decisionCompletionPer:'0.6',//决策完成率
        decisionPassPer:'0.2',//决策通过率
        drawMoneyPer:"0.3",//提现率
        autoCheckPer:"0.3",//电审通过率
        compositePer:"0.3",//综合转化率
        ajqhRegisterNum:"30",//趣花注册人数
        fydRegisterNum:"3",//房易贷注册人数
        intercepteRegisterNum:"3",//注册截流数
        alternationWithZhongYuanNum:"3",//中原交互总数
        effectiveRegisterNum:"3",//有效注册数
        mobileAuthenticationNum:"3",//手机认证数
        cardAuthenticationNum:"3",//银行卡认证数
        decisionPassNum:"3",//决策通过数
        drawMoneyNum:"3",//drawMoneyNum
        drawMoneyPassNum:"3",//提现通过人数
        signMoneyCount:"3",//签约金额
        decisionCompletionNum:3,//决策完成数
        autoCheckNum:3,//电审人数
        autoCheckPassNum:3//电审通过人数
      }*/

    ],
    columns: [
      {
        title: '日期',
        dataIndex: 'date',
        key: 'date',
        visiable:true,
      },
      {
        title: '有效注册率',
        dataIndex: 'effectiveRegisterPer',
        key: 'effectiveRegisterPer',
        visiable:true,
      },
      {
        title: '决策完成率',
        dataIndex: 'decisionCompletionPer',
        key: 'decisionCompletionPer',
        visiable:true,
      },
      {
        title: '决策通过率',
        dataIndex: 'decisionPassPer',
        key: 'decisionPassPer',
        visiable:true,
      },
      {
        title: '提现率',
        dataIndex: 'drawMoneyPer',
        key: 'drawMoneyPer',
        visiable:true,
      },
      {
        title: '电审通过率',
        dataIndex: 'autoCheckPer',
        key: 'autoCheckPer',
        visiable:true,
      },
      {
        title: '综合转化率',
        dataIndex: 'compositePer',
        key: 'compositePer',
        visiable:true,
      },
      {
        title: '趣花注册人数',
        dataIndex: 'ajqhRegisterNum',
        key: 'ajqhRegisterNum',
        visiable:true,
      },
      {
        title: '房易贷注册人数',
        dataIndex: 'fydRegisterNum',
        key: 'fydRegisterNum',
        visiable:true,
      },
      {
        title: '注册截流数',
        dataIndex: 'intercepteRegisterNum',
        key: 'intercepteRegisterNum',
        visiable:true,
      },
      {
        title: '中原交互总数',
        dataIndex: 'alternationWithZhongYuanNum',
        key: 'alternationWithZhongYuanNum',
        visiable:true,
      },
      {
        title: '有效注册数',
        dataIndex: 'effectiveRegisterNum',
        key: 'effectiveRegisterNum',
        visiable:true,
      },
      {
        title: '手机认证数',
        dataIndex: 'mobileAuthenticationNum',
        key: 'mobileAuthenticationNum',
        visiable:true,
      },
      {
        title: '银行卡认证数',
        dataIndex: 'cardAuthenticationNum',
        key: 'cardAuthenticationNum',
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
        dataIndex: 'drawMoneyNum',
        key: 'drawMoneyNum',
        visiable:true,
      },
      {
        title: '提现通过人数',
        dataIndex: 'drawMoneyPassNum',
        key: 'drawMoneyPassNum',
        visiable:true,
      },
      {
        title: '签约金额',
        dataIndex: 'signMoneyCount',
        key: 'signMoneyCount',
        visiable:true,
      },
      {
        title: '决策完成数',
        dataIndex: 'decisionCompletionNum',
        key: 'decisionCompletionNum',
        visiable:true,
      },
      {
        title: '电审人数',
        dataIndex: 'autoCheckNum',
        key: 'autoCheckNum',
        visiable:true,
      },
      {
        title: '电审通过人数',
        dataIndex: 'autoCheckPassNum',
        key: 'autoCheckPassNum',
        visiable:true,
      },
    ]

  }
}

const filterData = () => {
  return [
    {
      groupTitle:'授信环节',
      groupId:'creditStep-YunYingRi',
      haveSelect:true,
      child:[
        {
          value:'趣花注册人数',
          isCheck:true,
        },
        {
          value:'房易贷注册人数',
          isCheck:true,
        },
        {
          value:'注册截流数',
          isCheck:true,
        },
        {
          value:'中原交互总数',
          isCheck:true,
        },
        {
          value:'有效注册数',
          isCheck:true,
        },
        {
          value:'手机认证数',
          isCheck:true,
        },
        {
          value:'银行卡认证数',
          isCheck:true,
        },
        {
          value:'有效注册率',
          isCheck:true,
        },
      ]
    },
    {
      groupTitle:'决策-提现环节',
      groupId:'withdrawStep-YunYingRi',
      haveSelect:true,
      child:[
        {
          value:'决策完成率',
          isCheck:true,
        },
        {
          value:'决策完成数',
          isCheck:true,
        },
        {
          value:'决策通过数',
          isCheck:true,
        },
        {
          value:'决策通过率',
          isCheck:true,
        },
        {
          value:'提现人数',
          isCheck:true,
        },
        {
          value:'提现率',
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
          value:'电审通过率',
          isCheck:true,
        },
        {
          value:'签约金额',
          isCheck:true,
        },
        {
          value:'综合转化率',
          isCheck:true,
        },
      ]
    }
  ]
}


const filterData2 = () => {
  return [
    {
      groupTitle:'授信环节',
      groupId:'creditStep-YunYingRi',
      child:[
        {
          value:'趣花注册人数',
          isCheck:false,
        },
        {
          value:'房易贷注册人数',
          isCheck:false,
        },
        {
          value:'注册截流数',
          isCheck:false,
        },
        {
          value:'中原交互总数',
          isCheck:false,
        },
        {
          value:'有效注册数',
          isCheck:false,
        },
        {
          value:'手机认证数',
          isCheck:false,
        },
        {
          value:'银行卡认证数',
          isCheck:false,
        },
        {
          value:'有效注册率',
          isCheck:true,
        },
      ]
    },
    {
      groupTitle:'决策-提现环节',
      groupId:'withdrawStep-YunYingRi',
      child:[
        {
          value:'决策完成率',
          isCheck:true,
        },
        {
          value:'决策完成数',
          isCheck:false,
        },
        {
          value:'决策通过数',
          isCheck:false,
        },
        {
          value:'决策通过率',
          isCheck:false,
        },
        {
          value:'提现人数',
          isCheck:false,
        },
        {
          value:'提现率',
          isCheck:true,
        },
        {
          value:'提现通过人数',
          isCheck:false,
        },
        {
          value:'电审人数',
          isCheck:false,
        },
        {
          value:'电审通过人数',
          isCheck:false,
        },
        {
          value:'电审通过率',
          isCheck:false,
        },
        {
          value:'签约金额',
          isCheck:false,
        },
        {
          value:'综合转化率',
          isCheck:false,
        },
      ]
    }
  ]
}


module.exports = {
  tableData,
  filterData,
  filterData2
}
