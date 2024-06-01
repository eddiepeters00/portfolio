import styled from "@emotion/styled";
import { useSpring, animated } from "@react-spring/web";
import { useRef } from "react";
import { colors } from "../../assets/colors/colors";
import { styles } from "../../assets/styles/styles";
import { config } from "react-spring";

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
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`;

const TechItem = styled(animated.div)`
  display: grid;
  place-items: center;
  background-color: hsl(220deg 40% 21% / 80%);
`;

const TechImage = styled.img`
  max-width: 100%;
  padding: 1rem;
`;

const TechName = styled.span`
  padding: 0.5rem;
`;

type Props = {
  title?: string;
  technologies: { name: string; src: string }[];
};

export const TechStack = ({ title = "TechStack", technologies }: Props) => {
  const techContainerRef = useRef<HTMLDivElement>(null);
  const slideAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.wobbly,
  });

  return (
    <Container ref={techContainerRef}>
      <Title>{title}</Title>
      <TechGrid>
        {technologies.map((tech) => {
          return (
            <TechItem
              key={tech.name}
              className="tech-item"
              data-tech={tech.name}
              style={slideAnimation}
            >
              <TechImage src={tech.src} alt={tech.name} />
              <TechName>{tech.name}</TechName>
            </TechItem>
          );
        })}
      </TechGrid>
    </Container>
  );
};
