import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'  //this is a culprit for responsive . lets see
import Login from './components/LogReg/Login';
import Registration from './components/LogReg/Registration';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import UserDashboard from './components/dashboard/userDashboard/UserDashboard';
import AdminDashboard from './components/dashboard/adminDashboard/AdminDashboard';


const router = createBrowserRouter([
  {path:'/', element: <App></App>},
  {path:'login', element: <Login></Login>},
  {path:'registration', element: <Registration></Registration>},
  {path: 'udashboard', element: <UserDashboard></UserDashboard>},
  {path: 'adashboard', element: <AdminDashboard></AdminDashboard>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
