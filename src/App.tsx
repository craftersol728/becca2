import './dist/main.css'

import { Hero } from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'

import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Hero heroType="video" source="/coverVideo.mp4" title="Title" subTitle="Sub Title" />
      </Router>
    </>
  )
}

export default App
