import { Form, Field } from "formik";
import styled, { css } from "styled-components";
import DoneSvg from "../../assets/images/signSvg/done.svg";
import ErrorSvg from "../../assets/images/signSvg/error.svg";
import { NavLink } from "react-router-dom";

const transition = "300ms cubic-bezier(0.46, 0.03, 0.52, 0.96)";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 335px;
  @media screen and (max-width: 374.98px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const Title = styled.h1`
  color: var(--primary-text-color-footer);
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  letter-spacing: -0.56px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;


