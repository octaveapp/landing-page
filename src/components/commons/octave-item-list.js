import React from 'react'
import styled from 'styled-components'
import CheckedIcon from '../../images/checked.svg'

const Li = styled.li`
  position: relative;
  margin-bottom: 2rem;
  .text {
    margin-left: 5rem;
  }
`

const Dot = styled.div`
  position: absolute;
  top: 20%;
  border-radius: 50%;
  background-color: ${props => props.color};
  width: 2rem;
  height: 2rem;
`

const CheckImg = styled.img`
  position: absolute;
  width: 3rem;
  left: 0.7rem;
`

export const GreenDot = () => <Dot color="#6cc566" />
export const RedDot = () => <Dot color="#EE6C4D" />
export const BlueDot = () => <Dot color="#008DD5" />
export const Check = () => <CheckImg src={CheckedIcon} alt="coché" />

export const Oli = ({ children, Icon = GreenDot }) => (
  <Li>
    <Icon />
    <div className="text">{children}</div>
  </Li>
)
