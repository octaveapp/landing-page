import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  margin-top: 5rem;
  ${props =>
    props.reverse &&
    `
  @media screen and (min-width: 768px) {
    .img-col{
      order: 1;
    }
    .between{
      order: 0;
    }
    .list-col{
      order: -1;
    }
  }`};
`

const ImgContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  img {
    border-radius: 2rem;
    @media screen and (max-width: 768px) {
      width: 80%;
    }
  }
`

const ListCol = styled.div`
  display: flex;
  align-items: center;
  ul {
    list-style: none;
    padding-left: 0;
    li {
      margin-bottom: 4rem;
    }
  }
`

const Image = ({ img, alt }) => (
  <ImgContainer className="col-4-small-all img-col">
    <img src={img} alt={alt} />
  </ImgContainer>
)

const UnorderedList = ({ children }) => (
  <ListCol className="col-7-small-all list-col">
    <ul>{children}</ul>
  </ListCol>
)

export default ({ img, alt, children, reverse }) => (
  <Root className="grid-12 has-gutter" reverse={reverse}>
    <Image img={img} alt={alt} />
    <div class="col-1 small-hide between" />
    <UnorderedList>{children}</UnorderedList>
  </Root>
)
