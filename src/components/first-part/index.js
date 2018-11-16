import React from 'react'
import Section from '../section'

import ImageTitleItem from './image-title-item'
import { Oli } from '../commons/octave-item-list'
import IphoneX from '../../images/iphonex.png'

export default () => (
  <Section>
    <h3>Un quotidien plus simple avec Octave</h3>
    <div className="grid-10">
      <div className="col-1" />
      <div className="col-8">
        <p style={{ textAlign: 'center', marginBottom: '5rem' }}>
          La clé d'une alimentation saine repose sur l'organisation et
          l'inspiration. Pas facile quand on ne dispose pas d'assez de temps !
          Octave vous aide simplement et efficacement à y parvenir en quelques
          étapes.
        </p>
      </div>
      <div className="col-1" />
    </div>
    <div className="grid-2 has-gutter">
      <div className="col-1">
        <img
          className="iphonex"
          src={IphoneX}
          alt="Application Octave dans l'Iphone"
        />
      </div>
      <div className="col-1">
        <ul>
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
        </ul>
      </div>
    </div>
    <h3>Pourquoi utiliser Octave</h3>
    <div className="grid-10">
      <div className="col-1" />
      <div className="col-8">
        <p style={{ textAlign: 'center', marginBottom: '5rem' }}>
          Avec Octave, vous gagnez un temps considérable sur l'organisation de
          vos repas qui deviennent plus variés et équilibrés
        </p>
      </div>
      <div className="col-1" />
    </div>
    <div className="grid-10 has-gutter">
      <ul className="col-4" style={{ listStyle: 'none' }}>
        <Oli>
          Vous renouvelez constamment vos repas avec de nouvelles idées de
          recettes
        </Oli>
        <Oli>
          Vous gagnez un temps précieux que vous consacrez à ce qui compte
          vraiment
        </Oli>
        <Oli>
          Vous gérez vos courses avec une seule application disponible à tout
          moment
        </Oli>
      </ul>
      <div className="col-2" />
      <ul className="col-4" style={{ listStyle: 'none' }}>
        <Oli>
          Vous mangez plus sainement grâce à notre sélection de recettes et
          ingrédients
        </Oli>
        <Oli>
          Vous n’achetez que ce dont vous avez besoin et faites des économies
        </Oli>
        <Oli>
          Vous apprenez et vous améliorez sans cesse en cuisine et nutrition
        </Oli>
      </ul>
    </div>
  </Section>
)
