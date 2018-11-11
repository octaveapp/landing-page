import React from 'react'

import Layout from '../components/layout'
import FullWidthSection from '../components/full-width-section'
import MargedSection from '../components/marged-section'
import CallToAction from '../components/call-to-action'

import Pasta from '../images/pasta.jpg'
import ImageTitleItem from '../components/first-part/image-title-item'
import Iphone from '../components/first-part/iphone'
import ImageList from '../components/third-part/image-list'
import OctaveList from '../components/octave-list'

const IndexPage = () => (
  <Layout>
    <MargedSection>
      <h3>Ce qu'Octave fait pour vous</h3>
      <p>
        La clé d'une alimentation saine repose sur l'organisation et
        l'inspiration. Pas facile quand on ne dispose pas d'assez de temps !
        Octave vous aide simplement et efficacement à y parvenir en quelques
        étapes.
      </p>
      <div className="grid-10">
        <ul
          className="col-9"
          style={{ 'list-style': 'none', margin: 0, padding: 0 }}
        >
          <ImageTitleItem
            img={Pasta}
            alt="Pâte tomate"
            title="Vos menus - vraiment - personnalisés"
          >
            Organiser ses repas, du petit-déjeuner au dîner, n’aura jamais été
            aussi simple. Octave vous propose un large choix de recettes basées
            sur vos envies, vos goûts, votre santé, votre planning, vos
            compétences en cuisine. Vous sélectionnez les recettes qui vous
            conviennent pour les repas à venir.
          </ImageTitleItem>
          <ImageTitleItem
            img={Pasta}
            alt="Pâte tomate"
            title="Vos menus - vraiment - personnalisés"
          >
            Organiser ses repas, du petit-déjeuner au dîner, n’aura jamais été
            aussi simple. Octave vous propose un large choix de recettes basées
            sur vos envies, vos goûts, votre santé, votre planning, vos
            compétences en cuisine. Vous sélectionnez les recettes qui vous
            conviennent pour les repas à venir.
          </ImageTitleItem>
          <ImageTitleItem
            img={Pasta}
            alt="Pâte tomate"
            title="Vos menus - vraiment - personnalisés"
          >
            Organiser ses repas, du petit-déjeuner au dîner, n’aura jamais été
            aussi simple. Octave vous propose un large choix de recettes basées
            sur vos envies, vos goûts, votre santé, votre planning, vos
            compétences en cuisine. Vous sélectionnez les recettes qui vous
            conviennent pour les repas à venir.
          </ImageTitleItem>
        </ul>
        <div className="col-1">
          <Iphone className="iphone" />
        </div>
      </div>
      <h3>Pourquoi utiliser Octave</h3>
      <p>
        Avec Octave, vous gagnez un temps considérable sur l'organisation de vos
        repas qui deviennent plus variés et équilibrés
      </p>
      <div className="grid-2">
        <OctaveList>
          <li>
            Vous renouvelez constamment vos repas avec de nouvelles idées de
            recettes
          </li>
          <li>
            Vous gagnez un temps précieux que vous consacrez à ce qui compte
            vraiment
          </li>
          <li>
            Vous gérez vos courses avec une seule application disponible à tout
            moment
          </li>
        </OctaveList>
        <OctaveList>
          <li>
            Vous mangez plus sainement grâce à notre sélection de recettes et
            ingrédients
          </li>
          <li>
            Vous n’achetez que ce dont vous avez besoin et faites des économies
          </li>
          <li>
            Vous apprenez et vous améliorez sans cesse en cuisine et nutrition
          </li>
        </OctaveList>
      </div>
    </MargedSection>
    <FullWidthSection>
      <p>
        Avec Octave, vous gagnez un temps précieux sur l'organisation de repas
        plus variés et équilibrés. Simplement et sans contrainte.
      </p>
      <CallToAction green>Je m'inscrit</CallToAction>
    </FullWidthSection>
    <MargedSection>
      <h3>Les fonctionnalités d’Octave</h3>
      <p>
        Avec Octave, nous voulons proposer le meilleur de la technologie pour
        vous aider à relever les défis du quotidien. Notre application vous
        propose des fonctionnalités innovantes pour une alimentation plus
        heureuse.
      </p>
      <ImageList img={Pasta} alt="Pâte tomate">
        <li>
          Le choix parmi de nombreuses recettes sélectionnées et expliquées par
          une diététicienne-nutritionniste
        </li>
        <li>
          L'intelligence artificielle qui adapte en permanence ses propositions
          à vos souhaits et goûts
        </li>
        <li>
          L'organisation souple des repas avec soit un planning hebdomadaire,
          soit une simple liste de repas
        </li>
        <li>
          Le partage des recettes choisies avec les membres de la famille pour
          faire de l'alimentation un enjeu du quotidien
        </li>
      </ImageList>
      <ImageList img={Pasta} alt="Pâte tomate" alignRight>
        <li>
          L'estimation de la qualité de votre panier et des conseils sur les
          produits qui le constitue pour faire les bons choix
        </li>
        <li>
          L'optimisation de votre panier en fonction du coût ou de la qualité
          des produits
        </li>
        <li>
          La connexion aux principales plateformes de courses en ligne afin de
          commander plus rapidement et simplement
        </li>
        <li>
          La liste de courses disponible en permanence sur votre application
          lorsque vous êtes en magasin
        </li>
        <li>
          L'ajout de produits, alimentaires ou non-alimentaires, à votre liste
          pour faire la totalité de vos courses via Octave
        </li>
      </ImageList>
      <ImageList img={Pasta} alt="Pâte tomate">
        <li>
          Les recettes disponibles dans l'application avec les étapes pas à pas
          expliquées simplement et clairement
        </li>
        <li>
          La possibilité de s'adapter à l'imprévu en demandant le remplacement
          d'une recette à la volée
        </li>
        <li>
          L'assistant qui peut vous rappeler quand commencer à cuisiner les
          repas
        </li>
      </ImageList>
    </MargedSection>
    <footer />
  </Layout>
)

export default IndexPage
