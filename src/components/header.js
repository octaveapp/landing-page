import React from 'react'
import styled from 'styled-components'

import OctaveLogo from '../images/octave-logo.png'
import IphoneX from '../images/iphonex.png'
import CallToAction from './call-to-action'

const Header = styled.header`
  background-color: #6cc566;
  padding: 2rem 0 5rem 0;
  margin-bottom: 30rem;
  .octave-logo {
    width: 20rem;
  }
  .subscribe-container {
    text-align: right;
  }
  h1 {
    margin: 0;
    padding-top: 1rem;
    text-align: left;
  }
  .text {
    margin: 5rem 0 4rem 0;
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
  }
`
export default ({ siteTitle }) => (
  <Header>
    <div className="content grid-12">
      <div className="col-1" />
      <div className="col-6">
        <h1>
          <img className="octave-logo" src={OctaveLogo} alt={siteTitle} />
        </h1>
      </div>
      <div className="col-4 subscribe-container">
        <CallToAction green>Inscription</CallToAction>
      </div>
      <div className="col-1" />
    </div>
    <div className="text grid-12">
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
    </div>
  </Header>
)
