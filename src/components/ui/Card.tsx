import React from "react";

type CardVariant = "default" | "glass" | "outline" | "gradient";

interface CardProps {
  variant?: CardVariant;
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  onClick?: () => void;
  padding?: "none" | "sm" | "md" | "lg";
}

export const Card: React.FC<CardProps> = ({
  variant = "default",
  className = "",
  children,
  hover = true,
  onClick,
  padding = "md",
}) => {
  const baseClasses = "rounded-2xl transition-all duration-300";
  
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };
  
  const variantClasses = {
    default: "bg-white shadow-card border border-gray-100",
    glass: "glass-card backdrop-blur-md bg-white/80 border border-white/20",
    outline: "border border-gray-200 bg-white/50",
    gradient: "bg-gradient-to-br from-primary-50 to-white border border-primary-100"
  };
  
  const hoverClasses = hover 
    ? "hover:-translate-y-1 hover:shadow-card-hover cursor-pointer" 
    : "";
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${paddings[padding]} ${hoverClasses} ${className}`;
  
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card; 