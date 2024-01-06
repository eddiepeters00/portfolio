import styled from '@emotion/styled';
import { colors } from '../../assets/colors';

const StyledButton = styled.button({
  borderRadius: '.25rem',
  color: colors.textColor.white,
  fontWeight: 'bold',
  textTransform: 'uppercase',
  padding: '.8rem',

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
