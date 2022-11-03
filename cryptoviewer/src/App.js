import axios from "axios";
import React, { useEffect, useState } from "react";
import View from "./components/Viewer";
import "./index.css";

function App() {

  // const [allCoins, setData] = React.useState(null);

  // React.useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/all/possible/coins")
  //     .then((response) => setCoins(response.allCoins));
  // }, []);

  // console.log(coins);

  return (
    <div>
      <div style={{height:"100vh"}}>
        <View></View>
      </div>
    </div>
  )
}
export default App;