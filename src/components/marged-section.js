import React from 'react'
import styled from 'styled-components'

const MainColumn = styled.div`
  background-color: #6cc566;
  padding: 4rem;
  color: white;
`

export default ({ children }) => (
  <section className="grid-6">
    <div className="col-1" />
    <MainColumn className="col-4">{children}</MainColumn>
    <div className="col-1" />
  </section>
)
