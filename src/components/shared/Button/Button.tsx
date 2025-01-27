import { ButtonHTMLAttributes, FC } from "react";

type ButtonVariantType = "danger" | "action" | "info";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  variant?: ButtonVariantType;
};

const variantClasses: Record<ButtonVariantType, string> = {
  danger: "bg-rose-200 hover:bg-rose-300",
  info: "bg-sky-200 hover:bg-sky-300",
  action: "bg-green-200 hover:bg-green-300",
};

export const Button: FC<ButtonProps> = ({
  variant = "action",
  text,
  ...rest
}) => {
  const buttonColor = variantClasses[variant];

  return (
    <button
      className={`${buttonColor} w-44 h-16 cursor-pointer shadow-lg rounded-lg p-4`}
      {...rest}
    >
      {text}
    </button>
  );
};
