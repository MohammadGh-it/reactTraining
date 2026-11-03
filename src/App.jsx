// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'
import { useState } from "react";
import ChildComponent from "./ChildComponent";


const App = ()=>{
  const [text , setText] = useState("Hello Worlddddddddddddddddddddd");
  const changeText = () => {
    setText("Hello World!");
  }
  return (
    <div>
      <button onClick={changeText} >click me</button>
      <span>{text}</span>
      <p>az einka be payin childe</p>
      <ChildComponent text={"text"} >
        <p>man childrenam</p>
        <p>man childrenam</p>
        <p>man childrenam</p>
        <p>man childrenam</p>
      </ChildComponent>
      
    </div>
  );
};
export default App
