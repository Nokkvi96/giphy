import { theme } from "src/theme";

export interface ThemeGridContainer {
  maxWidth: number;
  padding: number | any[];
}

export interface ThemeGrid {
  gutter: number | any[];
  container: ThemeGridContainer;
}

const { space } = theme;

export const defaultGrid = {
  gutter: [space.m, null, space.xl],
  container: {
    maxWidth: 1280,
    padding: [space.m, null, space.xxl],
  },
};
