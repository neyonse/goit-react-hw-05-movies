import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  margin-top: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 24px;
  margin-bottom: 24px;

  font-weight: 500;
  color: #2a2a2a;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: start;
  }

  @media screen and (min-width: 1440px) {
    gap: 32px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1024px) {
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    gap: 32px;
  }
`;

export const PosterImg = styled.img`
  width: 220px;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 240px;
  }

  @media screen and (min-width: 1024px) {
    width: 260px;
  }

  @media screen and (min-width: 1440px) {
    width: 300px;
  }
`;

export const MovieTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const Score = styled.span`
  font-size: 16px;
  font-weight: 700;

  text-shadow: 1px 1px 1px #2a2a2a;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 12px;

  font-size: 16px;
  font-weight: 700;

  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  white-space: pre-line;
  overflow-wrap: break-word;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const GenresList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const GenreLink = styled.a`
  display: block;
  font-size: 14px;
  padding: 6px 12px;
  color: inherit;
  text-decoration: none;
  border-radius: 25px;
  border: 2px solid lightgray;
  /* background-color: lightgray; */

  cursor: default;

  /* &:hover {
    box-shadow: 0px 2px 6px gray;
  } */
`;

export const ListWrap = styled.ul`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Link = styled(NavLink)`
  display: block;
  padding: 8px 16px;

  font-weight: 500;
  text-decoration: none;
  color: #2a2a2a;
  border-radius: 4px;
  border: 2px solid lightgray;
  background-color: lightgray;

  &.active {
    color: white;
    background-color: rebeccapurple;
    border-color: rebeccapurple;
  }

  &:hover {
    box-shadow: 0px 2px 6px gray;
  }
`;
