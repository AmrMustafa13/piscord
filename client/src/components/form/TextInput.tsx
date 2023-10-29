import React, { FC, useState } from "react";

interface Props {
  label: string;
  name?: string;
  type: React.HTMLInputTypeAttribute;
  helperText?: string;
  required?: boolean;
}

const TextInput: FC<Props> = ({ label, name, type, helperText, required = false }) => {

  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }


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
        name={name}
        className="w-full rounded border-none outline-none text-white"
        style={{
          lineHeight: "20px",
          padding: "10px",
          backgroundColor: "hsl( 225 calc( 1 *6.3%) 12.5% /1)",
        }}
        onChange={handleChange}
        value={value}
      />
      <p>{helperText}</p>
    </div>
  );
};

export default TextInput;
