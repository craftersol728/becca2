// import React from 'react'
import { CoverVideo } from '../CoverVideo/CoverVideo'

interface Props {
  heroType: 'video' | 'image'
  source: string
  title?: string
  subTitle: string
  scroll: string
}

export const Hero = ({ heroType, source, title, subTitle }: Props) => {
  return (
    <section className="hero">
      <div className="cover">
        {heroType === 'video' ? <CoverVideo src={source} /> : <img src={source} alt="hero image" />}
      </div>

      <div className="content">
        <h1 className="title">{title}</h1>
        <p className="subtitle">{subTitle}</p>
        <h1 className="scrollDown">{subTitle}</h1>
      </div>
    </section>
  )
}
