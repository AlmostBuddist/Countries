import { ComponentProps, ReactNode } from "react";
import styled from "./Button.module.css";

interface IButton extends ComponentProps<"button"> {
  children: ReactNode;
  buttonStyle?: "square" | "rounded" | "icon";
}

export default function Button({
  children,
  buttonStyle = "rounded",
  ...buttonProps
}: IButton) {
  const { className, ...otherButtonProps } = buttonProps;
  return (
    <button
      className={`${styled["my-button"]} ${styled[buttonStyle]} ${className}`}
      {...otherButtonProps}
    >
      {children}
    </button>
  );
}
