<template>
  <div ref="echart"></div>
</template>

<script>
//引入echarts
import  * as echarts  from 'echarts'
export default {
      data() {
          return {
            axisOption:{
                legend:{
                // 图例文字颜色
                textStyle: {
                    color: "#333",
                },
                },
                grid: {
                left: "20%",
                },
                // 提示框
                tooltip: {
                trigger: "axis",
                },
                xAxis: {
                type: "category", // 类目轴
                data: [],
                axisLine: {
                    lineStyle: {
                    color: "#17b3a3",
                    },
                },
                axisLabel: {
                    interval: 0,
                    color: "#333",
                },
                },
                yAxis: [
                {
                    type: "value",
                    axisLine: {
                    lineStyle: {
                        color: "#17b3a3",
                    },
                    },
                },
                ],
                color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3"],
                series: [],
            },
            normalOption:{
                tooltip: {
                    trigger: "item",
                },
                color: [
                    "#0f78f4",
                    "#dd536b",
                    "#9462e5",
                    "#a6a6a6",
                    "#e1bb22",
                    "#39c362",
                    "#3ed1cf",
                ],
                series: [],
            },
            //标记符，用来判断是否已经对echart进行渲染
            echart:null
            }
        },
      watch:{
          chartData:{
            //   immediate:true,
              deep:true,
              handler:function(){
                  this.initChart()
              }
          }
      },
      methods: {
          initChart(){
            this.initChartData()
            //如果已经初始化过echarts
            if (this.echart) { 
                this.echart.setOption(this.options)               
            }else{
                this.echart =echarts.init(this.$refs.echart)
                this.echart.setOption(this.options)
            }
          },
          initChartData(){
              //根据props中传递的参数判断是否为折线和竖状图
              if (this.isAxiisChart) {
                this.axisOption.xAxis.data=this.chartData.xData
                this.axisOption.series = this.chartData.series
              }else{
                  this.normalOption.series =this.chartData.series
              }
          }
      },
      props:{
          //用于区分图例种类
          isAxiisChart:{
              type:Boolean,
              default:true,
          },
          //图表参数
          chartData:{
              type:Object,
              //设置默认值，防止空值出错
              default(){
                  return{
                      xData:[],
                      series:[],
                  }

              }

          }
      },

      //对传入属性进行判断
      computed:{
          options(){
              return this.isAxiisChart?this.axisOption:this.normalOption
          }

      }
}
</script>

<style>
</style>
