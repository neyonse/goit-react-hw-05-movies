import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (max-width: 767px) {
    max-width: 767px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 24px;
    width: 768px;
  }

  @media screen and (min-width: 1024px) {
    width: 1024px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 2px solid #2a2a2a;

  > nav {
    display: flex;
    gap: 12px;
  }
`;

export const Logo = styled(NavLink)`
  font-size: 14px;
  font-weight: 700;
  margin: 0;

  color: yellow;
  text-shadow: 0px 0px 6px rebeccapurple, 2px 0px 6px rebeccapurple,
    0px 4px 8px rebeccapurple, -2px 0px 6px rebeccapurple;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const Link = styled(NavLink)`
  display: block;
  padding: 4px 8px;

  font-size: 14px;
  font-weight: 500;
  color: #2a2a2a;
  text-decoration: none;

  border: 2px solid lightgray;
  border-radius: 4px;
  background-color: lightgray;

  transition: box-shadow 250ms cubic-bezier(0.23, 1, 0.32, 1);

  &.active {
    color: white;
    background-color: rebeccapurple;
    border-color: rebeccapurple;
  }

  &:hover {
    box-shadow: 0px 2px 6px gray;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 8px 16px;
  }
`;
