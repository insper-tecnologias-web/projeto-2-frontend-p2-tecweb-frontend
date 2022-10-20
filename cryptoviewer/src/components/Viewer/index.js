import React from "react";
import "./index.css";

export default function View() {
  return (
    <div class="main">
      <header>
        <p class="element-margin">Trending</p>
        <input class="element-margin"></input>
      </header>
      <main>
        <div class="valorizacao row">
          <p>Nome</p>
          <p>Valorização 24H</p>
          <p>Gráfico</p>
        </div>
        <div class="graph row">
          <p>o</p>
        </div>
        <div class="tradeinfo row">
          <p>API Twitter</p>
          <p>Gráfico</p>
        </div>
      </main>
    </div>
  );
}