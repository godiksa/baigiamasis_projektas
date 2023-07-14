import { styled } from 'styled-components';
import { COLOR } from '../../../shared/theme/types';

interface IStyledButtonProps {
  outline?: "true" | "false" | undefined;
  color?: COLOR | string;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  min-width: 103px;

  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.color
      ? props.theme.palette[props.color].main
      : props.theme.palette.default.main};
  border-radius: 0.375em;
  outline: none;
  padding: calc(0.5em - 1px) 1em;

  background-color: ${(props) =>
    props.color && props.outline
      ? props.theme.palette.white
      : props.color
      ? props.theme.palette[props.color].main
      : props.theme.palette.white};
  color: ${(props) =>
    props.outline && props.color
      ? props.theme.palette[props.color].main
      : props.color
      ? props.theme.palette.white
      : props.theme.palette.dark};
  font-size: 1em;
  line-height: 1.5;

  cursor: pointer;

  &:hover {
    border-color: ${(props) =>
      props.color && props.outline
        ? props.theme.palette[props.color].main
        : props.color
        ? props.theme.palette[props.color].main
        : props.theme.palette.default.dark};

    background-color: ${(props) =>
      props.color && props.outline
        ? props.theme.palette[props.color].main
        : props.color
        ? props.theme.palette[props.color].main
        : props.theme.palette.white};

    box-shadow: ${(props) =>
      props.color && props.outline
        ? 'none'
        : props.color
        ? 'inset 1px 1px 100px rgba(20, 20, 20, .05);'
        : 'none'};

    color: ${(props) =>
      props.color && props.outline
        ? props.theme.palette.light
        : props.color
        ? props.theme.palette.light
        : props.theme.palette.dark};

    transition: box-shadow 200ms;
  }
`;
