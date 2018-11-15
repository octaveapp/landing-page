import React from 'react'
import Section from '../section'
import styled from 'styled-components'
import Paragraph from '../commons/paragraph'
import { Oli, Check } from '../commons/octave-item-list'

const PriceContainer = styled.div`
  text-align: center;
  padding: 0 7rem;
  .blue-block {
    padding: 1rem 3rem;
    color: #fff;
    background-color: #008dd5;
    border-radius: 0.5rem;
    .bold {
      font-weight: bold;
    }
    font-family: 'Josefin Slab', serif;
  }
  .features-list {
    .blue-block {
      border-radius: 0.5rem 0.5rem 0 0;
      margin: 0;
    }
    .content {
      border: 0.2rem solid #008dd5;
      border-top: 0;
      border-radius: 0 0 0.5rem 0.5rem;
      padding: 1rem;
      ul {
        padding-left: 0;
        list-style: none;
        li {
          text-align: left;
        }
      }
    }
  }
`

export default ({ className }) => (
  <Section className={className}>
    <h3>Un tarif abordable</h3>
    <Paragraph>
      Avec Octave, nous cherchons à mettre une alimentation saine et varié à la
      portée du plus grand nombre. Ainsi notre service est disponible à un tarif
      très abordable couvert par les économies réalisés grâce à des courses
      mieux maîtrisées.
    </Paragraph>
    <PriceContainer className="grid-10">
      <div className="col-3" />
      <div className="col-4">
        <p className="blue-block">
          2 semaines d’essai
          <br />
          <span className="bold">gratuites</span>
        </p>
        <p>puis</p>
        <div className="features-list">
          <p className="blue-block">
            1,5 euros par semaine <br />
            <span className="bold">seulement</span>
          </p>
          <div className="content">
            <p>Accès à toutes les fonctionnalités d’Octave</p>
            <ul>
              <Oli Icon={Check}>Menus personnalisés pour la famille</Oli>
              <Oli Icon={Check}>Planification en quelques minutes </Oli>
              <Oli Icon={Check}>Recettes saines et équilibrées</Oli>
              <Oli Icon={Check}>Ajout de vos recettes et envies</Oli>
              <Oli Icon={Check}>Courses en ligne simples et rapides</Oli>
              <Oli Icon={Check}>Liste de courses intelligentes</Oli>
              <Oli Icon={Check}>Recettes expliquées pas à pas</Oli>
              <Oli Icon={Check}>... et bien d’autres !</Oli>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-3" />
    </PriceContainer>
  </Section>
)
