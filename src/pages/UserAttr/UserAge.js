
const AgeOption = {
  title : {
    text: '用户年龄分布(%)',
    x:'center'
  },

  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    x: 'left',
    data:['20-29','30-39','40-49','50-55']
  },
  series: [
    {
      name:'年龄分布',
      type:'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '30',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data:[
        {value:335, name:'20-29'},
        {value:310, name:'30-39'},
        {value:234, name:'40-49'},
        {value:135, name:'50-55'},
      ]
    }
  ]
};


module.exports = {
  AgeOption
}

