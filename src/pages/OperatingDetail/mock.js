
const tableDate = () => {
  return {
    columns: [
      {
        title: '日期',
        dataIndex: 'reportDateStr',
        key: 'reportDateStr',
        visiable:true,
      },
      {
        title: '身份验证数',
        dataIndex: 'identityAuthCount',
        key: 'identityAuthCount',
        visiable:true,
      },
      {
        title: '手机实名',
        dataIndex: 'mobileAuthCount',
        key: 'mobileAuthCount',
        visiable:true,
      },
      {
        title: '交单总数(申请阶段)',
        dataIndex: 'authBlackApply',
        key: 'authBlackApply',
        visiable:true,
      },
      {
        title: '截流人数(申请阶段)',
        dataIndex: 'authBlackReject',
        key: 'authBlackReject',
        visiable:true,
      },
      {
        title: '转化人数(申请阶段)',
        dataIndex: 'zyInvokeTotalCount',
        key: 'zyInvokeTotalCount',
        visiable:true,
      },
      {
        title: '预审人数',
        dataIndex: 'auditWaitCount',
        key: 'auditWaitCount',
        visiable:true,
      },
      {
        title: '预审拒绝人数',
        dataIndex: 'auditRejectCount',
        key: 'auditRejectCount',
        visiable:true,
      },
      {
        title: '预审通过人数',
        dataIndex: 'auditPassCount',
        key: 'auditPassCount',
        visiable:true,
      },
      {
        title: '授信完成人数',
        dataIndex: 'authFinishCount',
        key: 'authFinishCount',
        visiable:true,
      },
      {
        title: '授信通过人数',
        dataIndex: 'authFinishPass',
        key: 'authFinishPass',
        visiable:true,
      },
      {
        title: '授信金额',
        dataIndex: 'totalAuthAmount',
        key: 'totalAuthAmount',
        visiable:true,
      },
      {
        title: '交单总数(提现阶段)',
        dataIndex: 'withdrawApply',
        key: 'withdrawApply',
        visiable:true,
      },
      {
        title: '截流人数(提现阶段)',
        dataIndex: 'withdrawApplyReject',
        key: 'withdrawApplyReject',
        visiable:true,
      },
      {
        title: '可电审总量',
        dataIndex: 'auditWaitCount',
        key: 'auditWaitCount',
        visiable:true,
      },
      {
        title: '进件总数',
        dataIndex: 'totalWithdrawOrders',
        key: 'totalWithdrawOrders',
        visiable:true,
      },
      {
        title: '电审通过量',
        dataIndex: 'auditPassCount',
        key: 'auditPassCount',
        visiable:true,
      },
      {
        title: '电审通过金额',
        dataIndex: 'auditPassAmount',
        key: 'auditPassAmount',
        visiable:true,
      },
      {
        title: '电审拒绝量',
        dataIndex: 'auditRejectCount',
        key: 'auditRejectCount',
        visiable:true,
      },
      {
        title: '签约人数',
        dataIndex: 'submitOrderCount',
        key: 'submitOrderCount',
        visiable:true,
      },
      {
        title: '签约金额',
        dataIndex: 'submitOrderTotalAmount',
        key: 'submitOrderTotalAmount',
        visiable:true,
      },
      {
        title: '签约通过人数',
        dataIndex: 'submitOrderPass',
        key: 'submitOrderPass',
        visiable:true,
      },
      {
        title: '签约通过金额',
        dataIndex: 'submitOrderPassTotalAmount',
        key: 'submitOrderPassTotalAmount',
        visiable:true,
      },
      {
        title: '放款人数',
        dataIndex: 'loanCount',
        key: 'loanCount',
        visiable:true,
      },
      {
        title: '放款金额',
        dataIndex: 'loanAmount',
        key: 'loanAmount',
        visiable:true,
      },
      {
        title: '新用户贷款人数',
        dataIndex: 'newLoanCustCount',
        key: 'newLoanCustCount',
        visiable:true,
      },
      {
        title: '新用户贷款金额',
        dataIndex: 'newLoanCustAmount',
        key: 'newLoanCustAmount',
        visiable:true,
      },
      {
        title: '老用户贷款金额',
        dataIndex: 'reloanCustAmount',
        key: 'reloanCustAmount',
        visiable:true,
      },
      {
        title: '老用户贷款人数',
        dataIndex: 'reloanCustCount',
        key: 'reloanCustCount',
        visiable:true,
      },
    ]
  }
}

<<<<<<< HEAD
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
=======
module.exports = {
>>>>>>> acfcff14b4eb5f54b1bc17f9fe37d522d3ec85ef
  tableDate
}
