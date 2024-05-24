import styled from "@emotion/styled";
import { colors } from "../../assets/colors/colors";
import { styles } from "../../assets/styles/styles";
import { linkedin, github } from "../../assets/images/index";

const StyledHeader = styled.header({
  color: colors.textColor.white,
  position: "fixed",
  top: "0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  width: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  backdropFilter: "blur(5px)",
  zIndex: "10",
});

const StyledLogo = styled.h1({
  color: "black",
  textShadow: styles.neon,
  fontSize: "3.2em",
  lineHeight: "1.1",
  cursor: "pointer",
  transition: "1s ease",
  ":hover": {
    WebkitTextStroke: `1px ${colors.backgroundColor.lightRed}`,
  },
});

const SocialMediaContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  marginRight: "1rem",
});

const SocialMediaIcon = styled.img({
  display: "grid",
  placeContent: "center",
  maxWidth: "100%",
  width: "3rem",
  backgroundColor: "white",
  borderRadius: "1rem",
  padding: ".25rem",
  transition: ".2s ease",
  ":hover": {
    boxShadow: `0px 0px 10px 4px ${colors.backgroundColor.lightRed}`,
  },
});

function Header() {
  return (
    <StyledHeader>
      <a href="/">
        <StyledLogo>Eddie Peters</StyledLogo>
      </a>
      <SocialMediaContainer>
        <a href="https://github.com/eddiepeters00" target="_blank">
          <SocialMediaIcon src={github} title="Github" alt="Github icon" />
        </a>
        <a href="https://www.linkedin.com/in/eddiepeters-dev/" target="_blank">
          <SocialMediaIcon
            src={linkedin}
            title="LinkedIn"
            alt="LinkedIn icon"
          />
        </a>
      </SocialMediaContainer>
    </StyledHeader>
  );
}

export default Header;
