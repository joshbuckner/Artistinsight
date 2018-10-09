// import React from 'react';

// const FollowerLineGraph = () => {
// 	return (
// 		<div className='fLine'>
// 			<p>Follower Line Graph</p>
// 		</div>
// 	)
// }

// export default FollowerLineGraph;

import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

function chartData() {
  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Follower Count',
        backgroundColor: 'rgba(355,355,355,1)',
        borderColor: 'rgba(355,355,355,0.6)',
        fill: false,
        fillColor: 'rgba(355,355,355,0.2)',
        strokeColor: 'rgba(355,355,355,1)',
        pointColor: 'rgba(355,355,355,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(355,355,355,1)',
        data: [34000000, 34023520, 34053546, 34635478, 34804573, 34884938, 35000000],
      },
    ]
  }
}

const options = {
    responsive: true,
    maintainAspectRatio: false,
	tooltips: {
		displayColors: false,
		callbacks: {
		    label: function(tooltipItem, data) {
		        return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		    },
		}
	},
	legend: {
            labels: {
            	boxWidth: 0,
                fontColor: "white",
                fontSize: 18
            }
        },
    scales: {
        yAxes: [{
        	gridLines: {
			    color: "rgba(355,355,355,0.2)"
			},
            ticks: {
                fontColor: "white",                    
			    userCallback: function(value, index, values) {
			        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				}
			}
        }],
        xAxes: [{
        	gridLines: {
			    color: "rgba(355,355,355,0.2)"
			},
            ticks: {
                fontColor: "white",
            }
        }]
    }
}

// const styles = {
//   graphContainer: {
//     padding: '15px'
//   }
// }

class FollowerLineGraph extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: chartData()
    }
  }

  render() {
    return (
	    <div className='graphContainer'>
	        <div className='fLine'>
	           <span className='arrow'></span>
	           <Line data={this.state.data}
	           options={options}
	           width="600" height="250"/>
	       </div>
	    </div>
    )
  }
}

export default FollowerLineGraph;