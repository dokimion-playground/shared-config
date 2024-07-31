import React from 'react';
import type { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import theme from './styles/theme';

const DesignSystemProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default DesignSystemProvider;
