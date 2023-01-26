import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'  //this is a culprit for responsive . lets see 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
