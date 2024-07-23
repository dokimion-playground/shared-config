import React from "react";
import type { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import theme from "./styles/theme";

const DesignSystemProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div id="root"></div>
      <div id="root-modal"></div>
      {children}
    </ThemeProvider>
  );
};

export default DesignSystemProvider;
