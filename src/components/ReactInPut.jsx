import React from "react";

const ReactInPut = ({ label, error, ...props }) => {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-3 ">
        {label && (
          <label htmlFor={label} className=" text-xl">
            {label}
          </label>
        )}

        <input
          id={label}
          className="px-2 py-3 border  flex-1 rounded-2xl"
          {...props}
        />
      </div>
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
    </div>
  );
};

export default ReactInPut;
