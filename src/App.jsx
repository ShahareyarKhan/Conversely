import React, { useState } from 'react'
import Box from './components/Box'
import Header from './components/Header';
import './index.css'
const App = () => {
  const [mode, setmode]=useState("light");

  const handledarkmode=()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor="#000000";
      document.body.style.color="white";
    }
    else{
      setmode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
    }
  }
  return (
    <div>
      <Header mode={mode} handledarkmode={handledarkmode}/>
      <Box mode={mode} handledarkmode={handledarkmode}/>
    </div>
  )
}

export default App
