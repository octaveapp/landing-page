import React from 'react'
import styled from 'styled-components'
import ArrowLeft from '../../images/arrow-left.png'
import ArrowRight from '../../images/arrow-right.png'

const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  .phone{
   width:100%
}
  .arrow-left, .arrow-right{
    outline: none;
    display: none;
    border: none;
    width: 2rem;
    height: 4.2rem;
    background-repeat: no-repeat;
  }
  .arrow-left{
    background: url('${ArrowLeft}')
  }
  .arrow-right{
    background: url('${ArrowRight}')
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 4rem;
    .phone{
        width: 70%;
    }
    .arrow-left,.arrow-right{
        display: block;
    }
  }
`

export default ({ src, alt, onNext, onPrevious }) => (
  <PhoneContainer className="col-4-small-all">
    <button className="arrow-left" onClick={onPrevious} />
    <img className="phone" src={src} alt={alt} />
    <button className="arrow-right" onClick={onNext} />
  </PhoneContainer>
)
