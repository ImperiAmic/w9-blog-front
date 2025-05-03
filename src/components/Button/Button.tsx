import { ComponentProps, PropsWithChildren } from "react";
import "./Button.css";

interface ButtonProps extends ComponentProps<"button"> {
  action?: () => void;
  modifier?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
  ariaRole?: "img";
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  action,
  type = "button",
  modifier,
  ariaLabel,
  ariaRole,
  ...buttonProps
}) => {
  const modifierClass = modifier ? ` button--${modifier}` : "";

  return (
    <button
      className={`button${modifierClass}`}
      type={type}
      onClick={action}
      aria-label={ariaLabel}
      role={ariaRole}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
