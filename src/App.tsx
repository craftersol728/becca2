import './dist/main.css'

import { Hero } from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'

import { BrowserRouter as Router } from 'react-router-dom';
import Summary from './components/Summary/Summary';

function App() {
  return (
    <div className="scrollbar"> 
      <Router>
        <NavBar />
        <Hero heroType="video" source="/coverVideo.mp4" title="Title" subTitle="Sub Title" />
        <Summary />
        <Summary />
        <Summary />
        <Summary />
        <Summary />
        <Summary />
      </Router>
    </div>
  )
}

export default App
