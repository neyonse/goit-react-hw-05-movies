import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.div``;

export const SectionTitle = styled.header`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 700;
`;

export const MoviesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MoviesListItem = styled.li`
  transition: color 500ms cubic-bezier(0.165, 0.84, 0.44, 1);

  :hover {
    color: mediumorchid;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
