import React, { Component } from 'react'
import styled from 'styled-components'

import OctaveLogo from '../images/octave-logo.png'
import BurgerMenu from '../images/burger-menu.png'
import CallToAction from './call-to-action'
import Menu from './menu'

const Header = styled.header`
  background-color: #6cc566;
  padding: 2rem 0 2rem 0;
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
      .octave-logo-link {
        text-decoration: none;
      }
  
    .burger-menu {
      display: none;
      background-image: url('${BurgerMenu}');
      background-size: cover;
      width: 3.1rem;
      height: 2.6rem;
      content: ' ';
    }

    @media (max-width: 768px) {
      .subscribe-container {
        display: none;
      }
      .burger-menu {
        display: block;
      }
    }
  }
`
export default class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuShown: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState({ isMenuShown: !this.state.isMenuShown })
  }

  render() {
    return (
      <Header>
        <Menu shown={this.state.isMenuShown} onClose={this.toggleMenu} />
        <div className="container auto-grid">
          <div className="row col-12">
            <a href="#" className="octave-logo-link">
              <img
                className="octave-logo"
                src={OctaveLogo}
                alt={this.props.siteTitle}
              />
            </a>
            <div className="subscribe-container">
              {!this.props.hideCallToAction && (
                <CallToAction colorSheme="green">Inscription</CallToAction>
              )}
            </div>
            <div className="burger-menu" onClick={this.toggleMenu} />
          </div>
        </div>
      </Header>
    )
  }
}
