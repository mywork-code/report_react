
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

module.exports = {
  tableDate
}
