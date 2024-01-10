import React from "react";
import ReactApexChart from "react-apexcharts";

class GolGolGolGol extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [61],
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '61%',
              }
            },
          },
          labels: ['G'],
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

  export default GolGolGolGol;