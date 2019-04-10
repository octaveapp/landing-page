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

const colorMixin = sheme => {
  const c = colorShemes[sheme]
  return `
  background-color: ${c.bg};
    border: 3px solid ${c.border};
    color: ${c.color};
    &:hover {
      background-color: ${c.hover.bg};
      border: 3px solid ${c.hover.border};
      color: ${c.hover.color};
    }`
}

const Button = styled.a`
  display: inline-block;
  border-radius: 2rem;
  padding: 1.2rem 4rem;
  font-size: 2rem;
  font-family: 'Work Sans', sans-serif !important;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    text-decoration: none;
  }
  &.green {
    ${colorMixin('green')};
  }
  &.blue {
    ${colorMixin('blue')};
  }
  &.white {
    ${colorMixin('white')};
  }
  @media screen and (max-width: 768px) {
    &.small-green {
      ${colorMixin('green')};
    }
    &.small-blue {
      ${colorMixin('blue')};
    }
    &.small-white {
      ${colorMixin('white')};
    }
  }
`
export default ({ children, className }) => (
  <Button href="/signup" className={className}>
    {children}
  </Button>
)
