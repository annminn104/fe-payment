interface IColorVariants {
  name: string;
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
}

export type ThemeModeValue = 'light' | 'dark';
export type ThemeDirectionValue = 'rtl' | 'ltr';
export type ThemeContrastValue = 'default' | 'bold';
export type ThemeLayoutValue = 'vertical' | 'horizontal' | 'mini';
export type ThemeColorPresetsValue = 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red';
export type ThemeStretchValue = boolean;

export interface ISettingsValueProps {
  themeMode: ThemeModeValue;
  themeLayout: ThemeLayoutValue;
  themeStretch: ThemeStretchValue;
  themeContrast: ThemeContrastValue;
  themeDirection: ThemeDirectionValue;
  themeColorPresets: ThemeColorPresetsValue;
}

export interface ISettingsContextProps extends ISettingsValueProps {
  presetsColor: IColorVariants;
  presetsOption: {
    name: string;
    value: string;
  }[];

  onToggleMode: VoidFunction;
  onChangeMode: (event: React.ChangeEvent<HTMLInputElement>) => void;

  onToggleDirection: VoidFunction;
  onChangeDirection: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDirectionByLang: (lang: string) => void;

  onToggleLayout: VoidFunction;
  onChangeLayout: (event: React.ChangeEvent<HTMLInputElement>) => void;

  onToggleContrast: VoidFunction;
  onChangeContrast: (event: React.ChangeEvent<HTMLInputElement>) => void;

  onChangeColorPresets: (event: React.ChangeEvent<HTMLInputElement>) => void;

  onToggleStretch: VoidFunction;

  onResetSetting: VoidFunction;
}
