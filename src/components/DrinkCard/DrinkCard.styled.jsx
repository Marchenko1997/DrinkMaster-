import { styled } from "styled-components";

export const StyledCocktailWrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 335px;

  @media screen and (min-width: 768px) {
    gap: 24px;
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }

  svg {
    width: 24px;
    height: 24px;
    stroke: #f3f3f3;
  }
`;

export const StyledCocktailImage = styled.img`
  border-radius: 8px;
  height: 360px;

  @media screen and (min-width: 1280px) {
    height: 400px;
  }
`;

export const StyledCocktailDescription = styled.p`
  height: 75px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: var(--primary-text-color);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  white-space: pre-wrap;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.375;
    -webkit-line-clamp: 5;
  }
`;

export const StyledCocktailName = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  white-space: pre-wrap;
  color: var(--primary-text-color);

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const StyledCocktailAlcoholic = styled.p`
  margin-top: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: var(--secondary-text-color);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
  }
`;

export const StyledCocktailSeeMore = styled.button`
  border-radius: 42px;
  border: none;
  padding: 14px 40px;
  background: var(--primary-black-color);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28571;
  color: #f3f3f3;

  &:hover {
    background: #050e24;
  }

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.125;
  }
`;

export const StyledDeleteButton = styled.button`
  border-radius: 40px;
  border: none;
  width: 46px;
  height: 46px;
  background: var(--primary-black-color);
  color: #f3f3f3;

  &:hover {
    background: #050e24;
  }

  @media screen and (min-width: 768px) {
    width: 56px;
    height: 54px;
  }
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
