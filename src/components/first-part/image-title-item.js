import React from 'react'
import styled from 'styled-components'

const ListItem = styled.div`
  margin-bottom: 5rem;
  h4 {
    color: #6cc566;
  }
  .wrapper {
    height: 100%;
    position: relative;
    .icon-container {
      border-radius: 1rem 1rem 1rem 0;
      text-align: center;
      padding: 1rem 0;
      ${props => props.selected && 'background-color: #6cc566;'};
    }
    .border {
      position: absolute;
      bottom: 0;
      left: 0;
      top: 3rem;
      width: 1rem;
      border-radius: 0 0 1rem 1rem;
      background-color: #6cc566;
      display: ${props => (props.selected ? 'block' : 'none')};
    }
  }
`

export default ({ icon, alt, title, children, selected }) => (
  <ListItem selected={selected}>
    <div className="grid-6 has-gutter">
      <div className="col-1">
        <div className="wrapper">
          <div className="icon-container">
            <img src={icon} alt={alt} />
          </div>
          <div className="border">&nbsp;</div>
        </div>
      </div>
      <div className="col-5">
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </div>
  </ListItem>
)
