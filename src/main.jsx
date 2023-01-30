import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Login from './components/LogReg/Login';
import Registration from './components/LogReg/Registration';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import UserDashboard from './components/dashboard/userDashboard/UserDashboard';
import AdminDashboard from './components/dashboard/adminDashboard/AdminDashboard';
import AllUserInfo from './components/dashboard/adminDashboard/AllUserInfo';
import AllCourseInfo from './components/dashboard/adminDashboard/AllCourseInfo';
import AllMentorsInfo from './components/dashboard/adminDashboard/AllMentorsInfo';
import AllStats from './components/dashboard/adminDashboard/AllStats';
import PageNotFound from './components/homeUi/PageNotFound';
import UserContext from './contexts/UserContext';


const router = createBrowserRouter([
  { path: '/', element: <App></App> },
  { path: '/login', element: <Login></Login> },
  { path: '/registration', element: <Registration></Registration> },
  { path: '/udashboard', element: <UserDashboard></UserDashboard> },
  {
    path: '/adashboard', element: <AdminDashboard></AdminDashboard>, children: [
      { path: '/adashboard', element: <AllStats></AllStats> },
      { path: '/adashboard/userInfo', element: <AllUserInfo></AllUserInfo> },
      { path: '/adashboard/courseInfo', element: <AllCourseInfo></AllCourseInfo> },
      { path: '/adashboard/mentorsInfo', element: <AllMentorsInfo></AllMentorsInfo> }
    ]
  },
  { path: '*', element: <PageNotFound></PageNotFound> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <UserContext>
        <App />
      </UserContext>
    </RouterProvider>
  </React.StrictMode>,
)
