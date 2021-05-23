import React,{useState,useMemo} from 'react';
import Counter from "./components/Counter";
import style from "./app.module.css";
import Header from "./components/Header";


function App() {
  const [data ,setData] = useState({
    one : 25  , two :  15  , three : 5
  })
  const [back, setBack] = useState("pomo")
  
  const handle = (data) => {
    setBack(data)
  }
  const handleCallBack = (data) => {
    setData(data)
  }
  var Style = null;
  if(back === "pomo") {
    Style = {backgroundColor : "#db524d"};
  }else if (back === "short") {
    Style = {backgroundColor : "#468e91"}
  }else if (back === "long") {
    Style = {backgroundColor : "#437ea8"}
  }
  return ( 
    <div style={Style} className={style.app}>
      <Header parentCallBack = {handleCallBack} />
      <Counter set = {data} call = {handle}/>
    </div>
  )
}


export default App;