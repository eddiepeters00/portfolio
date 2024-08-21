import styled from "@emotion/styled";
import { useRef } from "react";
import { colors } from "../../assets/colors/colors";
import { styles } from "../../assets/styles/styles";

const Container = styled.div({
  backgroundColor: "black",
  marginTop: "4rem",
  color: colors.textColor.gray,
  padding: "2rem",
  boxShadow: styles.neon,
  width: "100%",
  maxWidth: "1000px",
  justifySelf: "center",
});

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${colors.textColor.white};
`;

const TechGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
`;

const TechItem = styled.div({
  backgroundColor: "transparent",
  width: "100%",
  paddingTop: "100%",
  position: "relative",
  perspective: "1000px",
});

const FlipCardInner = styled.div({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  textAlign: "center",
  transition: "transform 0.5s",
  transformStyle: "preserve-3d",

  ":hover": {
    transform: "rotateY(180deg)",
  },
});

const FlipCardFront = styled.div({
  position: "absolute",
  width: "100%",
  height: "100%",
  padding: "1rem",
  backgroundColor: `${colors.backgroundColor.deepBlue}`,
  color: "black",
  WebkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const FlipCardBack = styled.div({
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundColor: `${colors.backgroundColor.deepBlue}`,
  color: "white",
  transform: "rotateY(180deg)",
  WebkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const TechName = styled.span({
  fontSize: "1.25rem",
  color: "black",
  textShadow: styles.neon,
});

type Props = {
  title?: string;
  technologies: { name: string; src: string }[];
};

export const TechStack = ({ title = "TechStack", technologies }: Props) => {
  const techContainerRef = useRef<HTMLDivElement>(null);

  return (
    <Container ref={techContainerRef}>
      <Title>{title}</Title>
      <TechGrid>
        {technologies.map((tech) => (
          <TechItem key={tech.name}>
            <FlipCardInner>
              <FlipCardFront>
                <img
                  src={tech.src}
                  alt={tech.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </FlipCardFront>
              <FlipCardBack>
                <TechName>{tech.name}</TechName>
              </FlipCardBack>
            </FlipCardInner>
          </TechItem>
        ))}
      </TechGrid>
    </Container>
  );
};
