import styled from '@emotion/styled';
import { colors } from '../../assets/colors';

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

function Header() {
  return (
    <StyledHeader>
      <p>Eddie Peters</p>
      <div>Light/Dark Mode</div>
    </StyledHeader>
  );
}

export default Header;
