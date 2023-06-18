import React from 'react'


const VideoBackground: React.FC = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop className="video">
        <source src="\coverVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content">
        <h1 className="title">Your Title</h1>
        <p className="subtitle">Your Subtitle</p>
      </div>

    </div>
  )
}

export default VideoBackground
