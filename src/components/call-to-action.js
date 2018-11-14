import styled from 'styled-components'

const Button = styled.button`
  border-radius: 1.5rem;
  padding: 1.5rem 4rem;
  font-size: 2rem;
  background-color: ${props => (props.green ? '#fff' : '#008DD5')};
  border: 1px solid ${props => (props.green ? '#6CC566' : '#008DD5')};
  color: ${props => (props.green ? '#6CC566' : '#fff')};
  font-weight: 600;
  &:hover {
    background-color: #bce4b9;
    color: white;
  }
`
export default Button
