// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import { Fragment } from 'react';
import User from './User.jsx';


const App = ()=>{

  return (
  <>
    <User Fname="Mohammad" Lname="Ghiyasvand" City="Tehran" Age={25} />
    <User Fname="Mhmd" Lname="Ghiyas" City="Teh" Age={24} />
    <User Fname="M" Lname="G" City="T" Age={20} />
    <User Fname="A" Lname="B" City="C" Age={28} />
  </>
  
  );
};
export default App
