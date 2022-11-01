import React, { Component } from "react";
import CanvasJSReact from '../../assets/canvasjs.react';
<<<<<<< Updated upstream

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

=======
import "../Viewer/index.css"

var CanvasJSChart = CanvasJSReact.CanvasJSChart;



>>>>>>> Stashed changes
class App extends Component {
	render() {
		const options = {
			theme: "dark1", // "light1", "light2", "dark1", "dark2"
			animationEnabled: true,
			exportEnabled: true,
<<<<<<< Updated upstream
			title:{
				text: "Intel Corporation Stock Price -  2017"
=======
			responsive: true,
			height: this.props.height,
			title:{
				text: this.props.title
>>>>>>> Stashed changes
			},
			axisX: {
				valueFormatString: "D/M"
			},
			axisY: {
<<<<<<< Updated upstream
				prefix: "$",
				title: "Price (in USD)"
=======
				suffix: this.props.moedaComparadora,
				title: this.props.ytitle
>>>>>>> Stashed changes
			},
			data: [{
				type: "candlestick",
				showInLegend: true,
				risingColor: 'green',
				color:'red',
<<<<<<< Updated upstream
				name: "Intel Corporation",
=======
				name: this.props.name,
>>>>>>> Stashed changes
				yValueFormatString: "$###0.00",
				dataPoints:this.props.dataPoints
			}
		  ]
		}
		return (
		<div>
<<<<<<< Updated upstream
			<CanvasJSChart options = {options}
				onRef={ref => this.chart = ref}
			/>
=======
			<CanvasJSChart options = {options}/>
>>>>>>> Stashed changes
		</div>
		);
	}
}
export default App