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
  gutter: [12, null, 17],
  container: {
    maxWidth: 1280,
    padding: [12, null, 18],
  },
};
