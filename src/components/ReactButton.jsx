import React from "react";

const ReactButton = ({
  disabled,
  buttonClassName,
  buttonType = "button",
  buttonText,
}) => {
  return (
    <button
      className={`${buttonClassName} py-3 bg-red-500 rounded-2xl px-4 block w-1/2 mx-auto  ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
      disabled={disabled}
      type={buttonType}
    >
      {buttonText}
    </button>
  );
};

export default ReactButton;
