<<<<<<< Updated upstream
import Candle from "../Candle/candle";
=======
<<<<<<< Updated upstream
import React from "react";
=======
import CandleChart from "../Candle/candle";
>>>>>>> Stashed changes
>>>>>>> Stashed changes
import "./index.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const options = {   
  headers: {"X-CoinAPI-Key":"43725491-667F-4F7F-A073-734061BA32CF"}
}
async function getData(base, quote, perio){
// Banco de informações
let candleData = [];
// Axios
const dados = await axios.get("https://rest.coinapi.io/v1/exchangerate/BTC/USD/history?period_id=1DAY&time_start=2016-01-01T00:00:00&time_end=2018-12-01T00:00:00", options)
console.log(dados)
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

const graph = document.getElementById("grafico")
let size = 456;
if (graph != null){
  size = graph.offsetHeight
}

export default function View() {

  const [chartData, setchartData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/timeSeries/ETH/USD/1DAY/2016-01-01T00:00:00/2017-12-01T00:00:00")
      .then((response) => {
        let candleData = [];
        for (let dado in response.data){
          let info = response.data[dado]
          let timeDate = info.time_period_end.split("T")[0].split("-")
          let rateOpen = info.rate_open
          let rateHigh = info.rate_high
          let rateLow = info.rate_low
          let rateClose = info.rate_close
          candleData.push({x: new Date(timeDate[0],timeDate[1], timeDate[2]), y:[rateOpen, rateHigh, rateLow, rateClose]})
        }
        setchartData(candleData)
      });
  }, []);

  return (
    <div className="grid-container">
      <div className="header">
        <p className="text-principal">Trending</p>
      </div>
      <div className="item1">
        <div className="row">
        <p className="text-principal">BTC/ETH</p>
        <p className="text-principal">2.3456</p>
        <p className="text-principal">+ 3.45%</p>
        </div>
      </div>
      <div className="item2" id="grafico">
        <CandleChart className="item2" dataPoints={chartData} ytitle={"ETH/USD"} title={"CandleChart"} name={"Flutuação"} moedaComparadora={" USD"} height={size}/>
      </div>
      <div className="item3">Texto3</div>
      <div className="item4">Texto4</div>
    </div>
  );
}