
// import { Route, Routes } from 'react-router-dom'
import './App.css'
import CardInBanner from './components/homeUi/CardInBanner'
import CoursePackage from './components/homeUi/CoursePackage'
import DreamPart from './components/homeUi/DreamPart'
import FeaturedCourse from './components/homeUi/FeaturedCourse'
import Footer from './components/homeUi/Footer'
import HomeBanner from './components/homeUi/HomeBanner'
import Navbar from './components/homeUi/Navbar'
import Login from './components/LogReg/Login'




function App() {

  return (
    <div>
      <div className='bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400'>
        <Navbar></Navbar>
        <HomeBanner></HomeBanner>
      </div>
      <CardInBanner></CardInBanner>
      <FeaturedCourse></FeaturedCourse>
      <DreamPart></DreamPart>
      <CoursePackage></CoursePackage>
      <Footer></Footer>
      {/* <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes> */}
    </div>
  )
}

export default App
