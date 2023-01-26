import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'  //this is a culprit for responsive . lets see
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Login from './components/LogReg/Login';


const router = createBrowserRouter([
  {path:'/', element: <App></App>},
  {path:'login', element: <Login></Login>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
      <App />
  </React.StrictMode>,
)
