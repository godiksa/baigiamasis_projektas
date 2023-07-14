import { COLOR } from '../../../shared/theme/types';
import { StyledButton } from './styles';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  type: 'button' | 'reset' | 'submit';
  action: () => void;
  color?: COLOR | string;
  outline?: "true" | "false" | undefined;
}

const Button = ({ text, type, action, outline, color }: IButtonProps) => {
  return (
    <StyledButton type={type} onClick={action} color={color} outline={outline}>
      {text}
    </StyledButton>
  );
};

export default Button;
