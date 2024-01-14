import styled from '@emotion/styled';
import { colors } from '../../assets/colors/colors';
import { styles } from '../../assets/styles/styles';

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

function Header() {
  return (
    <StyledHeader>
      <StyledLogo>Eddie Peters</StyledLogo>
      <div>Light/Dark Mode</div>
    </StyledHeader>
  );
}

export default Header;
