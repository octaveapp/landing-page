import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  background-color: #008dd5;
  padding: 2rem;
  text-align: center;
  color: white;
  font-size: 3rem;
  font-weight: 500;
  font-family: 'Maitree', serif;
`

export default ({ children, bgColor, bgImage }) => (
  <Section className="grid-6">
    <div className="col-1" />
    <div className="col-4">{children}</div>
    <div className="col-1" />
  </Section>
)
