import React from 'react'
import styled from 'styled-components'

import video from '../images/bg-video-header.mp4'
import bgVideo from '../images/bg.webp'
import CallToAction from './call-to-action'

const Header = styled.header`
  overflow: hidden;
  position: relative;
  video {
    position: absolute;
    min-width: 100%;
    min-height: 100vh;
    z-index: 0;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .content {
    min-height: 100vh;
    position: relative;
    background-color: rgba(108, 197, 102, 0.4);
    .text {
      margin-top: 4rem;
      text-align: center;
      color: white;
      z-index: 1;
      h1 {
        margin: 0;
      }
      .big,
      .less-big {
        margin-bottom: 4rem;
      }
      p.big {
        font-size: 5rem;
      }
      p.less-big {
        font-size: 3rem;
      }
    }
  }
`
export default ({ siteTitle }) => (
  <Header>
    <video autoPlay muted loop poster={bgVideo} id="bgvid">
      <source src={video} type="video/mp4" />
    </video>
    <div className="content">
      <h1>{siteTitle}</h1>
      <div className="text grid-6">
        <div className="col-1" />
        <div className="col-4">
          <p className="big">
            Des repas sains et variés pour toute la famille, sans prise de tête
          </p>
          <p className="less-big">
            L'application mobile qui vous fait gagner un temps précieux dans
            votre cuisine et pour vos courses
          </p>
          <CallToAction green>J'essaie Octave</CallToAction>
        </div>
        <div className="col-1" />
      </div>
    </div>
  </Header>
)
