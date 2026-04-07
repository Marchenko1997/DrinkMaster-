import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  gap: 77px;
  margin-top: 80px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
    justify-content: space-between;
  }
`;

export const IngrTitle = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 114%;
  color: var(--primary-text-color);
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 40px;
    line-height: 110%;
  }
  @media screen and (min-width: 1280px) {
    font-size: 40px;
    line-height: 110%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 104px;
  height: 38px;
  background-color: transparent;
  border: 1px solid var(--secondary-text-color);
  border-radius: 200px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 114px;
    height: 44px;
  }
  @media screen and (min-width: 1280px) {
    width: 114px;
    height: 44px;
  }
`;

export const QuantityButton = styled.button`
  padding-left: 5px;
  padding-right: 5px;
  background-color: transparent;
  border: none;
  color: var(--primary-text-color);
  font-size: 25px;
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 335px;
  margin-bottom: 18px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 704px;
    gap: 0px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
    width: 540px;
    gap: 0px;
    justify-content: space-between;
    margin-bottom: 24px;
  }
`;

export const DescHelperContainer = styled.div`
  @media screen and (min-width: 1280px) {
    width: 540px;
  }
`;

export const SelectInnerContainer = styled.div`
  display: flex;
  gap: 8px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    gap: 14px;
  }
  @media screen and (min-width: 1280px) {
    gap: 14px;
  }
`;

export const IngredientSelect = styled.select`
  appearance: none;
  -webkit-appearance: none;

  width: 200px;
  height: 50px;
  padding: 12px 40px 12px 15px;

  border: 1px solid var(--secondary-text-color);
  border-radius: 200px;
  background-color: var(--background-color);
  color: var(--primary-text-color);
  cursor: pointer;

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23f3f3f3' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;

  outline: none;
  font-family: Manrope, sans-serif;
  font-size: 14px;

  option {
    background-color: var(--background-color);
    color: var(--primary-text-color);
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 332px;
    height: 56px;
  }

  @media screen and (min-width: 1280px) {
    width: 316px;
    height: 56px;
  }
`;

export const MeasureInput = styled.input`
  background-color: transparent;
  border: 1px solid var(--secondary-text-color);
  border-radius: 200px;
  padding: 16px;
  color: var(--primary-text-color);
  width: 101px;
  height: 50px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 150px;
    height: 56px;
  }
  @media screen and (min-width: 1280px) {
    width: 150px;
    height: 56px;
  }
`;

export const DeleteMeasureBtn = styled.button`
  background-color: transparent;
  border: none;
  color: var(--primary-text-color);
  font-size: 25px;
`;
