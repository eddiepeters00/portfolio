import styled from "@emotion/styled";
import React from "react";
import { motion } from "framer-motion";
import { colors } from "../../assets/colors/colors";

const CardGrid = styled.div({
  display: "grid",
});

const StyledCard = styled(motion.div)({
  display: "grid",
  justifyContent: "center",
  backgroundColor: colors.backgroundColor.darkBlue,
  marginBlock: "10rem",
  padding: "4rem",
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
  return <StyledCard {...CardProps}>{children}</StyledCard>;
};

Card.Grid = CardGrid;
Card.Title = StyledTitle;
Card.Description = StyledDescription;
Card.Content = StyledContent;

export default Card;
