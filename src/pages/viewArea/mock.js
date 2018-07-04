
const mockOption = () =>{
    return {
      title: {
        text: '用户地区分布',
        left: 'center',
        top:0,
        textStyle: {
          color:"#484848"
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
        show:false,
        data:['有效注册人数']
      },
      visualMap: {
        min: 0,
        max: 500,
        left: 'left',
        top: 'bottom',
        text: ['低','高'],       // 文本，默认为数值文本
        calculable: true,
        show:false,
        inRange: {
          color: ['#C9EBFB',"#CFECFB","#A9DEF8","#79CCF4"]
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
          itemStyle:{
            normal:{
              areaColor:'#C9EBFB',
              borderColor:"#ffffff",
            },
            emphasis:{
              areaColor:"#79CCF4"
            }
          },
          label: {
            normal: {
              show: true,
              color:"#303030",
              fontSize:"12px",
            },
            emphasis:{
            }
          },
          data:[

          ]
        },
      ]
    };
}


module.exports = {
  mockOption
}
