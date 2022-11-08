import React, { Component } from "react";
import CanvasJSReact from '../../assets/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {
	render() {
		const options = {
			theme: "dark1", // "light1", "light2", "dark1", "dark2"
			animationEnabled: true,
			exportEnabled: true,
			responsive: true,
			height: this.props.height,
			title:{
				text: this.props.title
			},
			axisX: {
				valueFormatString: "D/M"
			},
			axisY: {
				suffix: this.props.moedaComparadora,
				title: this.props.ytitle
			},
			data: [{
				type: "candlestick",
				showInLegend: true,
				risingColor: 'green',
				color:'red',
				name: this.props.name,
				yValueFormatString: "$###0.00",
				dataPoints:this.props.dataPoints
			}
		  ]
		}
		return (
		<div>
			<CanvasJSChart options = {options}/>
		</div>
		);
	}
}
export default App