import React,{useState,useMemo} from 'react';
import Counter from "./components/Counter";
import style from "./app.module.css";
import Header from "./components/Header";


function App() {
  const [data ,setData] = useState({
    one : 25  , two :  15  , three : 5
  })
  const Data = useMemo(() => {return(data)},[data])
  const handleCallBack = (data) => {
    setData(data)
  }
  return ( 
    <div className={style.app}>
      <Header parentCallBack = {handleCallBack} />
      <Counter set = {data}/>
    </div>
  )
}


export default App;