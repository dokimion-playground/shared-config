import type { Preview } from "@storybook/react";
import React from "react";
import { DesignSystemProvider } from "@repo/ui";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <DesignSystemProvider>
      <Story />
    </DesignSystemProvider>
  ),
];

export default preview;
