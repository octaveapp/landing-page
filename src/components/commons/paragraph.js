import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  p.paragraph {
    text-align: center;
    margin-bottom: 5rem;
    @media screen and (max-width: 768px) {
      margin-bottom: 3rem;
    }
  }
`

export default ({ children }) => (
  <Root className="grid-12 has-gutter">
    <div className="col-2-small-1" />
    <p className="col-8-small-10 paragraph">{children}</p>
    <div className="col-2-small-1" />
  </Root>
)
