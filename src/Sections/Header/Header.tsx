import styled from '@emotion/styled';

const StyledHeader = styled.header({
  color: 'white',
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
      <p>Contact</p>
    </StyledHeader>
  );
}

export default Header;
