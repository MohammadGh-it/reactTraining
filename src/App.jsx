// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import { Fragment } from 'react';
import User from './User.jsx';
import { useState } from 'react';

  const initialUsers = [
  {Fname:"Mohammad" , Lname:"Ghiyasvand" , City:"Tehran" , Age:25},
  {Fname:"Mhmd" , Lname:"Gh" , City:"T" , Age:24},
  {Fname:"A" , Lname:"A" , City:"A" , Age:22},
  {Fname:"B" , Lname:"B" , City:"B" , Age:21},
];

const App = ()=>{
  const [users , setUsers] = useState(initialUsers);
  const myBotton = (name) => {
    const newUsers = users.filter((myuser) => myuser.Fname !== name);
    setUsers(newUsers);
  };

  return (
  <>
    {users.map((myuser)=>(
      <User key={myuser.Fname} {...myuser} myBotton = {() => myBotton(myuser.Fname)} />
    ))};
  </>
  
  );
};
export default App
