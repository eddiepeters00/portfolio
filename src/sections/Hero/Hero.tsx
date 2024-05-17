import styled from "@emotion/styled";
import { useSpring, animated, config } from "react-spring";

import { colors } from "../../assets/colors/colors";
import Link from "../../components/Link/Link";

const StyledSection = animated(
  styled.section({
    height: "100dvh",
    display: "grid",
    placeItems: "center",
  })
);

const HeroContainer = styled.div({
  textAlign: "center",
  cursor: "default",
  display: "grid",
  placeItems: "center",
});

const HeroTitle = styled.h2({
  textTransform: "capitalize",
  fontSize: "2.8rem",
  fontWeight: "400",
  color: colors.textColor.white,
});

const HeroText = styled.p({
  color: colors.textColor.gray,
  fontWeight: "500",
  marginTop: ".5rem",
});

const ButtonContainer = animated(
  styled.div({
    display: "flex",
    gap: "1rem",
    height: "4rem",
    marginTop: "2rem",
  })
);

function Hero() {
  const heroAnimation = useSpring({
    opacity: 1,
    translateY: 0,
    from: { opacity: 0, translateY: -100 },
    config: config.wobbly,
  });

  return (
    <StyledSection style={heroAnimation}>
      <HeroContainer>
        <HeroTitle>Welcome to my portfolio</HeroTitle>
        <HeroText>Have a look around and dont hesitate to contact me</HeroText>
        <ButtonContainer style={heroAnimation}>
          <Link variant="primary" href="#projects">
            Check out my projects
          </Link>
          <Link variant="outlined" href="#about">
            Get to know me
          </Link>
        </ButtonContainer>
      </HeroContainer>
    </StyledSection>
  );
}

export default Hero;
