import { useMemo } from 'react';
import { CssBaseline, createTheme, ThemeOptions, StyledEngineProvider, ThemeProvider as MUIThemeProvider } from '@mui/material';
import palettes from './variables/palettes';
import typography from './variables/typography';
import shadows from './variables/shadows';
import componentsOverride from './overrides';
import GlobalStyles from './GlobalStyles';
import { useSettingsContext } from './settings';

interface IThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const { themeMode, themeDirection } = useSettingsContext();

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: palettes(themeMode),
      typography,
      shape: { borderRadius: 8 },
      direction: themeDirection,
      shadows: shadows(themeMode)
    }),
    [themeDirection, themeMode]
  );

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};
