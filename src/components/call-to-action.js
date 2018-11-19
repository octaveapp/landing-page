import React from 'react'
import styled from 'styled-components'

const greenColor = '#6CC566'
const blueColor = '#008DD5'
const whiteColor = '#fff'

const colorShemes = {
  green: {
    bg: whiteColor,
    border: greenColor,
    color: greenColor,
    hover: {
      bg: greenColor,
      border: whiteColor,
      color: whiteColor,
    },
  },
  blue: {
    bg: blueColor,
    border: blueColor,
    color: whiteColor,
    hover: {
      bg: whiteColor,
      border: blueColor,
      color: blueColor,
    },
  },
  white: {
    bg: whiteColor,
    border: blueColor,
    color: blueColor,
    hover: {
      bg: blueColor,
      border: whiteColor,
      color: whiteColor,
    },
  },
}
const Button = styled.a`
  display: inline-block;
  border-radius: 2rem;
  padding: 1.2rem 4rem;
  font-size: 2rem;
  cursor: pointer;
  text-decoration: none;
  background-color: ${props => colorShemes[props.colorSheme].bg};
  border: 3px solid ${props => colorShemes[props.colorSheme].border};
  color: ${props => colorShemes[props.colorSheme].color + '!important'};
  font-weight: 600;
  &:hover {
    background-color: ${props => colorShemes[props.colorSheme].hover.bg};
    border: 3px solid ${props => colorShemes[props.colorSheme].hover.border};
    color: ${props => colorShemes[props.colorSheme].hover.color + '!important'};
    text-decoration: none;
  }
`
export default ({ children, colorSheme }) => (
  <Button colorSheme={colorSheme} href="signup">
    {children}
  </Button>
)
