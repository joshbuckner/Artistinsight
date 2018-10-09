import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import datalabels from 'chartjs-plugin-datalabels';

function chartData() {
  return {
    labels: ['\uf09a', '\uf16d', '\uf1bc', '\uf167'],
    datasets: [
      {
        label: 'Follower Count',
        backgroundColor: ['rgba(0,87,156,1)', 'rgba(138,58,185,1)', 'rgba(132,189,0,1)', 'rgba(255,0,0,1)'],
        borderColor: 'rgba(355,355,355,0.6)',
        fill: false,
        fillColor: 'rgba(355,355,355,0.2)',
        strokeColor: 'rgba(355,355,355,1)',
        pointColor: 'rgba(355,355,355,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(355,355,355,1)',
        data: [35500000, 47300000, 26400000, 15900000],
      },
    ]
  }
}

const options = {
	tooltips: {
		callbacks: {
		    label: function(tooltipItem, data) {
		        return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
		}
	},
	plugins: {
		datalabels: {
			color: 'white',
			anchor: 'end',
			formatter: function(label, index, labels) {
        		return label/1000000+'m';
			},
			font: {
				size: '25'
			}
		}
	},
    responsive: true,
    maintainAspectRatio: false,
	tooltips: {
		displayColors: false,
		callbacks: {
		    label: function(tooltipItem, data) {
		        return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		    }
		}
	},
	legend: {
            labels: {
            	boxWidth: 0,
                fontColor: "white",
                fontSize: 0
            }
        },
    scales: {
        yAxes: [{
        	gridLines: {
			    color: "rgba(355,355,355,0)"
			},
            ticks: {
            	display: false,
                fontColor: "white",                    
			    callback: function(label, index, labels) {
        		return label/1000000+'m';
				}
			}
        }],
        xAxes: [{
        	gridLines: {
			    color: "rgba(355,355,355,0)"
			},
            ticks: {
                fontColor: 'rgba(355,355,355,1)',
                fontFamily: "FontAwesome",
                fontSize: "20"
            }
        }]
    }
}

class FollowerBarGraph extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: chartData()
    }
  }

  render() {
    return (
	    <div className='graphContainer'>
	        <div className='followerBarGraph'>
	           <Bar data={this.state.data}
	           options={options}
	           width="600" height="400"/>
	       </div>
	    </div>
    )
  }
}

export default FollowerBarGraph;