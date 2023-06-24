import './dist/main.css'

import { Hero } from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'

import { BrowserRouter as Router } from 'react-router-dom';
import Summary from './components/Summary/Summary';



function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Hero heroType="video" source="/coverVideo.mp4" title="Title" subTitle="Sub Title" />
        <Summary />
      </Router>
    </>
  )
}

export default App
