import './dist/main.css'
import 'locomotive-scroll/dist/locomotive-scroll.css'

import { Hero } from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'

import { BrowserRouter as Router } from 'react-router-dom'
import Summary from './components/Summary/Summary'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from 'react'

function App() {
  const containerRef = useRef<any>(null)

  return (
    <>
      <Router>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <main data-scroll-container ref={containerRef}>
            <NavBar />
            <Hero heroType="video" source="/coverVideo.mp4" title="Title" subTitle="Sub Title" />
            <Summary />
            <Summary />
            <Summary />
            <Summary />
            <Summary />
            <Summary />
          </main>
        </LocomotiveScrollProvider>
      </Router>
    </>
  )
}

export default App
