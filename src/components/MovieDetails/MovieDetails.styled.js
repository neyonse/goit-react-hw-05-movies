import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 24px;

  font-size: 18px;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;

  font-weight: 500;
  color: black;
  text-decoration: none;
`;

export const PosterWrap = styled.div`
  margin-bottom: 8px;
  width: 100%;
  height: auto;

  @media screen and (min-width: 1440px) {
    margin-bottom: 12px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const PosterImg = styled.img`
  width: 200px;
  height: auto;
`;

export const ListWrap = styled.ul`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
`;
