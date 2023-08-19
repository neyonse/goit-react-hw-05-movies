import styled from 'styled-components';

export const Input = styled.input`
  padding: 12px 24px;
  width: 250px;

  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #2a2a2a;

  border: 2px solid gray;
  border-radius: 50px;
  outline: none;

  &::placeholder {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: gray;
  }

  &:hover {
    border-color: rebeccapurple;
  }
`;
