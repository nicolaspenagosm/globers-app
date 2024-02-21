import type { Preview } from "@storybook/react";
import { GlobalStyles, darkTheme, lightTheme } from "../src/App.styled";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import {  ThemeProvider } from "styled-components";
import { withThemeBackground } from "./decorators/globalDecorators";
import './styles/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: "dark",
    Provider: ThemeProvider,
    GlobalStyles,
  }),
withThemeBackground
  
  
];

export default preview;
