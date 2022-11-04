import React, { useEffect, useState } from "react";
import "./index.css";
// import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import axios from "axios";

export default function View(props) {

  const [allCoins, setAllCoins] = useState("");
  const [base, setBase] = useState("");
  const [quote, setQuote] = useState("");

  // useEffect(() => {   
  //   axios
  //   .get("http://localhost:8000/all/possible/coins")
  //   .then((response) => {

  //     let aux = [];
  //     for (let dado in response.data) {
  //       aux.push(response.data[dado].assetId);
  //   }
  //   setAllCoins(aux)
  //   });
  // }, []);

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
      <div className="item2"></div>
      <div className="item3">Texto3</div>
      <div className="item4">Texto4</div>
    </div>
  );
}