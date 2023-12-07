import { ThemeColorPresets } from './ThemeColorPresets';
import { ThemeRtlLayout } from './ThemeRtlLayout';

interface IThemeSettingsProps {
  children: React.ReactNode;
}

export const ThemeSettings: React.FC<IThemeSettingsProps> = ({ children }) => {
  return (
    <ThemeColorPresets>
      <ThemeRtlLayout>{children}</ThemeRtlLayout>
    </ThemeColorPresets>
  );
};
