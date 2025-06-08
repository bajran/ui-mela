import type { Preview } from '@storybook/react';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { initialize, mswLoader } from 'msw-storybook-addon';

initialize();

import '../src/index.css';

const preview: Preview = {
  decorators: [
    withThemeByDataAttribute({
      defaultTheme: 'light',
      themes: {
        light: 'light',
        dark: 'dark',
      },
      attributeName: 'data-mode',
    }),
  ],
  loaders: [mswLoader],
};

export default preview;
