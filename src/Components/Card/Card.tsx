import styled from '@emotion/styled';
import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '../../assets/colors/colors';

const CardGrid = styled.div({
  display: 'flex',
  flexFlow: 'row wrap',
  gap: '2rem',
  justifyContent: 'center',
  marginTop: '20rem',
});

const StyledCard = styled(motion.div)({
  flexBasis: '100vw',
  backgroundColor: colors.backgroundColor.darkBlue,
  height: '80dvh',
  marginBlock: '10rem',
  cursor: 'pointer',
  scrollSnapAlign: 'center',
});

const StyledTitle = styled.h3({
  color: colors.textColor.white,
});

const StyledDescription = styled.p({
  color: colors.textColor.gray,
});

type CardProps = {
  url?: string;
  children: React.ReactNode;
} & React.ComponentProps<typeof StyledCard>;

const Card: React.FC<CardProps> & {
  Title: typeof StyledTitle;
  Description: typeof StyledDescription;
  Grid: typeof CardGrid;
} = ({ children, ...CardProps }) => {
  return <StyledCard {...CardProps}>{children}</StyledCard>;
};

Card.Grid = CardGrid;
Card.Title = StyledTitle;
Card.Description = StyledDescription;

export default Card;
