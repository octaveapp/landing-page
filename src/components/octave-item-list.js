import React from 'react'
import styled from 'styled-components'

const Li = styled.li`
  position: relative;
  margin-bottom: 2rem;
  .dot {
    position: absolute;
    top: 20%;
    border-radius: 50%;
    background-color: ${props => props.color};
    width: 2rem;
    height: 2rem;
  }
  .text {
    margin-left: 5rem;
  }
`

export default ({ children, color = '#6cc566' }) => (
  <Li color={color}>
    <div className="dot" />
    <div className="text">{children}</div>
  </Li>
)
