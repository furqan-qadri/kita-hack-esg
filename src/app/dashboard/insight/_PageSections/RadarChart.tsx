import React from "react";
import ReactApexChart from "react-apexcharts";

class RadarChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Series 1',
          data: [80, 50, 30, 40, 100, 20],
        }],
        options: {
          chart: {
            height: 350,
            type: 'radar',
          },
        //   title: {
        //     text: 'Employee satisfaction last 6 months'
        //   },
          xaxis: {
            categories: ['April', 'May', 'June','July','August','September']
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={350} />
</div>


      );
    }
  }

  export default RadarChart;