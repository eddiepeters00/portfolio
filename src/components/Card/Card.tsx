import styled from '@emotion/styled';
import React from 'react';

const CardGrid = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat( auto-fill, minmax(250px, 1fr) )',
  gap: '2rem',
  margin: '4rem',
});

const StyledCard = styled.div({
  backgroundColor: 'green',
  aspectRatio: '3/4',
});

const StyledTitle = styled.h3({});

const StyledDescription = styled.p({});

type CardProps = {
  url?: string;
  children: React.ReactNode;
};

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
