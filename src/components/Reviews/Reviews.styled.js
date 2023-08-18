import styled from 'styled-components';

export const ReviewsSection = styled.section`
  margin-bottom: 48px;
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ReviewsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px 24px;
  width: 100%;

  border: 2px solid lightgray;
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    padding: 32px 48px;
  }
`;

export const ReviewsAuthor = styled.p`
  font-size: 16px;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  overflow-wrap: break-word;
  white-space: pre-line;

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`;
