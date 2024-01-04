import styled from '@emotion/styled';
import { useSpring, animated, config } from 'react-spring';
import Button from '../../components/Button/Button';

const HeroContainer = animated(
  styled.section({
    textAlign: 'center',
    cursor: 'default',
    display: 'grid',
    placeItems: 'center',
    paddingInline: '2rem',
    width: '100dvw',
  })
);
const HeroTitle = styled.h2({
  textTransform: 'capitalize',
  fontSize: '2.8rem',
  fontWeight: '400',
  color: 'whitesmoke',
});

const HeroText = styled.p({
  color: 'gray',
  fontWeight: '500',
  marginTop: '.5rem',
});

const ButtonContainer = animated(
  styled.div({
    display: 'flex',
    gap: '1rem',
    height: '4rem',
    marginTop: '2rem',
  })
);
function Hero() {
  const heroAnimation = useSpring({
    opacity: 1,
    translateY: 0,
    from: { opacity: 0, translateY: -100 },
    config: config.wobbly,
  });

  return (
    <HeroContainer style={heroAnimation}>
      <HeroTitle>Welcome to my portfolio</HeroTitle>
      <HeroText>Have a look around and dont hesitate to contact me</HeroText>
      <ButtonContainer style={heroAnimation}>
        <Button
          variant="primary"
          onClick={() => {
            console.log('Clicked');
          }}
        >
          Check out my projects
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            console.log('Clicked');
          }}
        >
          Get to know me
        </Button>
      </ButtonContainer>
    </HeroContainer>
  );
}

export default Hero;
