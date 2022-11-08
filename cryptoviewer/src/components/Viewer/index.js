import React, { useEffect, useState } from "react";
import CandleChart from "../Candle/candle";
import "../Viewer/index.css";
import axios from 'axios';
import logo from "../Viewer/Bitcoin-icon.png"

const host = "http://localhost:8000/";

// function getExchangerate(coin, quote){
//   axios
//     .get(`${host}exchangerate/${coin}/${quote}`)
//     .then((response)=>{
//       return response.rate
//     });
// }

// async function appreciation(coin, quote){
//   const dados = await axios(`${host}symbols/${coin}/${quote}`)
//   dailyVol = dados.volume_1day
//   actualPrice = dados.price
//   return dailyVol, actualPrice
// }

// async function exchange(coin, quote){
//   const {rate} = await axios(`${host}exchangerate/${coin}/${quote}`)
//   return rate
// }

// async function loadGraph(coin, quote){
//   const {data} =  await axios(`${host}timeSeries/${selectedCoin}/${selectedQuote}/1DAY/2016-01-01T00:00:00/2017-12-01T00:00:00`)
//   let candleData = [];
//   for (let dado in response.data){
//     let info = response.data[dado]
//     let timeDate = info.time_period_end.split("T")[0].split("-")
//     let rateOpen = info.rate_open
//     let rateHigh = info.rate_high
//     let rateLow = info.rate_low
//     let rateClose = info.rate_close
//     candleData.push({x: new Date(timeDate[0],timeDate[1], timeDate[2]), y:[rateOpen, rateHigh, rateLow, rateClose]})
//   }
//   return candleData

// async function askBid(coin, quote){
//   const dados = await axios(`${host}`)
// }

// // Essa função têm como Objetivo Carregar todos os dados referentes a coin/quote selecionadas
// async function loadElements(){
//   // 1° Load de Informações básicas
//   exchangeRate = await exchange(coin, quote)

//   // 2° Load de CandleStick Chart
//   candleData = await loadGraph(coin, quote)

//   // 3° Load de Informações Avançadas (Appreciation & (Ask price, Bid Price))
//   console.log(candleData.slice(-1))
//   actualPrice = candleData.slice(-1)
//   //
// }

export default function View(props) {

  const [chartData, setchartData] = useState([]);
  const [selectedCoin, setSC] = useState("Base");
  const [selectedQuote, setSQ] = useState("Quote");
  const [price, setPrice] = useState(0.00);
  const [valorizao, setValorizacao] = useState(0.00);
  const [allCoins, setAllCoins] = useState("");
  const [base, setBase] = useState("");
  const [quote, setQuote] = useState("");
<<<<<<< HEAD
  const [graphHeight, setGraphHeight] = useState(0.00);

=======
  const [baseImg, setBaseImg] = useState("");
  const [quoteImg, setQuoteImg] = useState("");

  // console.log(getExchangerate(selectedCoin, selectedQuote))
  // console.log(price)
>>>>>>> 493bd2a34465b231ef45a20ce9fd5677b1120a6a
  useEffect(() => {
    let fechamento = 0;
    let valorizacao = 0;
    axios
      .get(`${host}timeSeries/${selectedCoin}/${selectedQuote}/1DAY/2016-01-01T00:00:00/2017-12-01T00:00:00`)
      .then((response) => {
        let candleData = [];
        for (let dado in response.data){
          let info = response.data[dado]
          let timeDate = info.time_period_end.split("T")[0].split("-")
          let rateOpen = info.rate_open
          let rateHigh = info.rate_high
          let rateLow = info.rate_low
          let rateClose = info.rate_close
          fechamento = rateClose
          valorizacao = ((rateClose/rateOpen)-1)*100
          candleData.push({x: new Date(timeDate[0],timeDate[1], timeDate[2]), y:[rateOpen, rateHigh, rateLow, rateClose]})
        }
        setPrice(fechamento)
        setchartData(candleData)
        setValorizacao(valorizacao)
      });
  }, []);

  useEffect(() => {
    const graph = document.getElementById("grafico")
    setGraphHeight(graph.offsetHeight)
  }, []);

  useEffect(() => {   
    axios
    .get(`${host}all/possible/coins`)
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
    .post(`${host}add/coin/`, {base: base, quote: quote})
    .then((response) => {
      // console.log(response)
      setSC(base);
      setSQ(quote);
      setBase("");
      setQuote("");
      // props.atualiza();
    });

    axios
    .get(`${host}getImgUrl/${base}/`)
    .then((response) => {
      setBaseImg(JSON.stringify(response.data.url).replaceAll('"', ''));
    });

    axios
    .get(`${host}/getImgUrl/${quote}/`)
    .then((response) => {
      setQuoteImg(JSON.stringify(response.data.url));
    });
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
        <div className="row">
          <img src={logo} className="logo"></img>
          <p className="text-name">CryptoViewer</p>
        </div>
        <form className= "form-container" onSubmit={setBaseQuote}> 
          <input 
            className="input-base"
            type="text" 
            name="base"
            placeholder="Base coin"
            onChange={baseChanged}
            value={base}
          />
          <input 
            className="input-quote"    
            type="text" 
            name="quote"
            placeholder="Quote coin"
            onChange={quoteChanged}
            value={quote}
          />
          <button className="input-search" type="submit">Search</button>
        </form>
      </div>
      <div className="item1">
<<<<<<< HEAD
        <div className="row basic-info-container">
          <p className="text-principal basic-info">{selectedCoin} {selectedQuote}</p>
          <p className="text-principal basic-info">{price.toFixed(2)}</p>
          <p className="text-principal basic-info">{valorizao.toFixed(2)}%</p>
=======
        <div className="row">
          <div>
            <img className="img" src={baseImg} alt="baseImg" height="50"/>
          </div>
          <p className="text-principal">{selectedCoin} {selectedQuote}</p>
          <p className="text-principal">{price.toFixed(2)}</p>
          <p className="text-principal">{valorizao.toFixed(2)}%</p>
>>>>>>> 493bd2a34465b231ef45a20ce9fd5677b1120a6a
        </div>
      </div>
      <div className="item2" id="grafico">
        <CandleChart className="item2" dataPoints={chartData} ytitle={""} title={selectedCoin+"/"+selectedQuote} name={"Flutuação"} moedaComparadora={selectedQuote} height={graphHeight}/>
      </div>
      <div className="item3">Texto3</div>
    </div>
  );
}