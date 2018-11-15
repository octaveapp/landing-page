import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  p.paragraph {
    text-align: center;
    margin-bottom: 5rem;
  }
`

export default ({ children }) => (
  <Root className="grid-10">
    <div className="col-2" />
    <div className="col-6">
      <p className="paragraph">{children}</p>
    </div>
    <div className="col-2" />
  </Root>
)
