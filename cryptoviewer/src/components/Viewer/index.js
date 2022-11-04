import React, { useEffect, useState } from "react";
import CandleChart from "../Candle/candle";
import "../Viewer/index.css";
import axios from 'axios';
// import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const graph = document.getElementById("grafico")
let size = 456;
if (graph != null){
  size = graph.offsetHeight
}

export default function View(props) {

  const [chartData, setchartData] = useState([]);
  const [allCoins, setAllCoins] = useState("");
  const [base, setBase] = useState("");
  const [quote, setQuote] = useState("");

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

  useEffect(() => {   
    axios
    .get("http://localhost:8000/all/possible/coins")
    .then((response) => {

      let aux = [];
      for (let dado in response.data) {
        aux.push(response.data[dado].assetId);
    }
    setAllCoins(aux)
    });
  }, []);

  const setBaseQuote = (event) =>{
    event.preventDefault();
    axios
    .post("http://localhost:8000/add/coin/", {base: base, quote: quote})
    .then((response) => {
      console.log(response)
      setBase("");
      setQuote("");
      props.atualiza();
    })
  }

  const baseChanged = (event) => {
    setBase(event.target.value);
  }

  const quoteChanged = (event) => {
    setQuote(event.target.value);
  }

  return (
    <div className="grid-container">
      <div className="header">
        <p className="text-principal">Trending</p>
        <form class = "form" onSubmit={setBaseQuote}> 
          <input 
            className=""
            type="text" 
            name="base"
            placeholder="Type base coin ..."
            onChange={baseChanged}
            value={base}
          />
          <input 
            className=""    
            type="text" 
            name="quote"
            placeholder="Type quote coin ..."
            onChange={quoteChanged}
            value={quote}
          />
          <button className="btn" type="submit">Search</button>
        </form>
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