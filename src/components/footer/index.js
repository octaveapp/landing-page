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
    a:hover {
      text-decoration: underline;
    }
  }
  .logo-container {
    img {
      width: 20rem;
    }
    margin-bottom: 3rem;
  }
  .rights {
    font-size: 1.4rem;
    margin-bottom: 3rem;
  }
  .description {
    text-align: justify;
  }
  @media screen and (max-width: 768px) {
    .links,
    .logo-container,
    .rights {
      text-align: center;
    }
    .links {
      margin-top: 5rem;
    }
  }
`

export default () => (
  <Footer>
    <div className="grid-12 has-gutter container">
      <div className="col-1 hide-large" />
      <div className="col-6-small-10">
        <div className="logo-container">
          <img src={OctaveLogo} alt="Octave logo" />
        </div>
        <p className="rights">© Octave 2018 - tous droits réservés</p>
        <p className="description">
          Octave est une application mobile qui permet à ses utilisateurs de
          planifier simplement leurs repas et ceux de leurs familles parmi un
          large choix de recettes saines et goûteuses. Octave est un véritable
          assistant personnel qui aide également les utilisateurs à faire leurs
          courses facilement et en choisissant les produits les plus sains
          possibles.
        </p>
      </div>
      <div className="col-6-small-all links">
        <a href="/">Accueil</a>
        <br />
        <a href="team">L’équipe</a>
        <br />
        <a href="signup">Inscription</a>
        <br />
        <a href="mailto:contact@octaveapp.fr">Contact</a>
        <br />
        <a href="confidentiality">Politique de confidentialité</a>
      </div>
    </div>
  </Footer>
)
