// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import { Fragment } from 'react';
import User from './User.jsx';




const App = ()=>{
  const users = [
  {Fname:"Mohammad" , Lname:"Ghiyasvand" , City:"Tehran" , Age:25},
  {Fname:"Mohammad" , Lname:"Ghiyasvand" , City:"Tehran" , Age:25},
  {Fname:"Mohammad" , Lname:"Ghiyasvand" , City:"Tehran" , Age:25},
  {Fname:"Mohammad" , Lname:"Ghiyasvand" , City:"Tehran" , Age:25},
];

  return (
  <>
    {users.map((myuser)=>(
      <User key={myuser.name} Fname={myuser.Fname} Lname={myuser.Lname} City={myuser.City} Age={myuser.Age}/>
    ))}
  </>
  
  );
};
export default App
