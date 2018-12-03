import React from 'react'
import styled from 'styled-components'

import IphoneX from '../../images/iphonex-mockup.png'
import Pattern from '../../images/bg-pattern-2.png'
import CallToAction from '../call-to-action'

const Root = styled.div`
  margin-bottom: 20rem;
  padding: 2rem 0;
  background: #6cc566 url('${Pattern}') no-repeat bottom left;
  background-size: 20%;
  text-align: center;
  color: white;
  z-index: 1;
  .big,
  .less-big {
    margin-bottom: 4rem;
  }
  p.big {
    font-size: 4.2rem;
  }
  p.less-big {
    font-size: 2.8rem;
    font-family: 'Josefin Slab', serif;
    font-weight: 600;
    margin-bottom: 6rem;
  }
  .main-button{
    margin-top: 6rem;
  }
  .iphonex-container {
    position: relative;
    .iphonex {
      position: absolute;
      right: -30rem;
      max-width: 70rem;
    }
  }
  @media screen and (max-width: 768px) {
    .iphonex-container {
      display: none;
    }
    margin-bottom: 0;
    background:#6cc566;
  }
`

export default () => (
  <Root>
    <div className="grid-12 container has-gutter">
      <div className="col-1" />
      <div className="col-6-small-10">
        <p className="big">
          Des repas sains et variés pour toute la famille, sans prise de tête
        </p>
        <p className="less-big">
          L'application mobile qui vous fait gagner un temps précieux dans votre
          cuisine et pour vos courses
        </p>
        <CallToAction className="green">Je m'inscris</CallToAction>
      </div>
      <div className="iphonex-container col-4">
        <img
          className="iphonex"
          src={IphoneX}
          alt="Application Octave dans l'Iphone"
        />
      </div>
      <div className="col-1" />
    </div>
  </Root>
)
