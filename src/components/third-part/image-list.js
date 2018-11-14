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

export default ({ img, alt, children, alignRight }) => {
  const elALignedToLeft = [Image(img, alt), UnorderedList(children)]
  const els = alignRight ? elALignedToLeft.reverse() : elALignedToLeft
  return <Root className="grid-10 has-gutter">{els}</Root>
}

const Image = (img, alt) => (
  <div className="image-container col-4">
    <img src={img} alt={alt} />
  </div>
)

const UnorderedList = children => (
  <div className="col-6">
    <ul style={{ listStyle: 'none' }}>{children}</ul>
  </div>
)
