import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Card = styled(NavLink)`
  /* width: calc((100% - 24px * 3) / 4); */
  width: 200px;

  font-weight: 500;
  color: black;
  text-decoration: none;
`;

export const PosterWrap = styled.div`
  margin-bottom: 8px;
  width: 200px;
  height: 300px;

  transition: box-shadow 300ms cubic-bezier(0.23, 1, 0.32, 1);

  &:hover {
    box-shadow: 0px 2px 12px 2px gray;
  }
`;

export const PosterImg = styled.img``;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
`;
