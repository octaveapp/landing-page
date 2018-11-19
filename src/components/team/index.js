import React from 'react'
import Section from '../section'
import styled from 'styled-components'

import Gerald from '../../images/gerald.jpg'
import Ag from '../../images/ag.jpg'
import Mathieu from '../../images/mathieu.jpg'
import CallToAction from '../call-to-action'

const Col = styled.div`
  text-align: center;
  .firstname {
    color: #6cc566;
    font-family: 'Josefin Slab', serif;
  }
`

const SignUpRow = styled.div`
  text-align: center;
  margin-top: 7rem;
`
const TeamMember = ({ avatar, firstname, job }) => (
  <Col className="col-3">
    <img src={avatar} alt="Avatar des fondateurs" />
    <p className="firstname">{firstname}</p>
    <p>{job}</p>
  </Col>
)

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
    <div className="grid-9 has-gutter">
      <TeamMember avatar={Gerald} firstname="Gérald" job="Co-fondateur" />
      <TeamMember avatar={Mathieu} firstname="Mathieu" job="Co-fondateur" />
      <TeamMember
        avatar={Ag}
        firstname="Anne-Gaëlle"
        job="Diététicienne-nutritionniste"
      />
    </div>
    <SignUpRow className="auto-grid">
      <div className="col-1">
        <CallToAction colorSheme="green">Contactez-nous</CallToAction>
      </div>
    </SignUpRow>
  </Section>
)
