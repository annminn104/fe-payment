import { DeepPartial, Theme } from "@chakra-ui/react";

export const blur: DeepPartial<Theme['blur']>  = {
  none: 0,
  sm: '4px',
  base: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '40px',
  '3xl': '64px'
}
