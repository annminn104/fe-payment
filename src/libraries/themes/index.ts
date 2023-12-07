import { extendTheme } from '@chakra-ui/react';
import { foundations } from './foundations';
import { config } from './config';
import { components } from './components';
import textStyles from './text';

const customTheme = extendTheme({
  ...foundations,
  components,
  config,
  textStyles,

});

export default customTheme;
