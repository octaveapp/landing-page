import React from 'react'
import styled from 'styled-components'

import OctaveIcon from '../images/icon.png'

const ListItem = styled.li`
  list-style: url(${OctaveIcon});
`

export default ({ children }) => <ListItem>{children}</ListItem>
