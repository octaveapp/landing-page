import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
  display: inline-block;
  border-radius: 2rem;
  padding: 1.2rem 4rem;
  font-size: 2rem;
  cursor: pointer;
  text-decoration: none;
  background-color: ${props => (props.green ? '#fff' : '#008DD5')};
  border: 1px solid ${props => (props.green ? '#6CC566' : '#008DD5')};
  color: ${props => (props.green ? '#6CC566' : '#fff')}!important;
  font-weight: 600;
  &:hover {
    background-color: #bce4b9;
    color: white;
    text-decoration: none;
  }
`
export default ({ children, green }) => (
  <Button green={green} href="/signup">
    {children}
  </Button>
)
