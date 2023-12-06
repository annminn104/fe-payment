import { DeepPartial, Theme } from '@chakra-ui/react'

const transitionProperty: DeepPartial<Omit<Theme['transition']['property'], 'property'>> = {
  common: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
  colors: 'background-color, border-color, color, fill, stroke',
  dimensions: 'width, height',
  position: 'left, right, top, bottom',
  background: 'background-color, background-image, background-position'
}
const transitionTimingFunction: DeepPartial<Omit<Theme['transition']['easing'], 'easing'>> = {
  'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
  'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
  'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
}
const transitionDuration: DeepPartial<Omit<Theme['transition']['duration'], 'duration'>> = {
  'ultra-fast': '50ms',
  faster: '100ms',
  fast: '150ms',
  normal: '200ms',
  slow: '300ms',
  slower: '400ms',
  'ultra-slow': '500ms'
}
export const transition: DeepPartial<Theme['transition']> = {
  property: transitionProperty,
  easing: transitionTimingFunction,
  duration: transitionDuration
}
