import { fonts } from './foundations/fonts';
const { fontSizes, fontWeights, lineHeights } = fonts;

const textStyles = {
  display1: {
    fontSize: fontSizes['7xl'],
    fontWeight: fontWeights['semibold'],
    lineHeight: `calc(${fontSizes['7xl']} + ${lineHeights['7']})`
  },

  display2: {
    fontSize: fontSizes['6xl'],
    fontWeight: fontWeights['semibold'],
    lineHeight: `calc(${fontSizes['6xl']} + ${lineHeights['6']})`
  },

  h1Semi: {
    fontSize: fontSizes['5xl'],
    fontWeight: fontWeights['semibold'],
    lineHeight: `calc(${fontSizes['5xl']} + ${lineHeights['5']})`
  },

  body1: {
    fontSize: fontSizes['md'],
    fontWeight: fontWeights['normal'],
    lineHeight: `calc(${fontSizes['md']} + ${lineHeights['shorter']})`
  },

  body1Semi: {
    fontSize: fontSizes['md'],
    fontWeight: fontWeights['semibold'],
    lineHeight: `calc(${fontSizes['md']} + ${lineHeights['shorter']})`
  },

  body2: {
    fontSize: fontSizes['sm'],
    fontWeight: fontWeights['normal'],
    lineHeight: `calc(${fontSizes['sm']} + ${lineHeights['none']})`
  },

  body2Semi: {
    fontSize: fontSizes['sm'],
    fontWeight: fontWeights['semibold'],
    lineHeight: `calc(${fontSizes['sm']} + ${lineHeights['none']})`
  }
};

export type TextStyles = typeof textStyles;

export default textStyles;
