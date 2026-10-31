import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <div>
    <div className=''>
      <h3 style={
        {
          
          with: "120px"
        }
      }>
        hello world!
      </h3>
    </div>
    <h1>hello world</h1>
    <h2>hello world 2</h2>
    
  </div>
)
