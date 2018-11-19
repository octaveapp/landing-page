import React from 'react'
import styled from 'styled-components'
import CallToActionButton from '../call-to-action'

const Section = styled.section`
  background: #008dd5;
  .content {
    text-align: center;
    color: white;
    margin-bottom: 4rem;
  }
`

export default () => (
  <Section className="grid-12 mobile-seperator">
    <div className="col-1" />
    <div className="col-10 content">
      <h3>
        Organiser ses repas et ses courses n’aura jamais été aussi simple.
        Manger sainement non plus.
      </h3>
      <CallToActionButton colorSheme="white">Je m'inscris</CallToActionButton>
    </div>
    <div className="col-1" />
  </Section>
)
