import React from 'react'
import Section from '../section'
import styled from 'styled-components'

const Placeholder = styled.div`
  background-color: gray;
  border-radius: 50%;
`

export default () => (
  <Section>
    <h3>Une équipe de passionnés à votre service</h3>
    <div className="grid-10">
      <div className="col-1" />
      <div className="col-8">
        <p style={{ 'text-align': 'center', marginBottom: '5rem' }}>
          Octave est né de la fusion de nos passions : <br />
          cuisiner pour ceux que nous aimons et utiliser la technologie pour
          changer le monde
        </p>
      </div>
      <div className="col-1" />
    </div>
    <div className="grid-10 has-gutter">
      <div className="col-2">
        <Placeholder />
      </div>
      <div className="col-2" />
      <div className="col-2">
        <Placeholder />
      </div>
      <div className="col-2" />
      <div className="col-2">
        <Placeholder />
      </div>
    </div>
  </Section>
)
