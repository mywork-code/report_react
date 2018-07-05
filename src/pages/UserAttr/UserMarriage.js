const MarrOption = {
  title : {
    text: '用户婚姻结构',
    x:'center'
  },
  tooltip : {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    x : 'center',
    y : 'bottom',
    data:['20-29','30-39','40-49','50-55']
  },
  toolbox: {
    show : true,
    feature : {
      mark : {show: true},
      magicType : {
        show: true,
        type: ['pie', 'funnel']
      },

    }
  },
  calculable : true,
  series : [
    {
      name:'婚姻分布(%)',
      type:'pie',
      radius : [30, 110],
      center : ['50%', '50%'],
      roseType : 'area',
      data:[
        {value:10, name:'20-29'},
        {value:5, name:'30-39'},
        {value:15, name:'40-49'},
        {value:25, name:'50-55'},

      ]
    }
  ]
};


module.exports = {
  MarrOption
}
