import './dist/main.css'

import { Hero } from './components/Hero/Hero'

function App() {
  return (
    <>
      <Hero heroType="video" source="/coverVideo.mp4" title="Title" subTitle="Sub Title" />
    </>
  )
}

export default App
