import React from 'react'
import styled from 'styled-components'

import CallToAction from './call-to-action'
import OctaveLogo from '../images/octave-logo.png'
import CloseIcon from '../images/close-icon.png'

const Popover = styled.div`
  display: ${props => (props.shown ? 'block' : 'none')};
  background-color: #008dd5;
  padding: 7rem 1rem;
  z-index: 10;
  position: fixed;
  overflow: hidden;
  text-align: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .octave-logo {
    margin: 0 auto 5rem auto;
  }
  a {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: white;
    text-decoration: none;
    font-family: 'Josefin Slab', serif;
  }
  .container {
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  .close-btn {
    width: 6rem;
  }
`
export default ({ onClose, shown }) => (
  <Popover shown={shown}>
    <img className="octave-logo" src={OctaveLogo} alt="logo" />
    <nav className="container">
      <a href="/">Accueil</a>
      <a href="/team">L'équipe</a>
      <a href="/confidentiality">Politique de confidentialité</a>
      <CallToAction colorSheme="white">Inscription</CallToAction>
    </nav>
    <img className="close-btn" onClick={onClose} src={CloseIcon} alt="close" />
  </Popover>
)
