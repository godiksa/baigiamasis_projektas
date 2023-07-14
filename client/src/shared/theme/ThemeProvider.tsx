import { ReactNode } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

const theme = {
  palette: {
    white: '#ffffff',
    light: '#f5f5f5',
    black: '#0a0a0a',
    dark: '#363636',
    accent: '#485fc7',
    default: {
      dark: '#b5b5b5',
      main: '#dbdbdb',
      light: '#f5f5f5',
    },
    primary: {
      dark: '#00947e',
      main: '#00d1b2',
      light: '#ebfffc',
    },
    link: {
      dark: '#2160c4',
      main: '#3273dc',
      light: '#eef3fc',
    },
    info: {
      dark: '#1d72aa',
      main: '#209cee',
      light: '#eef6fc',
    },
    success: {
      dark: '#257942',
      main: '#23d160',
      light: '#effaf3',
    },
    warning: {
      dark: '#947600',
      main: '#ffdd57',
      light: '#fffbeb',
    },
    danger: {
      dark: '#cc0f35',
      main: '#ff3860',
      light: '#feecf0',
    },
    shades: {
      blackBis: '#121212',
      blackTer: '#242424',
      greyDarker: '#363636',
      greyDark: '#4a4a4a',
      grey: '#7a7a7a',
      greyLight: '#b5b5b5',
      greyLighter: '#dbdbdb',
      whiteTer: '#f5f5f5',
      whiteBis: '#fafafa',
    },
  },
};

interface IThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: IThemeProviderProps) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;
