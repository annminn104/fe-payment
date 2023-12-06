import { DeepPartial, Theme } from '@chakra-ui/react';
import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { fonts } from './fonts';
import { space } from './space';
import { sizes } from './sizes';
import { radius } from './radius';
import { zIndices } from './z-index';
import { shadows } from './shadows';
import { transition } from './transition';
import { blur } from './blur';
import { borders } from './borders';

export const foundations: DeepPartial<
  Pick<
    Theme,
    | 'colors'
    | 'fonts'
    | 'fontSizes'
    | 'fontWeights'
    | 'lineHeights'
    | 'letterSpacings'
    | 'breakpoints'
    | 'space'
    | 'sizes'
    | 'radii'
    | 'zIndices'
    | 'shadows'
    | 'transition'
    | 'blur'
    | 'borders'
  >
> = {
  ...fonts,
  transition,
  radii: radius,
  colors,
  breakpoints,
  space,
  sizes,
  zIndices,
  shadows,
  blur,
  borders
};
