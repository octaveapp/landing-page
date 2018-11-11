import styled from 'styled-components'

const Button = styled.button`
  border-radius: 2rem;
  padding: 3rem 8rem;
  font-size: 2rem;
  border: 1px solid ${props => (props.green ? '#6CC566' : 'blue')};
  color: ${props => (props.green ? '#6CC566' : 'blue')};
  font-weight: 500;
  &:hover {
    background-color: #bce4b9;
    color: white;
  }
`
export default Button
