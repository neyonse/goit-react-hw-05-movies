import styled from 'styled-components';

export const Section = styled.section`
  margin: 16px auto;

  @media screen and (min-width: 768px) {
    margin: 24px auto;
  }

  @media screen and (min-width: 1024px) {
    margin: 32px auto;
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: 16px;

  font-size: 20px;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 24px;
  }
`;

export const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }

  @media screen and (min-width: 1024px) {
    gap: 32px;
  }
`;
