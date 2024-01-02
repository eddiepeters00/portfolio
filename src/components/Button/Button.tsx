import styled from '@emotion/styled';
import { ReactNode } from 'react';

const StyledButton = styled.button({
  borderRadius: '.25rem',
  color: 'whitesmoke',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  padding: '.8rem',

  /* variant */
  '&.primary': {
    backgroundColor: '#fb5e58',
  },

  '&.secondary': {
    backgroundColor: 'green',
  },

  '&.outlined': {
    backgroundColor: '#202e4a',
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
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ variant, size, onClick, children }: ButtonProps) {
  return (
    <StyledButton className={`${variant} ${size}`} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
