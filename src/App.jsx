
import './App.css'
import CardInBanner from './components/homeUi/CardInBanner'
import CoursePackage from './components/homeUi/CoursePackage'
import DreamPart from './components/homeUi/DreamPart'
import FeaturedCourse from './components/homeUi/FeaturedCourse'
import Footer from './components/homeUi/Footer'
import HomeBanner from './components/homeUi/HomeBanner'
import Navbar from './components/homeUi/Navbar'




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
    </div>
  )
}

export default App
