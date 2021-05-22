import React from 'react';
import Counter from "./components/Counter";
import style from "./app.module.css";
import Header from "./components/Header.js";


function App() {
  return ( 
    <div className={style.app}>
      <Header />
      <Counter />
    </div>
  )
}


export default App;