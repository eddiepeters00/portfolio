import styled from '@emotion/styled';

const StyledAboutContainer = styled.article({
  backgroundColor: 'whiteSmoke',
  scrollSnapAlign: 'center',
  height: '80dvh',
  width: '100%',
  display: 'flex',
});

const StyledTextContainer = styled.section({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '1rem',
});

const StyledTextGroup = styled.div({});

const StyledHeading = styled.h3({});

const StyledParagraph = styled.p({});

function About() {
  return (
    <StyledAboutContainer>
      <StyledTextContainer>
        <StyledTextGroup>
          <StyledHeading>About Me</StyledHeading>
          <StyledParagraph>
            Hi, I'm Eddie Peters, a full-stack JS developer based in Malmö,
            Sweden. My journey into programming began at Malmö University in
            2020, where I discovered my passion for coding and problem-solving.
          </StyledParagraph>
        </StyledTextGroup>
        <StyledTextGroup>
          <StyledHeading>Experience</StyledHeading>
          <StyledParagraph>
            Im recently doing my 20 week long internship at Ourliving in Malmö
            where i've been creating flexible webcomponents and adding them to a
            compnent library with storybook.
          </StyledParagraph>
        </StyledTextGroup>
        <StyledTextGroup>
          <StyledHeading>Interests</StyledHeading>
          <StyledParagraph>
            Outside of coding, you'll find me enjoying a good cup of coffee ☕,
            playing the drums 🥁, listening to some good music 🎵, and pursuing
            outdoor activities like snowboarding 🏂, skateboarding 🛹, rock
            climbing 🧗‍♂️, and disc golf 🥏.
          </StyledParagraph>
        </StyledTextGroup>
      </StyledTextContainer>

      <img
        style={{ width: '50%', objectFit: 'cover' }}
        src="./src/images/full-shot-man-working-laptop.jpg"
        alt="A picture of my beautyfull face"
      />
    </StyledAboutContainer>
  );
}

export default About;
