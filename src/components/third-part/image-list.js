import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  margin-top: 5rem;
  .image-container {
    img {
      border-radius: 2rem;
    }
  }
`

const Ul = styled.ul`
  list-style: none;
  li {
    margin-bottom: 3.5rem;
  }
`

export default ({ img, alt, children, alignRight }) => {
  const elALignedToLeft = [
    Image(img, alt),
    <div className="col-1" />,
    UnorderedList(children),
  ]
  const els = alignRight ? elALignedToLeft.reverse() : elALignedToLeft
  return <Root className="grid-10">{els}</Root>
}

const Image = (img, alt) => (
  <div className="image-container col-3">
    <img src={img} alt={alt} />
  </div>
)

const UnorderedList = children => (
  <div className="col-6">
    <Ul>{children}</Ul>
  </div>
)
