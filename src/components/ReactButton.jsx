import React from "react";

const ReactButton = ({
  disabled,
  buttonClassName,
  buttonType = "button",
  children,
  onClick,
}) => {
  return (
    <button
      className={`${buttonClassName} py-3 bg-red-500 rounded-2xl px-4 block   ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
      disabled={disabled}
      type={buttonType}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ReactButton;
