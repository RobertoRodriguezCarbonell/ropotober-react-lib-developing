import React from "react";

const SecondaryButton = ({
  // Default values
  text = "",
  size = "md",
  bgColor = "transparent", // Por defecto, fondo transparente
  hover = "",
  textColor = "secondary-text",
  width = "fit-content",
  rounded = "md",
  className = "",
  borderSize = "md", // Nuevo prop para tamaño del borde
  borderColor = "primary-border", // Nuevo prop para color del borde
  ...props
}) => {
  const sizeClasses = {
    xsm: "px-[18px] py-[4px] text-[12px] h-[32px]",
    sm: "px-[20px] py-[6px] text-[14px] h-[40px]",
    md: "px-[22px] py-[8px] text-[16px] h-[48px]",
    lg: "px-[24px] py-[10px] text-[18px] h-[56px]",
    xlg: "px-[26px] py-[12px] text-[20px] h-[64px]",
  };

  const roundedClasses = {
    none: "rounded-[0px]",
    sm: "rounded-[2px]",
    md: "rounded-[6px]",
    lg: "rounded-[8px]",
    full: "rounded-[9999px]",
  };

  const borderSizeClasses = {
    xsm: "border-[2px]",
    sm: "border-[3px]",
    md: "border-[4px]",
    lg: "border-[5px]",
    xlg: "border-[6px]",
  };

  const borderColorClasses = {
    "primary-border": "border-primary",
    "success-border": "border-success",
    "info-border": "border-info",
    "destroy-border": "border-destroy",
    "warning-border": "border-warning",
    "cranberry-border": "border-cranberry",
    "primary-border": "border-black",
  };

  const bgColorClasses = {
    transparent: "bg-transparent", // Opción para fondo transparente
    "primary-background": "bg-primary-background",
    "primary-background-hover": "bg-primary-background-hover",
    "success-50": "bg-success-50",
    "success-100": "bg-success-100",
    "success-200": "bg-success-200",
    "success-300": "bg-success-300",
    "success-400": "bg-success-400",
    "success-500": "bg-success-500",
    "success-600": "bg-success-600",
    "success-700": "bg-success-700",
    "success-800": "bg-success-800",
    "success-900": "bg-success-900",
    "success-950": "bg-success-950",
    "info-50": "bg-info-50",
    "info-100": "bg-info-100",
    "info-200": "bg-info-200",
    "info-300": "bg-info-300",
    "info-400": "bg-info-400",
    "info-500": "bg-info-500",
    "info-600": "bg-info-600",
    "info-700": "bg-info-700",
    "info-800": "bg-info-800",
    "info-900": "bg-info-900",
    "info-950": "bg-info-950",
    "destroy-50": "bg-destroy-50",
    "destroy-100": "bg-destroy-100",
    "destroy-200": "bg-destroy-200",
    "destroy-300": "bg-destroy-300",
    "destroy-400": "bg-destroy-400",
    "destroy-500": "bg-destroy-500",
    "destroy-600": "bg-destroy-600",
    "destroy-700": "bg-destroy-700",
    "destroy-800": "bg-destroy-800",
    "destroy-900": "bg-destroy-900",
    "destroy-950": "bg-destroy-950",
    "warning-50": "bg-warning-50",
    "warning-100": "bg-warning-100",
    "warning-200": "bg-warning-200",
    "warning-300": "bg-warning-300",
    "warning-400": "bg-warning-400",
    "warning-500": "bg-warning-500",
    "warning-600": "bg-warning-600",
    "warning-700": "bg-warning-700",
    "warning-800": "bg-warning-800",
    "warning-900": "bg-warning-900",
    "warning-950": "bg-warning-950",
    "cranberry-50": "bg-cranberry-50",
    "cranberry-100": "bg-cranberry-100",
    "cranberry-200": "bg-cranberry-200",
    "cranberry-300": "bg-cranberry-300",
    "cranberry-400": "bg-cranberry-400",
    "cranberry-500": "bg-cranberry-500",
    "cranberry-600": "bg-cranberry-600",
    "cranberry-700": "bg-cranberry-700",
    "cranberry-800": "bg-cranberry-800",
    "cranberry-900": "bg-cranberry-900",
    "cranberry-950": "bg-cranberry-950",
  };

  const textColorClasses = {
    "primary-text": "text-primary-text",
    "secondary-text": "text-secondary-text"
  };

  const sizeClass = sizeClasses[size] || sizeClasses.md;
  const bgColorClass = bgColorClasses[bgColor] || bgColorClasses.transparent; // Fondo transparente por defecto
  const textColorClass = textColorClasses[textColor] || textColorClasses["primary-text"];
  const roundedClass = roundedClasses[rounded] || roundedClasses.md;
  const borderSizeClass = borderSizeClasses[borderSize] || borderSizeClasses.xsm;
  const borderColorClass = borderColorClasses[borderColor] || "";

  return (
    <div
      className={`font-bold cursor-pointer flex items-center justify-center transition-colors ${sizeClass} ${bgColorClass} ${textColorClass} ${roundedClass} ${borderSizeClass} ${borderColorClass} ${className} ${hover}`}
      style={{
        width,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
      {...props}
    >
      {text}
    </div>
  );
};

export default SecondaryButton;
