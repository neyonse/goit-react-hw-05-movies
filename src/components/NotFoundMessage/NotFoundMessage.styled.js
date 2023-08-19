import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { TbError404, TbFaceIdError } from 'react-icons/tb';

export const NotFoundWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const IconSad = styled(TbFaceIdError)`
  width: 200px;
  height: 200px;
  color: gray;
`;

export const Icon404 = styled(TbError404)`
  width: 100px;
  height: 100px;
  transform: scaleX(1.15);
`;

export const GoHome = styled(NavLink)`
  display: block;
  width: fit-content;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #2a2a2a;
  font-weight: 500;
  border: 2px solid lightgray;
  background-color: lightgray;

  &:hover {
    box-shadow: 0px 2px 6px gray;
  }
`;
