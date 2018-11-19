import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  background-color: #fff;
  max-width: 1200px;
  margin: 5rem auto 0 auto;
`

export default ({ children }) => (
  <Section className="grid-12">
    <div className="col-1" />
    <div className="col-10">{children}</div>
    <div className="col-1" />
  </Section>
)
