import styled from "styled-components";

import { theme } from "../../theme";
import { Size, Variant } from "../../ts/type";

interface ButtonProps {
  variant: Variant;
  size: Size;
}

export const Button = styled.button`
  border-radius: 0.6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  white-space: nowrap;
  gap: 8px;
  line-height: 1.6;

  padding: ${(props: ButtonProps) =>
    (props.size === "large" && "1.05rem 2.4rem") ||
    (props.size === "medium" && "0.9rem 2.0rem") ||
    (props.size === "small" && "0.6rem 1.6rem")};

  font-size: ${(props: ButtonProps) =>
    (props.size === "large" && "1.7rem") ||
    (props.size === "medium" && "1.4rem") ||
    (props.size === "small" && "1.4rem")};

  border: ${(props: ButtonProps) =>
    (props.variant === "primary" && "none") ||
    (props.variant === "secondary" && `solid 0.1rem ${theme.colors.purple[100]}`) ||
    (props.variant === "tertiary" && "none") ||
    (props.variant === "tertiary-white" && "none") ||
    (props.variant === "success" && "none") ||
    (props.variant === "success-secondary" && "none") ||
    (props.variant === "negative" && "none") ||
    (props.variant === "negative-secondary" && "none") ||
    (props.variant === "login" && "none") ||
    (props.variant === "signup" && "none")};

  background-color: ${(props: ButtonProps) =>
    (props.variant === "primary" && theme.colors.purple[200]) ||
    (props.variant === "secondary" && "transparent") ||
    (props.variant === "tertiary" && "transparent") ||
    (props.variant === "tertiary-white" && "transparent") ||
    (props.variant === "success" && theme.colors.green[400]) ||
    (props.variant === "success-secondary" && "transparent") ||
    (props.variant === "negative" && theme.colors.red[400]) ||
    (props.variant === "negative-secondary" && "transparent") ||
    (props.variant === "login" && theme.colors.purple[500]) ||
    (props.variant === "signup" && theme.colors.purple[500])};

  color: ${(props: ButtonProps) =>
    (props.variant === "primary" && theme.colors.greyScale[800]) ||
    (props.variant === "secondary" && theme.colors.purple[200]) ||
    (props.variant === "tertiary" && theme.colors.purple[200]) ||
    (props.variant === "tertiary-white" && theme.colors.greyScale[200]) ||
    (props.variant === "success" && theme.colors.greyScale[800]) ||
    (props.variant === "success-secondary" && theme.colors.green[400]) ||
    (props.variant === "negative" && theme.colors.greyScale[800]) ||
    (props.variant === "negative-secondary" && theme.colors.red[400]) ||
    (props.variant === "login" && theme.colors.greyScale[50]) ||
    (props.variant === "signup" && theme.colors.greyScale[50])};

  &:hover {
    background-color: ${(props: ButtonProps) =>
      (props.variant === "primary" && theme.colors.purple[100]) ||
      (props.variant === "tertiary" && "#b68aef1a") ||
      (props.variant === "tertiary-white" && "#ffffff1a") ||
      (props.variant === "success" && theme.colors.green[200]) ||
      (props.variant === "success-secondary" && "#4ed17e1a") ||
      (props.variant === "negative" && theme.colors.red[200]) ||
      (props.variant === "negative-secondary" && "#fe7d7d1a") ||
      (props.variant === "login" && theme.colors.purple[700]) ||
      (props.variant === "signup" && theme.colors.purple[700])};

    color: ${(props: ButtonProps) =>
      (props.variant === "secondary" && theme.colors.purple[100]) ||
      (props.variant === "tertiary" && theme.colors.purple[200]) ||
      (props.variant === "tertiary-white" && theme.colors.greyScale[200]) ||
      (props.variant === "success" && theme.colors.greyScale[800]) ||
      (props.variant === "negative" && theme.colors.greyScale[800])};
  }

  &:disabled {
    background-color: ${(props: ButtonProps) =>
      (props.variant === "primary" && theme.colors.purple[100]) ||
      (props.variant === "secondary" && theme.colors.purple[100]) ||
      (props.variant === "tertiary" && theme.colors.purple[100]) ||
      (props.variant === "tertiary-white" && theme.colors.purple[100]) ||
      (props.variant === "success" && theme.colors.green[100]) ||
      (props.variant === "success-secondary" && theme.colors.green[100]) ||
      (props.variant === "negative" && theme.colors.red[100]) ||
      (props.variant === "negative-secondary" && theme.colors.red[100]) ||
      (props.variant === "login" && "transparent") ||
      (props.variant === "signup" && "transparent")};
  }
`;
