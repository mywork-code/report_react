
const tableData = () => {
  return {
    dataSource: [
      {
        date: '5月1号',
        effectiveRegisterPer: '安徽',
        decisionCompletionPer:'1',
        decisionPassPer:'2',
        drawMoneyPer:"3",
        autoCheckPer:"3",
        compositePer:"3",
        ajqhRegisterNum:"3",
        fydRegisterNum:"3",
        intercepteRegisterNum:"3",
        alternationWithZhongYuanNum:"3",
        effectiveRegisterNum:"3",
        mobileAuthenticationNum:"3",
        cardAuthenticationNum:"3",
        decisionPassNum:"3",
        drawMoneyNum:"3",
        drawMoneyPassNum:"3",
        signMoneyCount:"3"
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
    ]

  }
}

const filterData = () => {
  return [
    {
      groupTitle:'授信环节',
      groupId:'creditStep-YunYingRi',
      haveSelect:false,
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
          isCheck:false,
        },
      ]
    },
    {
      groupTitle:'决策-提现环节',
      groupId:'withdrawStep-YunYingRi',
      haveSelect:false,
      child:[
        {
          value:'决策完成率',
          isCheck:false,
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
          isCheck:false,
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
  filterData
}
