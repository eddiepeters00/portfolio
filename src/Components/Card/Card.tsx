import styled from '@emotion/styled';
import React from 'react';

const CardGrid = styled.div({
  display: 'flex',
  flexFlow: 'row wrap',
  gap: '2rem',
  justifyContent: 'center',
  marginTop: '20rem',
});

const StyledCard = styled.div({
  flexBasis: '80%',
  backgroundColor: '#202e4a',
  aspectRatio: '2/1',
  marginTop: '10rem',
  cursor: 'pointer',
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
  return <StyledCard {...CardProps}>{children}</StyledCard>;
};

Card.Grid = CardGrid;
Card.Title = StyledTitle;
Card.Description = StyledDescription;

export default Card;
