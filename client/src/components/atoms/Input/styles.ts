import { styled } from 'styled-components';
import { COLOR } from '../../../shared/theme/types';

interface IStyledInputProps {
  icon?: any;
  placeholder?: string;
  color?: COLOR;
}

export const StyledInputWrapper = styled.div<IStyledInputProps>`
  display: flex;
  align-items: center;
  width: 100%;

  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.color
      ? props.theme.palette[props.color].main
      : props.theme.palette.default.main};
  border-radius: 0.375em;
`;

export const StyledIcon = styled.span<IStyledInputProps>`
  color: #d0d0d0;
`;

export const StyledInput = styled.input<IStyledInputProps>`
  width: 100%;
  outline: none;
  border: none;
  padding-left: calc(0.75em - 1px);

  font-size: 1em;
  line-height: 1.5;
  color: ${(props) => props.theme.palette.dark};

  padding: calc(0.5em - 1px) calc(0.75em - 1px);
  border-radius: 0.375em;

  &::placeholder {
    color: #d0d0d0;
  }
`;
