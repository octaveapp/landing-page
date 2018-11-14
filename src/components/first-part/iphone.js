import React from 'react'
import styled from 'styled-components'
import Iphone from '../../images/iphonex-mockup.png'

const Root = styled.div`
  position: relative;
  img {
    position: absolute;
  }
  .mockup {
    max-width: 22rem;
    z-index: 2;
  }
  .screen {
    z-index: 1;
    max-width: 20.15rem;
    top: 1.4rem;
    left: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    img {
      display: none;
    }
  }
`

export default ({ videoName }) => (
  <Root>
    <img className="mockup" src={Iphone} alt="IphoneX" />
  </Root>
)
