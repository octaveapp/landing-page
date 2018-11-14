import React from 'react'
import styled from 'styled-components'

const Section = styled.section``

export default ({ children }) => (
  <Section className="grid-12">
    <div className="col-1" />
    <div className="col-10">{children}</div>
    <div className="col-1" />
  </Section>
)
