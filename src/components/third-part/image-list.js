import React from 'react'
import styled from 'styled-components'

import OctaveList from '../octave-list'

const ImageList = styled.div`
  margin-bottom: 2rem;
  .image-container {
  }
`

export default ({ img, alt, children, alignRight }) => {
  const elALignedToLeft = [Image(img, alt), UnorderedList(children)]
  const els = alignRight ? elALignedToLeft.reverse() : elALignedToLeft
  return <ImageList className="grid-2 has-gutter">{els}</ImageList>
}

const Image = (img, alt) => (
  <div className="image-container">
    <picture>
      <img src={img} alt={alt} />
    </picture>
  </div>
)

const UnorderedList = children => (
  <div>
    <OctaveList>{children}</OctaveList>
  </div>
)
