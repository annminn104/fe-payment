import { ThemeProvider as MuiThemeProvider } from '@/libraries/themes';

interface IMuiProviderProps {
  children?: React.ReactNode;
}

const MuiProvider: React.FC<IMuiProviderProps> = ({ children }) => {
  return <MuiThemeProvider>{children}</MuiThemeProvider>;
};

export default MuiProvider;
