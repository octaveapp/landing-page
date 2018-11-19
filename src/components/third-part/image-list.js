import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  margin-top: 5rem;
`

const ImgContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  img {
    border-radius: 2rem;
  }
  @media screen and (max-width: 768px) {
    order: -1;
  }
`

const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
  li {
    margin-bottom: 4rem;
  }
`

export default ({ img, alt, children, alignRight }) => {
  const elALignedToLeft = [Image(img, alt), UnorderedList(children)]
  const els = alignRight ? elALignedToLeft.reverse() : elALignedToLeft
  return <Root className="grid-12 has-gutter">{els}</Root>
}

const Image = (img, alt) => (
  <ImgContainer className="col-5-small-all">
    <img src={img} alt={alt} />
  </ImgContainer>
)

const UnorderedList = children => (
  <div className="col-7-small-all">
    <Ul>{children}</Ul>
  </div>
)
