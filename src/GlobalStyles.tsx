import { createGlobalStyle } from "styled-components";

import { theme } from "./theme";

export type ThemeProps = {
  theme: typeof theme;
};

export const GlobalStyles = createGlobalStyle<ThemeProps>`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html {
	font-size: 62.5%;
}

body {
	font-family: ${theme.typoGraphy.fontFamily};
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: ${theme.colors.greyScale[100]};
	font-size: 1.6rem;
	line-height: 1.6;
	width: 100vw;
	height: 100vh;
}
`;
