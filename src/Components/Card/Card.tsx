import styled from '@emotion/styled';
import React from 'react';
import { motion, useScroll } from 'framer-motion';

const CardGrid = styled.div({
  display: 'flex',
  flexFlow: 'row wrap',
  gap: '2rem',
  justifyContent: 'center',
  marginTop: '20rem',
});

const StyledCard = styled(motion.div)({
  flexBasis: '100vw',
  backgroundColor: 'hsl(220, 40%, 21%, .5)',
  height: '80dvh',
  marginBlock: '10rem',
  cursor: 'pointer',
  scrollSnapAlign: 'center',
});

const StyledTitle = styled.h3({
  color: 'whiteSmoke',
});

const StyledDescription = styled.p({
  color: 'gray',
});

type CardProps = {
  url?: string;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> & {
  Title: typeof StyledTitle;
  Description: typeof StyledDescription;
  Grid: typeof CardGrid;
} = ({ children, ...CardProps }) => {
  const { scrollYProgress } = useScroll();

  return <StyledCard {...CardProps}>{children}</StyledCard>;
};

Card.Grid = CardGrid;
Card.Title = StyledTitle;
Card.Description = StyledDescription;

export default Card;
