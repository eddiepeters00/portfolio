import styled from '@emotion/styled';
import { colors } from '../../assets/colors/colors';
import { styles } from '../../assets/styles/styles';
import { images } from '../../assets/images/';

const StyledHeader = styled.header({
  color: colors.textColor.white,
  position: 'fixed',
  top: '0',
  display: 'flex',
  flexFlow: 'row noWrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  width: '100%',
});

const StyledLogo = styled.h1({
  color: 'black',
  textShadow: styles.neon,
});

const SocialMediaContainer = styled.div({
  display: 'flex',
  gap: '2rem',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '1rem',
});

const SocialMediaIcon = styled.img({
  maxWidth: '100%',
  width: '4rem',
  backgroundColor: 'white',
  borderRadius: '1rem',
  padding: '.5rem',
});

function Header() {
  return (
    <StyledHeader>
      <StyledLogo>Eddie Peters</StyledLogo>
      <SocialMediaContainer>
        <SocialMediaIcon src={images.github}></SocialMediaIcon>
        <SocialMediaIcon src={images.linkedin}></SocialMediaIcon>
      </SocialMediaContainer>
    </StyledHeader>
  );
}

export default Header;
