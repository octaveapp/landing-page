import React from 'react'
import styled from 'styled-components'

import OctaveLogo from '../images/octave-logo.png'
import CallToAction from './call-to-action'

const Header = styled.header`
  background-color: #6cc566;
  padding: 2rem 0 2rem 0;
  .octave-logo-link {
    text-decoration: none;
    .octave-logo {
      width: 20rem;
    }
  }
  .subscribe-container {
    text-align: right;
  }
  h1 {
    margin: 0;
    text-align: left;
  }
`
export default ({ siteTitle, hideCallToAction = false }) => (
  <Header>
    <div className="content grid-12">
      <div className="col-1" />
      <div className="col-6">
        <h1>
          <a href="/" className="octave-logo-link">
            <img className="octave-logo" src={OctaveLogo} alt={siteTitle} />
          </a>
        </h1>
      </div>
      <div className="col-4 subscribe-container">
        {!hideCallToAction && <CallToAction green>Inscription</CallToAction>}
      </div>
      <div className="col-1" />
    </div>
  </Header>
)
