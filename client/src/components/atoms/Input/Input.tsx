import { useEffect, useRef } from 'react';
import { useTheme } from 'styled-components';
import { StyledInputWrapper, StyledIcon, StyledInput } from './styles';
import { COLOR } from '../../../shared/theme/types';

interface IInputProps {
  type: 'text' | 'number' | 'email';
  id: string;
  action?: (e: any) => void;
  value?: string | number;
  required?: boolean;
  icon?: any;
  placeholder?: string;
  color?: COLOR;
}

const Input = ({
  type,
  id,
  action,
  value,
  required,
  icon,
  placeholder,
  color,
}: IInputProps) => {
  const theme = useTheme();

  const inputWrapperRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const iconRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const handleOutsideInputClick = (e: any) => {
      if (!inputWrapperRef.current?.contains(e.target)) {
        inputWrapperRef.current!.style.boxShadow = 'none';
        inputWrapperRef.current!.style.borderColor = color
          ? theme!.palette[color].main
          : theme!.palette.default.main;
        iconRef.current!.style.color = theme!.palette.default.dark;
      }
    };

    document.addEventListener('click', handleOutsideInputClick);

    return () => {
      document.removeEventListener('click', handleOutsideInputClick);
    };
  }, []);

  const handleClick = () => {
    inputWrapperRef.current!.style.boxShadow = `0px 0px 1px 3px ${
      color ? theme!.palette[color].light : theme!.palette.link.light
    }`;

    inputWrapperRef.current!.style.borderColor = color
      ? theme!.palette[color].dark
      : theme!.palette.accent;
    inputRef.current!.focus();
    iconRef.current!.style.color = theme!.palette.dark;
  };

  return (
    <StyledInputWrapper
      ref={inputWrapperRef}
      color={color}
      onClick={handleClick}
    >
      <StyledIcon ref={iconRef}>{icon && icon}</StyledIcon>
      <StyledInput
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={action}
        placeholder={placeholder ? placeholder : ''}
        required={required}
      />
    </StyledInputWrapper>
  );
};

export default Input;
