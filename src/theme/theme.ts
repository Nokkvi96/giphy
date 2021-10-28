import { darken, modularScale } from "polished";

import { ThemeGrid } from "@components/system";
import { DefaultTheme } from "styled-components";

import { colors } from "./colors";
import { grid } from "./grid";

let fontSizes = [];
for (let i = 0; i < 20; i++) {
  fontSizes[i] = modularScale(i - 2, "1rem", "majorSecond");
}

const space = {
  xxxs: fontSizes[2],
  xxs: fontSizes[3],
  xs: fontSizes[4],
  s: fontSizes[6],
  m: fontSizes[8],
  l: fontSizes[11],
  xl: fontSizes[14],
  xxl: fontSizes[17],
};

const buttonBase = {
  fontWeight: "bold",
  border: "1px solid",
  borderColor: "primary",
  padding: "0 20px",
  height: 50,
  borderRadius: 10,
};

export const buttons = {
  primary: {
    ...buttonBase,
    bg: "primary",
    color: "white",
    ["&:hover, &:focus"]: {
      backgroundColor: darken(0.2, colors.primary),
    },
  },
  secondary: {
    ...buttonBase,
    color: "black",
  },
  clear: {
    backgroundColor: "transparent",
    border: "none",
    padding: "0",
    height: "auto",
  },
};

const fonts = {
  body: "Poppins, sans-serif",
  heading: "Lora, serif",
};

const shadows = {
  small: "0 0 4px rgba(0, 0, 0, .125)",
  medium: "0 0 12px rgba(0, 0, 0, .125)",
  large: "0 0 24px rgba(0, 0, 0, .125)",
  outline: "0px 0px 0px 4px rgba(0, 0, 0, 0.1);",
};

export interface CustomTheme {
  breakpoints: string[];
  fontSizes: typeof fontSizes;
  colors: typeof colors;
  space: typeof space;
  fonts: typeof fonts;
  shadows: typeof shadows;
  buttons: typeof buttons;
  outline?: string;
  grid: ThemeGrid;
}

export const theme: DefaultTheme = {
  breakpoints: ["40rem", "52rem", "64rem", "80rem"],
  fontSizes,
  space,
  fonts,
  shadows,
  outline: `5px auto #5E9ED6`,
  colors,
  buttons,
  grid,
};
