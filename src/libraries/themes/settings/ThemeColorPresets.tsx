import merge from 'lodash/merge';
import { useMemo } from 'react';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import { useSettingsContext } from './SettingsContext';

interface IThemeColorPresetsProps {
  children: React.ReactNode;
}

export const ThemeColorPresets: React.FC<IThemeColorPresetsProps> = ({ children }) => {
  const outerTheme = useTheme();
  const { presetsColor } = useSettingsContext();

  const themeOptions = useMemo(
    () => ({
      palette: {
        primary: presetsColor
      }
    }),
    [presetsColor]
  );

  const theme = createTheme(merge(outerTheme, themeOptions));

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
