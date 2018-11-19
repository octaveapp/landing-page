import React from 'react'
import styled from 'styled-components'

import OctaveLogo from '../images/octave-logo.png'
import CallToAction from './call-to-action'

const Header = styled.header`
  background-color: #6cc566;
  padding: 2rem 0 2rem 0;
  .row {
    display: flex;
    justify-content: space-between;
    h1 {
      margin: 0;
      text-align: left;
      .octave-logo-link {
        text-decoration: none;
        .octave-logo {
          width: 20rem;
        }
      }
    }
    .subscribe-container {
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`
export default ({ siteTitle, hideCallToAction = false }) => (
  <Header>
    <div className="container-fluid auto-grid">
      <div className="row col-12">
        <h1>
          <a href="/" className="octave-logo-link">
            <img className="octave-logo" src={OctaveLogo} alt={siteTitle} />
          </a>
        </h1>
        <div className="subscribe-container">
          {!hideCallToAction && (
            <CallToAction colorSheme="green">Inscription</CallToAction>
          )}
        </div>
      </div>
    </div>
  </Header>
)
