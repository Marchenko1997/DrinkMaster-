import {
  StyledHero,
  HeroContent,
  HeroTitle,
  HeroDescription,
  AddDrinkLink,
  HeroPictureWrapper,
  HeroPicture,
} from "./Hero.styled.jsx";
import images from "../../assets/images/Hero/images.js";

const Hero = () => {
  return (
    <StyledHero>
      <HeroContent>
        <HeroTitle>Craft Your Perfect Drink with Drink Master</HeroTitle>
        <HeroDescription>
          Unlock your inner mixologist with Drink Master, your one-stop
          destination for exploring, crafting, and mastering the world's finest
          beverages.
        </HeroDescription>
        <AddDrinkLink to="/add">Add drink</AddDrinkLink>
      </HeroContent>
      <HeroPictureWrapper>
        <picture>
          <source
            srcSet={images.blue_tea_mobile}
            type="image/png"
            media="(min-width:280px)"
            width="352px"
            height="313px"
          />
          <source
            srcSet={images.blue_tea_tablet}
            type="image/png"
            media="(min-width:768px)"
            width="359px"
            height="445px"
          />
          <source
            srcSet={images.blue_tea_desktop}
            type="image/png"
            media="(min-width:1200px)"
            width="359px"
            height="445px"
          />
          <HeroPicture
            src={images.blue_tea_desktop_jpg}
            alt="Blue tea in a glass"
            width="359px"
            height="445px"
          />
        </picture>
      </HeroPictureWrapper>
    </StyledHero>
  );
};

export default Hero;
