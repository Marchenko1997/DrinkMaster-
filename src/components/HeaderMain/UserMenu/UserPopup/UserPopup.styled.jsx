import styled from "styled-components";

export const PopupContainer = styled.div`
  position: absolute;
  background-color: var(--popup-bg);
  color: #f3f3f3;
  left: -100%;
  border-radius: 8px;
  padding: 18px;
  width: 177px;
  height: 134px;
  z-index: 5;
`;

export const EditProfileText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  color: #f3f3f3;
`;

export const SvgIconEdit = styled.svg`
  width: 14px;
  height: 14px;
`;

export const EditBtn = styled.button`
  background-color: inherit;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  transition: all 400ms ease;
  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 38px;
`;

export const LogoutBtnPopup = styled.button`
  background-color: #f3f3f3;
  border-radius: 42px;
  border: 1px solid #f3f3f3;
  outline: none;
  width: 141px;
  height: 42px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28;
  color: #161f37;
  transition: all 400ms ease;
  &:hover {
    background-color: #161f37;
    color: #f3f3f3;
  }
`;
