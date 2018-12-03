import React, { Component } from 'react'
import Section from '../section'

import ImageTitleItem from './image-title-item'
import Paragraph from '../commons/paragraph'
import Ul from '../commons/ul'
import PhoneContainer from './phone-container'
import OnePlusShopping from '../../images/oneplus-shopping.jpg'
import OnePlusCooking from '../../images/oneplus-cooking.jpg'
import OnePlusPlanning from '../../images/oneplus-planning.jpg'

const TIME_TO_READ = 3000
const MOBILE_BREAK_POINT = 769

export default class DayToDay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentScreenIdx: 0,
    }
    this.screens = [OnePlusPlanning, OnePlusShopping, OnePlusCooking]
    this.handleNextScreen = this.handleNextScreen.bind(this)
    this.handlePrevousScreen = this.handlePrevousScreen.bind(this)
  }

  componentDidMount() {
    if (window.outerWidth >= MOBILE_BREAK_POINT) {
      this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this)
      this.intervalId = setInterval(
        this.handleInterval.bind(this),
        TIME_TO_READ
      )
    }
  }

  handleOnMouseEnter(val) {
    return () => {
      clearInterval(this.intervalId)
      this.setState({ currentScreenIdx: val })
    }
  }

  handleInterval() {
    this.handleNextScreen()
  }

  handleNextScreen() {
    const nextIdx =
      this.state.currentScreenIdx === 2 ? 0 : this.state.currentScreenIdx + 1
    this.setState({ currentScreenIdx: nextIdx })
  }

  handlePrevousScreen() {
    const nextIdx =
      this.state.currentScreenIdx === 0 ? 2 : this.state.currentScreenIdx - 1
    this.setState({ currentScreenIdx: nextIdx })
  }

  render() {
    const { currentScreenIdx } = this.state
    return (
      <Section>
        <h3>Un quotidien plus simple avec Octave</h3>
        <Paragraph>
          La clé d'une alimentation saine repose sur l'organisation et
          l'inspiration. Pas facile quand on ne dispose pas d'assez de temps !
          Octave vous aide simplement et efficacement à y parvenir en quelques
          étapes.
        </Paragraph>
        <div className="grid-12 has-gutter">
          <PhoneContainer
            currentScreen={this.screens[currentScreenIdx]}
            onNext={this.handleNextScreen}
            onPrevious={this.handlePreviousScreen}
          />
          <div className="col-1" />
          <div className="col-7-small-10">
            <Ul>
              <ImageTitleItem
                iconName="calendar"
                title="Planifier vos repas en un clin d’oeil"
                selected={currentScreenIdx === 0}
                onMouseEnter={this.handleOnMouseEnter(0)}
              >
                Avant de faire vos courses, vous choisissez vos repas en
                quelques minutes. Octave vous fait des propositions de recettes
                adaptées à vos goûts, besoins, envies et contraintes. Vous
                sélectionnez ce que vous voulez manger en veillant à l'équilibre
                de votre alimentation.
              </ImageTitleItem>
              <ImageTitleItem
                iconName="cart"
                title="Acheter les bons produits"
                selected={currentScreenIdx === 1}
                onMouseEnter={this.handleOnMouseEnter(1)}
              >
                Octave génère votre liste de courses en fonction des recettes et
                quantités nécessaires. Vous finalisez cette liste en
                sélectionnant les produits que vous préférez. Enfin si votre
                magasin favori propose le drive ou la livraison, Octave passe
                votre commande.
              </ImageTitleItem>
              <ImageTitleItem
                iconName="cooking"
                title="Cuisiner en toute sérénité"
                selected={currentScreenIdx === 2}
                onMouseEnter={this.handleOnMouseEnter(2)}
              >
                Avec vos recettes et tous les ingrédients, vous abordez la
                semaine en toute sérénité. Au moment de préparer vos repas,
                chaque recette est décrite pas à pas dans l'application. Un
                changement de dernière minute ? Octave propose une alternative
                adaptée.
              </ImageTitleItem>
            </Ul>
          </div>
        </div>
      </Section>
    )
  }
}
