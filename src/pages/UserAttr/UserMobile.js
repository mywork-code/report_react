const MoboleOption = {
  title : {
    text: '用户机型TOP10',
    x:'center'
  },
  dataset: {
    source: [
      ['score', 'amount', 'product'],
      [89.3, 58212, 'oppo'],
      [57.1, 78254, '三星'],
      [74.4, 41032, '荣耀'],
      [50.1, 12755, '小米'],
      [89.7, 20145, 'vivo'],
      [68.1, 79146, 'iPhone7p'],
      [19.6, 91852, 'iPhone7'],
      [10.6, 101852, 'iPhone8'],
      [32.7, 20112, 'iPhoneX']
    ]
  },
  grid: {containLabel: true},
  xAxis: {name: 'amount'},
  yAxis: {type: 'category'},

  series: [
    {
      type: 'bar',
      encode: {
        // Map the "amount" column to X axis.
        x: 'amount',
        // Map the "product" column to Y axis
        y: 'product'
      }
    }
  ]
};

module.exports = {
  MoboleOption
}
