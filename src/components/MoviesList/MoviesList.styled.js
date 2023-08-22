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

export const List = styled.ul`
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

export const BtnWrap = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }
`;

export const PageBtn = styled.button`
  display: block;
  padding: 4px 8px;
  width: 90px;
  margin-top: 24px;

  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  color: #2a2a2a;
  border-radius: 4px;
  border: 2px solid lightgray;
  background-color: lightgray;

  cursor: pointer;

  transition: box-shadow 250ms cubic-bezier(0.23, 1, 0.32, 1);

  &:hover {
    box-shadow: 0px 2px 6px gray;
  }

  @media screen and (min-width: 768px) {
    padding: 8px 16px;
    width: 200px;

    font-size: 16px;
  }
`;
