import React from "react";

const ReactInPut = ({
  containerClassName,
  inputClassName,
  label,
  id,
  error,
  inputType = "text",
  ...props
}) => {
  return (
    <div className="mb-5">
      <div className={`flex items-center gap-3 ${containerClassName}`}>
        {label && (
          <label htmlFor={id} className=" text-xl">
            {label}
          </label>
        )}

        <input
          id={id}
          className={`px-2 py-3 border  flex-1 rounded-2xl ${inputClassName}`}
          {...props}
          type={inputType}
        />
      </div>
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
    </div>
  );
};

export default ReactInPut;
