import './dist/main.css'

import { Hero } from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'


import { BrowserRouter as Router } from 'react-router-dom';


import { GlobalScrollbar } from 'mac-scrollbar';
import AboutMe from './components/AboutMe/aboutMe';

function App() {
  return (
    <div>
      <GlobalScrollbar />
      <Router>
        <NavBar />
        <Hero heroType="video" source="/coverVideo.mp4" title="Becca" subTitle="Becca" scroll="Scroll down"/>
        <AboutMe />

      </Router>
    </div>
  )
}

export default App
