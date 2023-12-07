import styled from 'styled-components'

export const Button = styled.button`
  width: 90px;
  padding-top: 0px;
  border: none;
  background-color: ${props => (props.bgColor ? 'transparent' : '#3b82f6')};
  color: ${props => (props.color ? '#334155' : '#ffffff')};
  border-radius: 5px;
  margin: 8px;
`
