import { createGlobalStyle } from "styled-components";

import { theme } from "./theme";

export type ThemeProps = {
  theme: typeof theme;
};

export const GlobalStyle = createGlobalStyle<ThemeProps>`
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
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

export default GlobalStyle;
