import { DeepPartial, Theme } from '@chakra-ui/react';

const baseChakraColors: DeepPartial<Theme['colors']> = {
  transparent: 'transparent',
  black: '#000000',
  white: '#ffffff'
};

const whiteAlpha: DeepPartial<Theme['colors']['whiteAlpha']> = {
  50: 'rgba(255, 255, 255, 0.04)',
  100: 'rgba(255, 255, 255, 0.06)',
  200: 'rgba(255, 255, 255, 0.08)',
  300: 'rgba(255, 255, 255, 0.16)',
  400: 'rgba(255, 255, 255, 0.24)',
  500: 'rgba(255, 255, 255, 0.36)',
  600: 'rgba(255, 255, 255, 0.48)',
  700: 'rgba(255, 255, 255, 0.64)',
  800: 'rgba(255, 255, 255, 0.80)',
  900: 'rgba(255, 255, 255, 0.92)'
};

const blackAlpha: DeepPartial<Theme['colors']['blackAlpha']> = {
  50: 'rgba(0, 0, 0, 0.04)',
  100: 'rgba(0, 0, 0, 0.06)',
  200: 'rgba(0, 0, 0, 0.08)',
  300: 'rgba(0, 0, 0, 0.16)',
  400: 'rgba(0, 0, 0, 0.24)',
  500: 'rgba(0, 0, 0, 0.36)',
  600: 'rgba(0, 0, 0, 0.48)',
  700: 'rgba(0, 0, 0, 0.64)',
  800: 'rgba(0, 0, 0, 0.80)',
  900: 'rgba(0, 0, 0, 0.92)'
};

const gray: DeepPartial<Theme['colors']['gray']> = {
  50: '#F7FAFC',
  100: '#EDF2F7',
  200: '#E2E8F0',
  300: '#CBD5E0',
  400: '#A0AEC0',
  500: '#718096',
  600: '#4A5568',
  700: '#2D3748',
  800: '#1A202C',
  900: '#171923'
};

const red: DeepPartial<Theme['colors']['red']> = {
  50: '#FFF5F5',
  100: '#FED7D7',
  200: '#FEB2B2',
  300: '#FC8181',
  400: '#F56565',
  500: '#E53E3E',
  600: '#C53030',
  700: '#9B2C2C',
  800: '#822727',
  900: '#63171B'
};

const orange: DeepPartial<Theme['colors']['orange']> = {
  50: '#FFFAF0',
  100: '#FEEBC8',
  200: '#FBD38D',
  300: '#F6AD55',
  400: '#ED8936',
  500: '#DD6B20',
  600: '#C05621',
  700: '#9C4221',
  800: '#7B341E',
  900: '#652B19'
};

const yellow: DeepPartial<Theme['colors']['yellow']> = {
  50: '#FFFFF0',
  100: '#FEFCBF',
  200: '#FAF089',
  300: '#F6E05E',
  400: '#ECC94B',
  500: '#D69E2E',
  600: '#B7791F',
  700: '#975A16',
  800: '#744210',
  900: '#5F370E'
};

const green: DeepPartial<Theme['colors']['green']> = {
  50: '#F0FFF4',
  100: '#C6F6D5',
  200: '#9AE6B4',
  300: '#68D391',
  400: '#48BB78',
  500: '#38A169',
  600: '#2F855A',
  700: '#276749',
  800: '#22543D',
  900: '#1C4532'
};

const teal: DeepPartial<Theme['colors']['teal']> = {
  50: '#E6FFFA',
  100: '#B2F5EA',
  200: '#81E6D9',
  300: '#4FD1C5',
  400: '#38B2AC',
  500: '#319795',
  600: '#2C7A7B',
  700: '#285E61',
  800: '#234E52',
  900: '#1D4044'
};

const blue: DeepPartial<Theme['colors']['blue']> = {
  50: '#EBF8FF',
  100: '#BEE3F8',
  200: '#90CDF4',
  300: '#63B3ED',
  400: '#4299E1',
  500: '#3182CE',
  600: '#2B6CB0',
  700: '#2C5282',
  800: '#2A4365',
  900: '#1A365D'
};

const cyan: DeepPartial<Theme['colors']['cyan']> = {
  50: '#EDFDFD',
  100: '#C4F1F9',
  200: '#9DECF9',
  300: '#76E4F7',
  400: '#0BC5EA',
  500: '#00B5D8',
  600: '#00A3C4',
  700: '#0987A0',
  800: '#086F83',
  900: '#065666'
};

const purple: DeepPartial<Theme['colors']['purple']> = {
  50: '#FAF5FF',
  100: '#E9D8FD',
  200: '#D6BCFA',
  300: '#B794F4',
  400: '#9F7AEA',
  500: '#805AD5',
  600: '#6B46C1',
  700: '#553C9A',
  800: '#44337A',
  900: '#322659'
};

const pink: DeepPartial<Theme['colors']['pink']> = {
  50: '#FFF5F7',
  100: '#FED7E2',
  200: '#FBB6CE',
  300: '#F687B3',
  400: '#ED64A6',
  500: '#D53F8C',
  600: '#B83280',
  700: '#97266D',
  800: '#702459',
  900: '#521B41'
};

const linkedin: DeepPartial<Theme['colors']['linkedin']> = {
  50: '',
  100: '',
  200: '',
  300: '',
  400: '',
  500: '',
  600: '',
  700: '',
  800: '',
  900: ''
};

const facebook: DeepPartial<Theme['colors']['facebook']> = {
  50: '',
  100: '',
  200: '',
  300: '',
  400: '',
  500: '',
  600: '',
  700: '',
  800: '',
  900: ''
};

const messenger: DeepPartial<Theme['colors']['messenger']> = {
  50: '',
  100: '',
  200: '',
  300: '',
  400: '',
  500: '',
  600: '',
  700: '',
  800: '',
  900: ''
};

const whatsapp: DeepPartial<Theme['colors']['whatsapp']> = {
  50: '',
  100: '',
  200: '',
  300: '',
  400: '',
  500: '',
  600: '',
  700: '',
  800: '',
  900: ''
};

const twitter: DeepPartial<Theme['colors']['twitter']> = {
  50: '',
  100: '',
  200: '',
  300: '',
  400: '',
  500: '',
  600: '',
  700: '',
  800: '',
  900: ''
};

const telegram: DeepPartial<Theme['colors']['telegram']> = {
  50: '',
  100: '',
  200: '',
  300: '',
  400: '',
  500: '',
  600: '',
  700: '',
  800: '',
  900: ''
};

export const colors: DeepPartial<Theme['colors']> = {
  ...baseChakraColors,
  whiteAlpha,
  blackAlpha,
  gray,
  red,
  orange,
  yellow,
  green,
  teal,
  blue,
  cyan,
  purple,
  pink,
  linkedin,
  facebook,
  messenger,
  whatsapp,
  twitter,
  telegram
};
