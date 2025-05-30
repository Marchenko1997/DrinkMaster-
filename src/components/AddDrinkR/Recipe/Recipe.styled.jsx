import styled from "styled-components";
export const RecipeTitle = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 114%;
  color: var(--primary-text-color);

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-weight: 600;
    font-size: 40px;
    line-height: 110%;
    margin-top: 80px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 40px;
    line-height: 110%;
    margin-top: 80px;
  }
`;

export const RecipeField = styled.textarea`
  background-color: transparent;
  border: 1px solid var(--secondary-text-color);
  color: var(--primary-text-color);
  border-radius: 14px;
  width: 335px;
  height: 184px;
  margin-top: 40px;
  margin-bottom: 20px;
  padding: 16px;
  resize: none;

  &::placeholder {
    color: var(--secondary-text-color); 
    font-size: 14px; 
    font-family: "Manrope";
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 480px;
    height: 184px;
    padding: 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 480px;
    height: 184px;
    padding: 24px;
  }
`;
