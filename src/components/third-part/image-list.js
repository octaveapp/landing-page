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
  ${props =>
    props.reverse &&
    `
  @media screen and (min-width: 768px) {
    order: 1;
  }`};
`

const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
  li {
    margin-bottom: 4rem;
  }
`

const Image = ({ img, alt, reverse }) => (
  <ImgContainer className="col-5-small-all" reverse={reverse}>
    <img src={img} alt={alt} />
  </ImgContainer>
)

const UnorderedList = ({ children }) => (
  <div className="col-7-small-all">
    <Ul>{children}</Ul>
  </div>
)

export default ({ img, alt, children, reverse }) => (
  <Root className="grid-12 has-gutter">
    <Image img={img} alt={alt} reverse={reverse} />
    <UnorderedList>{children}</UnorderedList>
  </Root>
)
