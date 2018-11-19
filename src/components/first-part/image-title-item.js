import React from 'react'
import styled from 'styled-components'

const ListItem = styled.div`
  margin-bottom: 5rem;
  cursor: pointer;
  h4 {
    color: #6cc566;
  }
  .wrapper {
    margin-top: -0.8rem;
    height: 100%;
    position: relative;
    .icon-container {
      position: relative;
      z-index: 1;
      border-radius: 1rem 1rem 1rem 0;
      text-align: center;
      padding: 1rem 0.6rem;
      width: 6rem;
      height: 5rem;
      [class^='icon-']::before {
        color: #6cc566;
        font-size: 3rem;
      }
    }
    .border {
      z-index: 0;
      position: absolute;
      bottom: 0;
      left: 0;
      top: 3rem;
      width: 1rem;
      border-radius: 0 0 1rem 1rem;
      background-color: #6cc566;
      height: 0;
    }
  }
  :hover {
    .wrapper {
      .icon-container {
        background-color: #6cc566;
        [class^='icon-']::before {
          color: #fff;
        }
      }
    }
    .border {
      height: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    h4 {
      margin: 0 0 1rem 0;
    }
    .wrapper {
      margin-top: 0;
      .icon-container {
        padding: 0;
        width: auto;
      }
    }
  }
`

export default ({ iconName, title, children, selected }) => (
  <ListItem selected={selected}>
    <div className="grid-8 has-gutter">
      <div className="col-1">
        <div className="wrapper">
          <div className="icon-container">
            <span className={'icon-' + iconName} />
          </div>
          <div className="border">&nbsp;</div>
        </div>
      </div>
      <div className="col-7">
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </div>
  </ListItem>
)
