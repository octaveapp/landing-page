import React from 'react'
import styled from 'styled-components'

import IphoneX from '../images/iphonex.png'
import Pattern from '../images/bg-pattern-2.png'
import CallToAction from './call-to-action'

const Root = styled.div`
  margin-bottom: 30rem;
  padding-bottom: 5rem;
  min-height: 50vh;
  background: #6cc566 url('${Pattern}')  no-repeat bottom left;
  background-size: 30%;
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
    font-size: 2.4rem;
    font-family: 'Josefin Slab', serif;
    font-weight: 600;
  }
  .iphonex-container {
    position: relative;
    .iphonex {
      position: absolute;
      right: -8.5rem;
    }
  }
`

export default () => (
  <Root className="grid-12">
    <div className="col-2" />
    <div className="col-5">
      <p className="big">
        Des repas sains et variés pour toute la famille, sans prise de tête
      </p>
      <p className="less-big">
        L'application mobile qui vous fait gagner un temps précieux dans votre
        cuisine et pour vos courses
      </p>
      <CallToAction green>Je m'inscris</CallToAction>
    </div>
    <div className="iphonex-container col-4">
      <img
        className="iphonex"
        src={IphoneX}
        alt="Application Octave dans l'Iphone"
      />
    </div>
    <div className="col-1" />
  </Root>
)
