import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHero = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 54px;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    margin-top: 8px;
    margin-bottom: 106px;
  }
`;

export const HeroContent = styled.div`
  margin-bottom: 47px;

  @media (min-width: 768px) {
    margin-bottom: 54px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 0;
  }
`;

export const HeroTitle = styled.h1`
  font-weight: 600;
  color: var(--primary-text-color);
  font-size: 32px;
  line-height: 1.1875;
  max-width: 335px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 56px;
    line-height: 1.07143;
    margin-bottom: 28px;
    max-width: 641px;
  }

  @media (min-width: 1280px) {
    font-size: 64px;
    line-height: 1.0625;
    max-width: 715px;
  }
`;


export const HeroDescription = styled.p`
  font-weight: 400;
  color: var(--primary-text-color);
  font-size: 14px;
  line-height: 1.42857;
  max-width: 335px;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
    max-width: 619px;
    margin-bottom: 48px;
  }

  @media (min-width: 1280px) {
    max-width: 500px;
    margin-bottom: 40px;
  }
`;

export const AddDrinkLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 42px;
  padding: 14px 40px;
  width: 155px;
  height: 46px;
  background: var(--link-bg);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28571;
  color: var(--link-text);
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
    border 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
    border-radius 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
    background-color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

  @media (min-width: 768px) {
    padding: 18px 44px;
    width: 173px;
    height: 54px;
    font-size: 16px;
    line-height: 1.125;
  }

  @media (min-width: 1280px) {
    width: 164px;
    margin-bottom: 0;
  }

  &:hover,
  &:focus {
    border: 2px solid rgba(64, 112, 205, 0.5);
    border-radius: 42px;
    box-shadow: 0 0 20px rgba(64, 112, 205, 0.7);
    background-color: var(--link-bg-hover);
  }
`;

export const HeroPictureWrapper = styled.div`
  display: flex;
`;

export const HeroPicture = styled.img`
  width: 359px;
  height: 445px;
  object-fit: cover;
`;