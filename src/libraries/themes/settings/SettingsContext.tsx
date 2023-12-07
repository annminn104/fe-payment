import { createContext, useEffect, useContext, useMemo, useCallback } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import { ExistHelpers } from '@/common/helpers';
import { defaultSettings } from './config-setting';
import { ISettingsContextProps } from './types';
import { defaultPreset, getPresets, presetsOption } from './presets';

const initialState: ISettingsContextProps = {
  ...defaultSettings,
  onToggleMode: () => {},
  onChangeMode: () => {},
  onToggleDirection: () => {},
  onChangeDirection: () => {},
  onChangeDirectionByLang: () => {},
  onToggleLayout: () => {},
  onChangeLayout: () => {},
  onToggleContrast: () => {},
  onChangeContrast: () => {},
  onChangeColorPresets: () => {},
  presetsColor: defaultPreset,
  presetsOption: [],
  onToggleStretch: () => {},
  onResetSetting: () => {}
};

export const SettingsContext = createContext(initialState);

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);
  if (!context) throw new Error('useSettingsContext must be use inside SettingsProvider');

  return context;
};

interface ISettingsProviderProps {
  children: React.ReactNode;
}

export const SettingsProvider: React.FC<ISettingsProviderProps> = ({ children }) => {
  const [settings, setSettings] = useLocalStorage('settings', defaultSettings);

  const storageAvailable = ExistHelpers.localStorageAvailable();

  const langStorage = storageAvailable ? localStorage.getItem('i18nextLng') : '';

  const isArabic = langStorage === 'ar';

  useEffect(() => {
    if (isArabic) {
      onChangeDirectionByLang('ar');
    }
  }, [isArabic]);

  const onToggleMode = useCallback(() => {
    const themeMode = settings.themeMode === 'light' ? 'dark' : 'light';
    setSettings({ ...settings, themeMode });
  }, [setSettings, settings]);

  const onChangeMode = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const themeMode = event.target.value;
      setSettings({ ...settings, themeMode });
    },
    [setSettings, settings]
  );

  const onToggleLayout = useCallback(() => {
    const themeLayout = settings.themeLayout === 'vertical' ? 'mini' : 'vertical';
    setSettings({ ...settings, themeLayout });
  }, [setSettings, settings]);

  const onChangeLayout = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const themeLayout = event.target.value;
      setSettings({ ...settings, themeLayout });
    },
    [setSettings, settings]
  );

  const onChangeDirectionByLang = useCallback(
    (lang: string) => {
      const themeDirection = lang === 'ar' ? 'rtl' : 'ltr';
      setSettings({ ...settings, themeDirection });
    },
    [setSettings, settings]
  );

  const onChangeColorPresets = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const themeColorPresets = event.target.value;
      setSettings({ ...settings, themeColorPresets });
    },
    [setSettings, settings]
  );

  const onToggleStretch = useCallback(() => {
    const themeStretch = !settings.themeStretch;
    setSettings({ ...settings, themeStretch });
  }, [setSettings, settings]);

  const onResetSetting = useCallback(() => {
    setSettings(defaultSettings);
  }, [setSettings]);

  const memoizedValue = useMemo(
    () => ({
      ...settings,
      onToggleMode,
      onChangeMode,
      onToggleLayout,
      onChangeLayout,
      onChangeColorPresets,
      onChangeDirectionByLang,
      presetsOption,
      presetsColor: getPresets(settings.themeColorPresets),
      onToggleStretch,
      onResetSetting
    }),
    [
      settings,
      onToggleMode,
      onChangeMode,
      onToggleLayout,
      onChangeLayout,
      onChangeColorPresets,
      onChangeDirectionByLang,
      onToggleStretch,
      onResetSetting
    ]
  );

  return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>;
};
