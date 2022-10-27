import axios from "axios";
import React, { useEffect, useState } from "react";
import View from "./components/Viewer";
import "./index.css";

function App() {

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/coins")
      .then((response) => setCoins(response.data));
  }, []);

  console.log(coins);

  return (
    <div>
      <div style={{height:"100vh"}}>
        <View></View>
      </div>
      {/* <div> 
        <p> {request} </p>
      </div> */}
    </div>
  )
}
export default App;