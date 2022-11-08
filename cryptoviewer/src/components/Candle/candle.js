import React, { Component } from "react";
import CanvasJSReact from '../../assets/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {
	render() {
		const options = {
			theme: "dark1", // "light1", "light2", "dark1", "dark2"
			animationEnabled: true,
			exportEnabled: true,
			height: this.props.height,
			title:{
				text: this.props.title,
				horizontalAlign:"left",
			},
			axisX: {
				valueFormatString: "D/M",
				margin:20,
			},
			data: [{
				type: "candlestick",
				showInLegend: true,
				risingColor: 'green',
				color:'red',
				name: "",
				yValueFormatString: "$###0.00",
				dataPoints:this.props.dataPoints,
				indexLabelOrientation:"vertical",
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