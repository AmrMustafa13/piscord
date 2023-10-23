import React, { FC } from "react";

interface Props {
  label: string;
  type: React.HTMLInputTypeAttribute;
  helperText?: string;
  required?: boolean;
}

const TextInput: FC<Props> = ({
  label,
  type,
  helperText,
  required = false,
}) => {
  return (
    <div className="mb-5">
      <label
        className="block uppercase mb-2 font-bold text-xs"
        style={{
          color: "hsl( 215 calc( 1 *8.8%) 73.3% /1)",
        }}
      >
        {label}{" "}
        {required && (
          <span
            className="text-base"
            style={{
              color: "red",
            }}
          >
            *
          </span>
        )}
      </label>
      <input
        type={type}
        className="w-full rounded border-none outline-none text-white"
        style={{
          lineHeight: "20px",
          padding: "10px",
          backgroundColor: "hsl( 225 calc( 1 *6.3%) 12.5% /1)",
        }}
      />
      <p>{helperText}</p>
    </div>
  );
};

export default TextInput;
