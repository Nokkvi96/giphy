import styled from "styled-components";
import {
  system,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  ResponsiveValue,
  TLengthStyledSystem,
  BorderProps,
  ShadowProps,
  PositionProps,
} from "styled-system";
import { Flex } from "./Flex";
import { BoxProps } from "./Box";

type Direction = "column" | "row";

type Props = BoxProps &
  BorderProps &
  ShadowProps & {
    /** Spacing between items */
    gap?: ResponsiveValue<TLengthStyledSystem>;
    direction?: ResponsiveValue<Direction>;
  };

/**
 * Stacking layout: horizontal, vertical, and responsive. Adds equal amount
 * of spacing between children.
 */
export const Stack = styled(Flex)<Props>(
  system({
    gap: {
      // @ts-ignore
      property: "> * + *",
      scale: "space",
      transform: (value, scale) => ({
        "--stack-gap": (scale as TLengthStyledSystem[])[value],
      }),
    },
    direction: {
      // @ts-ignore
      property: "&&",
      transform: (value) => ({
        flexDirection: value,
        "> * + *": {
          marginTop: value === "column" ? "var(--stack-gap)" : 0,
          marginLeft: value === "row" ? "var(--stack-gap)" : 0,
        },
      }),
    },
  })
);

Stack.defaultProps = {
  direction: "column",
};
