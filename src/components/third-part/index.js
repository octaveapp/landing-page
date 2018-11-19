import React from 'react'
import Section from '../section'

import ImageList from './image-list'
import { Oli, RedDot, BlueDot } from '../commons/octave-item-list'
import Paragraph from '../commons/paragraph'
import Feature1 from '../../images/feature-usage-1.jpg'
import Feature2 from '../../images/feature-usage-2.jpg'
import Feature3 from '../../images/feature-usage-3.jpg'

export default () => (
  <Section>
    <h3>Les fonctionnalités d’Octave</h3>
    <Paragraph>
      Avec Octave, nous voulons proposer le meilleur de la technologie pour vous
      aider à relever les défis du quotidien. Notre application vous propose des
      fonctionnalités innovantes pour une alimentation plus heureuse.
    </Paragraph>
    <ImageList img={Feature1} alt="Pâte tomate">
      <Oli>
        Organisation souple des repas avec soit un planning hebdomadaire, soit
        une simple liste de repas
      </Oli>
      <Oli>
        Intelligence artificielle qui adapte en permanence ses propositions à
        vos souhaits et goûts
      </Oli>
      <Oli>
        De nombreuses recettes sélectionnées et expliquées par une
        diététicienne-nutritionniste
      </Oli>
      <Oli>
        Partage des recettes choisies avec les membres de la famille pour avoir
        la validation ou d’autres propositions de recettes
      </Oli>
    </ImageList>
    <ImageList img={Feature2} alt="Pâte tomate" alignRight>
      <Oli Icon={RedDot}>
        Connexion aux principales plateformes de courses en ligne afin de
        commander plus rapidement et simplement
      </Oli>
      <Oli Icon={RedDot}>
        Liste de courses disponible en permanence sur votre application lorsque
        vous êtes en magasin
      </Oli>
      <Oli Icon={RedDot}>
        Informations sur la qualité de votre panier et conseils sur les produits
        qui le constitue pour faire les bons choix
      </Oli>
      <Oli Icon={RedDot}>
        Ajout de produits - alimentaires ou non-alimentaires - à votre liste
        pour gérer la totalité de vos courses via Octave
      </Oli>
    </ImageList>
    <ImageList img={Feature3} alt="Pâte tomate">
      <Oli Icon={BlueDot}>
        Recettes disponibles dans l'application avec les étapes pas à pas
        expliquées simplement et clairement
      </Oli>
      <Oli Icon={BlueDot}>
        Possibilité de s'adapter à l'imprévu en demandant le remplacement d'une
        recette à la volée
      </Oli>
      <Oli Icon={BlueDot}>
        Assistance à l’organisation en cuisine avec possibilité de définir des
        rappels et notifications pour cuisiner plus efficacement
      </Oli>
      <Oli Icon={BlueDot}>
        Accès à des conseils de cuisine afin de maîtriser les bases essentielles
        de la préparation, cuisson et conservation des aliments
      </Oli>
    </ImageList>
  </Section>
)
