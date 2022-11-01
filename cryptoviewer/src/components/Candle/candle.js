import React, { Component } from "react";
import CanvasJSReact from '../../assets/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {
	render() {
		const options = {
			theme: "dark1", // "light1", "light2", "dark1", "dark2"
			animationEnabled: true,
			exportEnabled: true,
			title:{
				text: "Intel Corporation Stock Price -  2017"
			},
			axisX: {
				valueFormatString: "D/M"
			},
			axisY: {
				prefix: "$",
				title: "Price (in USD)"
			},
			data: [{
				type: "candlestick",
				showInLegend: true,
				risingColor: 'green',
				color:'red',
				name: "Intel Corporation",
				yValueFormatString: "$###0.00",
				dataPoints:this.props.dataPoints
			}
		  ]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				onRef={ref => this.chart = ref}
			/>
		</div>
		);
	}
}
export default App