import Candle from "../Candle/candle";
import "./index.css";

export default function View() {
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
      <div className="item2"></div>
      <div className="item3">Texto3</div>
      <div className="item4">Texto4</div>
    </div>
  );
}