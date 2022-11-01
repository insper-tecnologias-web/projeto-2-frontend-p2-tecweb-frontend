import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.css";
import CandleChart from "../src/components/Candle/candle"

const options = {   
    headers: {"X-CoinAPI-Key":"43725491-667F-4F7F-A073-734061BA32CF"}
}
async function getData(){
  // Banco de informações
  let candleData = [];
  // Axios
  const dados = await axios.get("https://rest.coinapi.io/v1/exchangerate/ETH/USD/history?period_id=1DAY&time_start=2021-01-01T23:00:00&time_end=2021-06-06T23:00:00", options)
  // Separação das Rates:
  for (let dado in dados.data){
      let info = dados.data[dado]
      let timeDate = info.time_period_end.split("T")[0].split("-")
      let rateOpen = info.rate_open
      let rateHigh = info.rate_high
      let rateLow = info.rate_low
      let rateClose = info.rate_close
      candleData.push({x: new Date(timeDate[0],timeDate[1], timeDate[2]), y:[rateOpen, rateHigh, rateLow, rateClose]})
  }
  return candleData
}

function App() {

  const [chartData, setchartData] = useState([]);
  // const [coins, setCoins] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/coins")
  //     .then((response) => setCoins(response.data));
  // }, []);

  useEffect(()=>{
    getData().then((responde)=>{
      setchartData(responde)
      console.log(responde)
    })
    // setchartData([{ x: new Date("2017-01-01"), y: [36.61, 38.45, 36.19, 36.82] },
    // { x: new Date("2017-02-01"), y: [36.82, 36.95, 34.84, 36.20] },
    // { x: new Date("2017-03-01"), y: [35.85, 36.30, 34.66, 36.07] },
    // { x: new Date("2017-04-01"), y: [36.19, 37.50, 35.21, 36.15] },
    // { x: new Date("2017-05-01"), y: [36.11, 37.17, 35.02, 36.11] },
    // { x: new Date("2017-06-01"), y: [36.12, 36.57, 33.34, 33.74] },
    // { x: new Date("2017-07-01"), y: [33.51, 35.86, 33.23, 35.47] },
    // { x: new Date("2017-08-01"), y: [35.66, 36.70, 34.38, 35.07] },
    // { x: new Date("2017-09-01"), y: [35.24, 38.15, 34.93, 38.08] },
    // { x: new Date("2017-10-01"), y: [38.12, 45.80, 38.08, 45.49] },
    // { x: new Date("2017-11-01"), y: [45.97, 47.30, 43.77, 44.84] },
    // { x: new Date("2017-12-01"), y: [44.73, 47.64, 42.67, 46.16] }])
  },[])
  return (
    <div style={{height:"100vh"}}>
      <CandleChart dataPoints={chartData}/>
    </div>
  )
}
export default App;