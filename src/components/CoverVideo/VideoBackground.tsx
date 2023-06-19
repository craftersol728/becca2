import React from 'react'

type BaseProps = {
  src: string
}

type HTMLVideoProps = BaseProps & React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>

export const CoverVideo = ({ src, ...props }: HTMLVideoProps) => {
  return (
    <div className="video-background">
      <video autoPlay muted loop className="video" {...props}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
