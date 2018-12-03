import React from 'react'
import styled from 'styled-components'
import CallToActionButton from '../call-to-action'

const Section = styled.section`
  background: #008dd5;
  .content {
    text-align: center;
    color: white;
    padding: 0.2rem 0 6rem 0;
  }
`

export default () => (
  <Section className="mobile-seperator">
    <div className="grid-12 container">
      <div className="col-1" />
      <div className="col-10 content">
        <h3>
          Organiser ses repas et ses courses n’aura jamais été aussi simple.
          Manger sainement non plus.
        </h3>
        <CallToActionButton className="white">Je m'inscris</CallToActionButton>
      </div>
      <div className="col-1" />
    </div>
  </Section>
)
