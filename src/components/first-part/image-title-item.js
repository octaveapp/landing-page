import React from 'react'
import styled from 'styled-components'

const ListItem = styled.div`
  h4 {
    //color: #6cc566;
  }
  margin-bottom: 2rem;
`

export default ({ img, alt, title, children }) => (
  <ListItem>
    <div className="grid-6 has-gutter">
      <picture className="col-1">
        <img src={img} alt={alt} />
      </picture>
      <div className="col-5">
        <p>{title}</p>
        <p>{children}</p>
      </div>
    </div>
  </ListItem>
)
