import React from 'react'
import styled from 'styled-components'

const greenColor = '#6CC566'
const blueColor = '#008DD5'
const whiteColor = '#fff'
const Button = styled.a`
  display: inline-block;
  border-radius: 2rem;
  padding: 1.2rem 4rem;
  font-size: 2rem;
  cursor: pointer;
  text-decoration: none;
  background-color: ${props => (props.green ? whiteColor : blueColor)};
  border: 3px solid ${props => (props.green ? greenColor : blueColor)};
  color: ${props => (props.green ? greenColor : whiteColor)}!important;
  font-weight: 600;
  &:hover {
    background-color: ${props => (props.green ? greenColor : whiteColor)};
    border: 3px solid ${props => (props.green ? whiteColor : blueColor)};
    color: ${props => (props.green ? whiteColor : blueColor)} !important;
    text-decoration: none;
  }
`
export default ({ children, green }) => (
  <Button green={green} href="signup">
    {children}
  </Button>
)
