
import './App.css'
import HomeBanner from './components/homeUi/HomeBanner'
import Navbar from './components/homeUi/Navbar'

function App() {

  return (
    <div className=''>
      <div className='bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400'>
        <Navbar></Navbar>
        <HomeBanner></HomeBanner>
      </div>
    </div>
  )
}

export default App
