import styled from '@emotion/styled';
import { colors } from '../../assets/colors/colors';

const StyledButton = styled.button({
  borderRadius: '.25rem',
  border: `1px solid ${colors.backgroundColor.deepBlue}`,
  color: colors.textColor.white,
  fontWeight: 'bold',
  textTransform: 'uppercase',
  padding: '0.6em 1.2em',
  fontSize: '1em',
  fontFamily: 'inherit',
  cursor: 'pointer',
  transition: '.2s ease',

  ':hover': {
    boxShadow: `0px 0px 10px 4px ${colors.backgroundColor.lightRed}`,
  },

  ':focus, :focus-visible': {
    outline: ' 4px auto -webkit-focus-ring-color',
  },

  /* variant */
  '&.primary': {
    backgroundColor: colors.backgroundColor.lightRed,
  },

  '&.secondary': {
    backgroundColor: colors.backgroundColor.deepBlue,
  },

  '&.outlined': {
    backgroundColor: colors.backgroundColor.deepBlue,
  },

  /* Size */
  '&.small': { width: '25%' },

  '&.medium': { width: '50%' },

  '&.large': { width: '100%' },
});

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  onClick(): void;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ variant, size, onClick, children }: ButtonProps) {
  return (
    <StyledButton className={`${variant} ${size}`} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
