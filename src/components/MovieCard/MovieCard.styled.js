import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { RiMovie2Line } from 'react-icons/ri';

export const Card = styled(NavLink)`
  color: #2a2a2a;
  text-decoration: none;

  width: calc((100% - 16px) / 2);

  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: calc((100% - 24px * 3) / 4);
  }

  @media screen and (min-width: 1024px) {
    width: calc((100% - 32px * 4) / 5);
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 32px * 5) / 6);
  }
`;

export const PosterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  height: calc(((100vw - 16px - 16px * 2) / 2) * 1.5);

  background-color: lightgray;

  overflow: hidden;

  transition: box-shadow 200ms cubic-bezier(0.23, 1, 0.32, 1);

  @media screen and (min-width: 768px) {
    height: calc(((768px - 24px * 3 - 24px * 2) / 4) * 1.5);
  }

  @media screen and (min-width: 1024px) {
    height: calc(((1024px - 32px * 4 - 24px * 2) / 5) * 1.5);
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 12px;
    height: calc(((1440px - 32px * 5 - 24px * 2) / 6) * 1.5);
  }

  ${Card}:hover & {
    box-shadow: 0px 2px 6px gray;
  }
`;

export const PosterImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PosterIcon = styled(RiMovie2Line)`
  width: 80%;
  height: 100%;
  color: white;
  background-color: lightgray;
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;

  transition: text-shadow 300ms cubic-bezier(0.23, 1, 0.32, 1);

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  ${Card}:hover & {
    text-shadow: 2px 2px 4px gray;
  }
`;
