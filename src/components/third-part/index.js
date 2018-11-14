import React from 'react'
import Section from '../section'

import ImageList from './image-list'
import OctaveItemList from '../../components/octave-item-list'
import Pasta from '../../images/pasta.jpg'

export default () => (
  <Section>
    <h3>Les fonctionnalités d’Octave</h3>
    <div className="grid-10">
      <div className="col-1" />
      <div className="col-8">
        <p>
          Avec Octave, nous voulons proposer le meilleur de la technologie pour
          vous aider à relever les défis du quotidien. Notre application vous
          propose des fonctionnalités innovantes pour une alimentation plus
          heureuse.
        </p>
      </div>
      <div className="col-1" />
    </div>
    <ImageList img={Pasta} alt="Pâte tomate">
      <OctaveItemList>
        Organisation souple des repas avec soit un planning hebdomadaire, soit
        une simple liste de repas
      </OctaveItemList>
      <OctaveItemList>
        Intelligence artificielle qui adapte en permanence ses propositions à
        vos souhaits et goûts
      </OctaveItemList>
      <OctaveItemList>
        De nombreuses recettes sélectionnées et expliquées par une
        diététicienne-nutritionniste
      </OctaveItemList>
      <OctaveItemList>
        Partage des recettes choisies avec les membres de la famille pour avoir
        la validation ou d’autres propositions de recettes
      </OctaveItemList>
    </ImageList>
    <ImageList img={Pasta} alt="Pâte tomate" alignRight>
      <OctaveItemList color="#EE6C4D">
        Connexion aux principales plateformes de courses en ligne afin de
        commander plus rapidement et simplement
      </OctaveItemList>
      <OctaveItemList color="#EE6C4D">
        Liste de courses disponible en permanence sur votre application lorsque
        vous êtes en magasin
      </OctaveItemList>
      <OctaveItemList color="#EE6C4D">
        Informations sur la qualité de votre panier et conseils sur les produits
        qui le constitue pour faire les bons choix
      </OctaveItemList>
      <OctaveItemList color="#EE6C4D">
        Ajout de produits - alimentaires ou non-alimentaires - à votre liste
        pour gérer la totalité de vos courses via Octave
      </OctaveItemList>
    </ImageList>
    <ImageList img={Pasta} alt="Pâte tomate">
      <OctaveItemList color="#008DD5">
        Recettes disponibles dans l'application avec les étapes pas à pas
        expliquées simplement et clairement
      </OctaveItemList>
      <OctaveItemList color="#008DD5">
        Possibilité de s'adapter à l'imprévu en demandant le remplacement d'une
        recette à la volée
      </OctaveItemList>
      <OctaveItemList color="#008DD5">
        Assistance à l’organisation en cuisine avec possibilité de définir des
        rappels et notifications pour cuisiner plus efficacement
      </OctaveItemList>
      <OctaveItemList color="#008DD5">
        Accès à des conseils de cuisine afin de maîtriser les bases essentielles
        de la préparation, cuisson et conservation des aliments
      </OctaveItemList>
    </ImageList>
  </Section>
)
