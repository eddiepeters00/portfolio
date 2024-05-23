import styled from "@emotion/styled";
import { useSpring, animated, config } from "react-spring";
import { colors } from "../../assets/colors/colors";
import Link from "../../components/Link/Link";
import { styles } from "../../assets/styles/styles";

// Styled components
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
  fontSize: "1.15rem",
});

const ButtonContainer = animated(
  styled.div({
    display: "flex",
    gap: "1rem",
    height: "4rem",
    marginTop: "4rem",
  })
);

const ContactLink = styled.a({
  fontSize: "1.25rem",
  color: "black",
  textShadow: styles.neon,
  transition: "all .2s",

  "&:hover": {
    color: colors.backgroundColor.lightRed,
  },
});

function Hero() {
  //Animation for the hero section
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
        <HeroText>
          Have a look around and don't hesitate to{" "}
          <ContactLink href="#contact">contact me</ContactLink>
        </HeroText>
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
