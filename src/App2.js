/* App.js */

// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// class App extends Component {
// 	render() {
// 		const options = {
// 			theme: "light2", // "light1", "light2", "dark1", "dark2"
// 			animationEnabled: true,
// 			exportEnabled: true,
// 			title:{
// 				text: "CandleStick"
// 			},
// 			axisX: {
// 				valueFormatString: "datetime"
// 			},
// 			axisY: {
// 				prefix: "$",
// 				title: "Price (in USD)"
// 			},
// 			data: [{
// 				type: "candlestick",
// 				showInLegend: true,
// 				name: "candlestick",
// 				yValueFormatString: "$###0.00",
// 				xValueFormatString: "MMMM YY",
// 				dataPoints: [
// 					getData()
// 				]
// 			}
// 		  ]
// 		}
// 		return (
// 		<div>
// 			<CanvasJSChart options = {options}
// 				onRef={ref => this.chart = ref}
// 			/>
// 			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
// 		</div>
// 		);
// 	}
// }
// export default App

// function App(){
//   const options = {
//     theme: "light2", // "light1", "light2", "dark1", "dark2"
//     animationEnabled: true,
//     exportEnabled: true,
//     title:{
//       text: "CandleStick"
//     },
//     axisX: {
//       valueFormatString: "MMM"
//     },
//     axisY: {
//       prefix: "$",
//       title: "Price (in USD)"
//     },
//     data: [{
//       type: "candlestick",
//       showInLegend: true,
//       name: "candlestick",
//       yValueFormatString: "$###0.00",
//       xValueFormatString: "MMMM YY",
//       dataPoints: [
//         data
//       ]
//     }
//     ]
//   }
//   const[data, setData] = useState([]);
//   useEffect(async ()=> setData(await getData()),[])

//   return(
//     <div>
// 			<CanvasJSChart options = {options}
// 				onRef={ref => this.chart = ref}
// 			/>
// 			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
// 		</div>
//   )
// }

// export default App;

// import React, { useState, useEffect, useMemo } from "react";
// import CanvasJSReact from './assets/canvasjs.react';
