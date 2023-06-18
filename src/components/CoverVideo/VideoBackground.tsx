import React from 'react'
import '../../styles/components/_video-background.scss'

const VideoBackground: React.FC = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop className="video">
        <source src="public\coverVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoBackground
