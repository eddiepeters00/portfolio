import styled from '@emotion/styled';
import { colors } from '../../assets/colors/colors';

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
  textShadow:
    '0 0 2px #fff,0 1px #fff,0 0 4px #fff,0 0 6px #fb5e58,0 0 10px #fb5e58,0 0 12px #fb5e58,0 0 5px #fb5e58,0 0 5px #fb5e58',
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
