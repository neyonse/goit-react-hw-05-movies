import styled from 'styled-components';

export const SearchIcon = styled.i`
  position: absolute;
  left: 0;
  margin-right: auto;
  height: 100%;
  color: gray;

  transition: color 250ms cubic-bezier(0.23, 1, 0.32, 1);

  & > svg {
    height: 100%;
    width: 60%;
    color: inherit;
  }
`;

export const Input = styled.input`
  padding: 10px 20px 10px 42px;
  width: 100%;

  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #2a2a2a;

  border: 3px solid gray;
  border-radius: 50px;
  outline: none;

  transition: border-color 250ms cubic-bezier(0.23, 1, 0.32, 1);

  &::placeholder {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: gray;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
    padding: 12px 24px 12px 42px;
  }
`;

export const SearchForm = styled.form`
  position: relative;
  width: 300px;
  margin: 24px auto 0;
  text-align: center;

  &:hover ${SearchIcon} {
    color: rebeccapurple;
  }

  &:hover ${Input} {
    border-color: rebeccapurple;
  }
`;
