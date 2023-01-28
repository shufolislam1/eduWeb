
import './App.css'
import CardInBanner from './components/homeUi/CardInBanner'
import CoursePackage from './components/homeUi/CoursePackage'
import DreamPart from './components/homeUi/DreamPart'
import FeaturedCourse from './components/homeUi/FeaturedCourse'
import Footer from './components/homeUi/Footer'
import HomeBanner from './components/homeUi/HomeBanner'
import Navbar from './components/homeUi/Navbar'
import Support from './components/homeUi/Support'




function App() {

  return (
    <div>
      <Navbar></Navbar>
      <HomeBanner></HomeBanner>
      <CardInBanner></CardInBanner>
      <FeaturedCourse></FeaturedCourse>
      <DreamPart></DreamPart>
      <CoursePackage></CoursePackage>
      <Support></Support>
      <Footer></Footer>
    </div>
  )
}

export default App
