import styled from "styled-components";

export const StyledDrinksList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DrinksListContainer = styled.ul`
  list-style: none;
  padding: 0;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
    column-gap: 20px;
    justify-content: space-between;
  }
`;

export const DrinksListTitle = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.14286;
  color: var(--primary-text-color);
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
    margin-bottom: 40px;
  }

  @media (min-width: 1280px) {
    line-height: 1.1;
  }
`;
