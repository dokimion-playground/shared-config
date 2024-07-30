import React from 'react';
import type { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import theme from './styles/theme';
import { ToastProvider } from './components';

const DesignSystemProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastProvider>
        {children}
        <div id="root-modal"></div>
      </ToastProvider>
      {children}
    </ThemeProvider>
  );
};

export default DesignSystemProvider;
