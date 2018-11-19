import React from 'react'
import Section from '../section'

import ImageTitleItem from './image-title-item'
import Paragraph from '../commons/paragraph'
import Ul from '../commons/ul'
import OnePlus from '../../images/oneplus.jpg'
import styled from 'styled-components'

const PhoneContainer = styled.div`
  @media screen and (max-width: 768px) {
    text-align: center;
    margin-bottom: 4rem;
    img {
      width: 33%;
    }
  }
`

export default () => (
  <Section>
    <h3>Un quotidien plus simple avec Octave</h3>
    <Paragraph>
      La clé d'une alimentation saine repose sur l'organisation et
      l'inspiration. Pas facile quand on ne dispose pas d'assez de temps !
      Octave vous aide simplement et efficacement à y parvenir en quelques
      étapes.
    </Paragraph>
    <div className="grid-12 has-gutter">
      <PhoneContainer className="col-4-small-all">
        <img src={OnePlus} alt="Application Octave dans le One Plus 6T" />
      </PhoneContainer>
      <div className="col-1" />
      <div className="col-7-small-10">
        <Ul>
          <ImageTitleItem
            iconName="calendar"
            title="Planifier vos repas en un clin d’oeil"
          >
            Avant de faire vos courses, vous choisissez vos repas en quelques
            minutes. Octave vous fait des propositions de recettes adaptées à
            vos goûts, besoins, envies et contraintes. Vous sélectionnez ce que
            vous voulez manger en veillant à l'équilibre de votre alimentation.
          </ImageTitleItem>
          <ImageTitleItem iconName="cart" title="Acheter les bons produits">
            Octave génère votre liste de courses en fonction des recettes et
            quantités nécessaires. Vous finalisez cette liste en sélectionnant
            les produits que vous préférez. Enfin si votre magasin favori
            propose le drive ou la livraison, Octave passe votre commande.
          </ImageTitleItem>
          <ImageTitleItem
            iconName="cooking"
            title="Cuisiner en toute sérénité"
            selected
          >
            Avec vos recettes et tous les ingrédients, vous abordez la semaine
            en toute sérénité. Au moment de préparer vos repas, chaque recette
            est décrite pas à pas dans l'application. Un changement de dernière
            minute ? Octave propose une alternative adaptée.
          </ImageTitleItem>
        </Ul>
      </div>
    </div>
  </Section>
)