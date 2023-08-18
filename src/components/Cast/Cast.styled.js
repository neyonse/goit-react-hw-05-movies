import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';
import { BsFilePersonFill } from 'react-icons/bs';

export const ActorsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ActorCard = styled.li`
  width: calc((100% - 20px * 2) / 3);

  @media screen and (min-width: 768px) {
    width: calc((100% - 20px * 5) / 6);
  }

  @media screen and (min-width: 1024px) {
    width: calc((100% - 20px * 7) / 8);
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 20px * 11) / 12);
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  min-width: 100px;
  min-height: 150px;

  border-radius: 12px;
  overflow: hidden;
`;

export const ActorImg = styled.img`
  min-width: 100px;
  min-height: 150px;
  object-fit: cover;
`;

export const PersonIcon = styled(BsFilePersonFill)`
  min-width: 150px;
  min-height: 150px;
  fill: lightgray;
  object-fit: cover;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
