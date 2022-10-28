import axios from "axios";
import React, { useEffect, useState } from "react";
import View from "./components/Viewer";
import "./index.css";
import CandleChart from "../src/components/Candle/candle"

const options = {   
    headers: {"X-CoinAPI-Key":"24752BF3-7474-461B-A409-C1B9E64B93C8"}
}
async function getData(){
  // Banco de informações
  var candleData = [];
  // Axios
  const dados = await axios.get("https://rest.coinapi.io/v1/exchangerate/BTC/USD/history?period_id=1DAY&time_start=2021-01-01T00:00:00&time_end=2022-01-01T00:00:00", options)
  // Separação das Rates:
  for (let dado in dados.data){
      let info = dados.data[dado]
      let timeDate = info.time_period_end.split("T")[0]
      let rateOpen = info.rate_open
      let rateHigh = info.rate_high
      let rateLow = info.rate_low
      let rateClose = info.rate_close
      candleData.push({'x': new Date(timeDate) , 'y':[rateOpen, rateHigh, rateLow, rateClose]})
  }
  console.log(candleData)
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

  useEffect(()=>setchartData(getData()),[])
  return (
    // <div>
    //   <div style={{height:"100vh"}}>
    //     <View></View>
    //   </div>
    //   {/* <div> 
    //     <p> {request} </p>
    //   </div> */}
    // </div>
    <div style={{height:"100vh"}}>
      <CandleChart dataPoints={chartData}/>
    </div>
  )
}
export default App;