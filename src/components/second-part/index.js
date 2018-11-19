import React from 'react'
import styled from 'styled-components'
import CallToActionButton from '../../components/call-to-action'
import SecondSectionBg from '../../images/second-section-bg.jpg'

const Section = styled.section`
  background: url(${SecondSectionBg});
  background-position: 60%;
  background-size: cover;
  .content {
    text-align: center;
    color: white;
    margin-bottom: 4rem;
  }
`

export default () => (
  <Section>
    <div className="grid-12 container">
      <div className="col-6" />
      <div className="col-6 content">
        <h3>
          Semaine après semaine, Octave apprend à vous connaître et adapte ses
          propositions. Vous apportez plus de variété et d'équilibre à vos repas
        </h3>
        <CallToActionButton colorSheme="blue">Je m'inscris</CallToActionButton>
      </div>
    </div>
  </Section>
)
