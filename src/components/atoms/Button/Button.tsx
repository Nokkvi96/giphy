import React, { ButtonHTMLAttributes, Component } from "react";
import styled from "styled-components";

import { buttons } from "@theme/theme";

import { Box, BoxProps } from "@components/system";

type ButtonElements = "button" | "a";

interface ConditionalProps {
  as: ButtonElements;
  type?: "submit" | "button" | "reset";
}

export type ButtonProps = BoxProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: ButtonElements;
    variant?: keyof typeof buttons;
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    block?: boolean;
    inline?: boolean;
    justify?: "center" | "space-between";
    loading?: boolean;
    selected?: boolean;
    href?: string;
    target?: string;
  };

const ButtonBase = styled(Box)<ButtonProps>`
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  position: relative;
  user-select: none;

  &:focus {
    outline: none;
    box-shadow: ${(props) => props.theme.shadows.outline || "inherit"};
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${(props) => (props.inline ? "display: inline-flex" : "")};
  ${(props) => (props.block ? "display: block; width: 100%;" : "")};
  ${(props) => (props.variant !== "clear" ? "height: 50px;" : "")}
`;

const ButtonLabel = styled.span<ButtonProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: ${(props) => props.justify};
`;

// this is a class component because Buttons often need a ref, and function components require React.forwardRef to forward refs
export class Button extends Component<ButtonProps> {
  render() {
    const {
      as = "button",
      children,
      variant = "primary",
      justify = "center",
      size = "medium",
      type = "button",
      loading,
      disabled,
      ...props
    } = this.props;

    const conditionalProps: ConditionalProps = { as };

    if (as === "button") {
      conditionalProps.type = type;
    }

    return (
      <ButtonBase
        {...conditionalProps}
        variant={variant}
        disabled={disabled || loading}
        size={size}
        {...props}
      >
        <ButtonLabel size={size} justify={justify} {...props}>
          {children}
        </ButtonLabel>
      </ButtonBase>
    );
  }
}
