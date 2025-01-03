import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledDrinksItem = styled.li`
  margin-bottom: 40px;
  border-radius: 8px;

  @media (min-width: 768px) {
    margin-bottom: 80px;
    width: calc(150% - 20px);
  }

  @media (min-width: 1280px) {
    width: calc(100% - 40px);
  }
`;

export const ImgContainer = styled.div`
  margin-bottom: 14px;
  background: transparent;
  position: relative;

  &:hover {
    border-radius: 8px;
    position: relative;
    background: linear-gradient(0deg, #000, #272727);
    transition: background cubic-bezier(0.25, 0.1, 0.25, 1) 0.3s;
  }

  &:hover:before,
  &:hover:after,
  &:focus:before,
  &:focus:after {
    content: "";
    position: absolute;
    left: -2px;
    top: -2px;
    background: linear-gradient(
      45deg,
      #fb0094,
      #0000ff,
      #00ff00,
      #ffff00,
      #ff0000,
      #fb0094,
      #0000ff,
      #00ff00,
      #ffff00,
      #ff0000
    );
    background-size: 400%;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    border-radius: 8px;
    z-index: -1;
    animation: steam 16s linear infinite;
  }

  &:after {
    filter: blur(20px);
    transition: filter cubic-bezier(0.25, 0.1, 0.25, 1) 0.3s;
  }
`;

export const DrinkImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 335px;
  height: 360px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    width: 342px;
    height: 360px;
  }

  @media (min-width: 1280px) {
    width: 400px;
    height: 400px;
  }

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    height: 200px;
    border-radius: 8px;
    background: linear-gradient(
      180deg,
      rgba(10, 10, 17, 0.03) 2.37%,
      rgba(10, 10, 17, 0.96) 95.31%
    );
    z-index: 1;
  }
`;

export const DrinkImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DrinkName = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.125;
  color: var(--primary-text-color);

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
  }
`;

export const SeeMoreLink = styled(NavLink)`
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  text-align: right;
  color: var(--secondary-text-color);

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
  }
`;
