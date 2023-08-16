import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Card = styled(NavLink)`
  font-weight: 500;
  color: black;
  text-decoration: none;
  width: calc((100% - 16px) / 2);

  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: calc((100% - 24px * 2) / 3);
  }

  @media screen and (min-width: 1024px) {
    width: calc((100% - 32px * 3) / 4);
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 32px * 5) / 6);
  }
`;

export const PosterWrap = styled.div`
  margin-bottom: 8px;
  width: 100%;
  height: auto;

  transition: box-shadow 200ms cubic-bezier(0.23, 1, 0.32, 1);

  @media screen and (min-width: 1440px) {
    margin-bottom: 12px;
  }

  ${Card}:hover & {
    box-shadow: 0px 2px 6px gray;
    /* transform: scale(1.02); */
  }
`;

export const PosterImg = styled.img`
  width: 100%;
  height: auto;
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
