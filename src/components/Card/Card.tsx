import styled from "@emotion/styled";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { colors } from "../../assets/colors/colors";

const CardGrid = styled.div({
  display: "grid",
});

const StyledCard = styled(motion.div)({
  display: "grid",
  justifyContent: "center",
  backgroundColor: colors.backgroundColor.darkBlue,
  padding: "4rem",
  borderRadius: "1rem",

  "@media (min-width: 600px)": {
    margin: "10rem",
  },
});

const StyledTitle = styled.h3({
  color: colors.textColor.white,
  fontSize: "3rem",
});

const StyledDescription = styled.p({
  color: colors.textColor.gray,
  fontSize: "1.25rem",
});

const StyledContent = styled.div({
  display: "grid",
  marginTop: "1rem",
  gap: "2rem",
  maxWidth: "1000px",
});

type CardProps = {
  url?: string;
  children: React.ReactNode;
} & React.ComponentProps<typeof StyledCard>;

const Card: React.FC<CardProps> & {
  Title: typeof StyledTitle;
  Description: typeof StyledDescription;
  Content: typeof StyledContent;
  Grid: typeof CardGrid;
} = ({ children, ...CardProps }) => {
  const controls = useAnimation();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1 });
          } else {
            controls.start({ opacity: "50%" });
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [controls]);

  return (
    <StyledCard
      ref={cardRef}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      {...CardProps}
    >
      {children}
    </StyledCard>
  );
};

Card.Grid = CardGrid;
Card.Title = StyledTitle;
Card.Description = StyledDescription;
Card.Content = StyledContent;

export default Card;
