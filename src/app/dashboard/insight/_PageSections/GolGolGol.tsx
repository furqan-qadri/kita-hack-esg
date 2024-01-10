import React from "react";
import ReactApexChart from "react-apexcharts";

class GolGolGol extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [41],
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '51%',
              }
            },
          },
          labels: ['S'],
        },
      };
      
    }


    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={350} />
</div>



      );
    }
  }

  export default GolGolGol;