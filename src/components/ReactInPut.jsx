import Image from "next/image";
import React from "react";

const ReactInPut = ({
  containerClassName,
  inputClassName,
  label,
  id,
  error,
  icon,
  inputType = "text",
  ...props
}) => {
  return (
    <div className="mb-5">
      <div className={`flex items-center gap-3 ${containerClassName}`}>
        {label && (
          <label htmlFor={id} className="text-xl w-1/4">
            {label}
          </label>
        )}

        {/* Wrapper */}
        <div className="relative flex-1">
          <input
            id={id}
            type={inputType}
            className={`w-full px-3 py-3 border rounded-2xl pr-10 ${inputClassName}`}
            {...props}
          />

          {icon && (
            <div className="absolute top-1/2 right-3 -translate-y-1/2">
              {icon}
            </div>
          )}
        </div>
      </div>
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
    </div>
  );
};

export default ReactInPut;
