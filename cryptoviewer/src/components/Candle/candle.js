import React, { Component } from "react";
import CanvasJSReact from '../../assets/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {
	render() {
		const options = {
			theme: "light2", // "light1", "light2", "dark1", "dark2"
			animationEnabled: true,
			exportEnabled: true,
			title:{
				text: "Intel Corporation Stock Price -  2017"
			},
			axisX: {
				valueFormatString: "MMM"
			},
			axisY: {
				prefix: "$",
				title: "Price (in USD)"
			},
			data: [{
				type: "candlestick",
				showInLegend: true,
				name: "Intel Corporation",
				yValueFormatString: "$###0.00",
				xValueFormatString: "MMMM YY",
				dataPoints: [this.props.dataPoints]
			}
		  ]
		}
		const chartProps = {
			width: "100%",
			height: "100%"
		};

		return (
		<div>
			<CanvasJSChart 
       			options = {options}
				chartProps = {chartProps}
				onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default App