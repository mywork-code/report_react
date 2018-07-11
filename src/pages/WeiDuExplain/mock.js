const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  if (index === 15) {
    obj.props.colSpan = 0;
  }
  return obj;
};

const getColumns = (title) => {
  return [{
    title: title,
    colSpan: 2,
    dataIndex: 'name',
    align:'left',
    width:'150px'
  }, {
    title: 'Mean',
    dataIndex: 'mean',
    colSpan: 0,
    render: renderContent,
  }];
}


const getDataSource = () => {
  return [{
    key: '1',
    name: '趣花注册人数',
    mean: '趣花注册人数（以留下手机号为准)',
  }, {
    key: '2',
    name: '房易贷注册人数',
    mean: '送去与中原交互核验客户信息并通过的客户数（以验证通过时间为准)',
  }, {
    key: '3',
    name: '注册截流数',
    mean: '当天注册之后，未进行下一步操作的客户数',
  }, {
    key: '4',
    name: '中原交互总数',
    mean: '送去与中原交互核验客户信息的客户数',
  }, {
    key: '5',
    name: '有效注册数',
    mean: '送去与中原交互核验客户信息并通过的客户数（以验证通过时间为准）',
  }, {
    key: '6',
    name: '手机认证数',
    mean: '客户在手机认证步骤中未进入下一步流程，停留在当前状态的客户',
  }, {
    key: '7',
    name: '银行卡认证数',
    mean: '客户在银行卡认证步骤中提交信息之后系统未给出决策，停留在当前状态的客户',
  }, {
    key: '8',
    name: '有效注册率',
    mean: '有效注册人数/趣花注册人数\n',
  },{
    key: '9',
    name: '决策完成数',
    mean: '系统已经给出额度，决策通过',
  }, {
    key: '10',
    name: '决策通过数',
    mean: '授信通过＋拒绝的人数',
  }, {
    key: '11',
    name: '提现人数',
    mean: '发起提现的人数，同一人由于电审被拒一次重新提现的算作一人',
  }, {
    key: '12',
    name: '提现通过人数',
    mean: '发起提现之后审核通过的人数（以提现通过的节点为准，不以发起提现时间为准)',
  },{
    key: '13',
    name: '电审人数',
    mean: '电审完成的人数（同一个人电审被拒一次之后重新发起提现再次电审算作两次)',
  }, {
    key: '14',
    name: '电审通过人数',
    mean: '电审通过的人数',
  },{
    key: '15',
    name: '签约金额',
    mean: '发起提现并审核通过的签约金额',
  }];
}

const getDataSource2 = () => {
  return [
    {
      key: '17',
      name: '决策完成率',
      mean: '决策完成人数/有效注册人数',
    }, {
      key: '18',
      name: '决策通过率',
      mean: '决策通过人数/决策完成人数',
    },{
      key: '19',
      name: '提现率',
      mean: '提现人数/决策通过',
    }, {
      key: '20',
      name: '电审通过率',
      mean: '电审通过人数/电审人数',
    },{
      key: '21',
      name: '综合转化率',
      mean: '电审通过人数/房易贷注册人数',
    }
  ]
}


const getPagination = () =>{
  return {
    hideOnSinglePage:true,
    pageSize: 50
  }
}
export {getColumns, getDataSource,getPagination, getDataSource2}
