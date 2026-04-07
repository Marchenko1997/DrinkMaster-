import styled from "styled-components";

export const SearchSelectStyled = styled.div`
  .select {
    cursor: pointer;
    display: inline-block;
    position: relative;
    font-family: Manrope, sans-serif;
    font-weight: 400;
    font-size: 17px;
    color: #f3f3f3;
    width: 335px;
    height: 56px;
    border-radius: 30px;
  }

  .select-styled {
    appearance: none;
    -webkit-appearance: none;

    width: 100%;
    height: 100%;

    background-color: #161f37;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23f3f3f3' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 16px center;

    border: 2px solid transparent;
    border-radius: 30px;
    padding: 10px 40px 10px 16px;

    font-family: Manrope, sans-serif;
    font-size: 17px;
    color: #f3f3f3;

    transition: all 0.2s ease-in;
    outline: none;

    &:hover {
      background-color: #3a65c0;
      border-color: #4070cd;
    }

    &:active,
    &:focus {
      background-color: #345dba;
      border-radius: 20px;
    }

    option {
      background-color: #161f37;
      color: #f3f3f3;
    }
  }

  @media (min-width: 768px) {
    .select {
      width: 199px;
      height: 56px;
    }
  }

  @media (min-width: 1280px) {
    .select {
      width: 199px;
      height: 56px;
    }
  }
`;
