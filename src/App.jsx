// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import { Fragment } from 'react';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';

const App = ()=>{

  return (
  <>

    <p>hello my friend</p>
    <h1>this is test for my app component</h1>

    <FunctionComponent/>
    <ClassComponent/>

  </>
  
  );
};
export default App
