import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className = "",
  href,
  target,
  rel,
  children,
  fullWidth = false,
  icon,
  iconPosition = "right",
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl";
  const widthClass = fullWidth ? "w-full" : "";
  
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl",
  };
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:opacity-90 shadow-lg hover:shadow-xl hover:-translate-y-1",
    secondary: "bg-gradient-to-r from-secondary-600 to-secondary-500 text-white hover:opacity-90 shadow-lg hover:shadow-xl hover:-translate-y-1",
    outline: "border border-primary-600 text-primary-600 hover:bg-primary-50 hover:border-primary-700 hover:text-primary-700",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700",
    link: "bg-transparent text-primary-600 hover:text-primary-700 underline-offset-4 hover:underline p-0",
  };

  const iconStyles = icon 
    ? iconPosition === "left" 
      ? "flex items-center gap-2" 
      : "flex items-center gap-2 flex-row-reverse"
    : "";

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${iconStyles} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
      >
        {icon && icon}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {icon && icon}
      {children}
    </button>
  );
};

export default Button; 