import React from 'react'
import styled from 'styled-components'
import OctaveLogo from '../../images/octave-logo.png'

const Footer = styled.footer`
  background-color: #373f51;
  padding: 5rem 0 15rem 0;
  color: #fff;
  .links {
    text-align: right;
    line-height: 3 rem;
    a {
      text-decoration: none;
      color: #fff;
    }
  }
  .logo {
    width: 20rem;
  }
`

export default () => (
  <Footer className="grid-12">
    <div className="col-1" />
    <div className="col-4">
      <img
        style={{ marginBottom: '3rem' }}
        className="logo"
        src={OctaveLogo}
        alt="Octave logo"
      />
      <p style={{ marginBottom: '3rem' }}>
        © Octave 2018 - tous droits réservés
      </p>
      <p style={{ textAlign: 'justify' }}>
        Octave est une application mobile qui permet à ses utilisateurs de
        planifier simplement leurs repas et ceux de leurs familles parmi un
        large choix de recettes saines et goûteuses. Octave est un véritable
        assistant personnel qui aide également les utilisateurs à faire leurs
        courses facilement et en choisissant les produits les plus sains
        possibles.
      </p>
    </div>
    <div className="col-6 links">
      <a href="/">Accueil</a>
      <br />
      <a href="/team">L’équipe Octave</a>
      <br />
      <a href="signup">Inscription</a>
      <br />
      <a href="mailto:contact@octaveapp.fr">Contact</a>
      <br />
      <a href="confidentiality">Politique de confidentialité</a>
    </div>
    <div className="col-1" />
  </Footer>
)
