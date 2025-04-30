import type { Preview } from '@storybook/react'

import '@fontsource/libre-franklin/400.css';
import '@fontsource/libre-franklin/700.css';
import '@fontsource/im-fell-english';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
