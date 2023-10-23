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
    <div style={{ marginBottom: "20px" }}>
      <label
        style={{
          display: "block",
          textTransform: "uppercase",
          color: "hsl( 215 calc( 1 *8.8%) 73.3% /1)",
          marginBottom: "8px",
          fontWeight: "700",
          fontSize: "12px",
        }}
      >
        {label}{" "}
        {required && (
          <span
            style={{
              color: "red",
              fontSize: "15px",
            }}
          >
            *
          </span>
        )}
      </label>
      <input
        type={type}
        style={{
          width: "100%",
          lineHeight: "20px",
          padding: "10px",
          backgroundColor: "hsl( 225 calc( 1 *6.3%) 12.5% /1)",
          borderRadius: "3px",
          border: "none",
          outline: "none",
          color: "white",
        }}
      />
      <p>{helperText}</p>
    </div>
  );
};

export default TextInput;

/*
  Discord Fonts
  --font-primary: "gg sans","Noto Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
  --font-headline: "ABC Ginto Nord","Noto Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
  --font-code: Consolas,"Andale Mono WT","Andale Mono","Lucida Console","Lucida Sans Typewriter","DejaVu Sans Mono","Bitstream Vera Sans Mono","Liberation Mono","Nimbus Mono L",Monaco,"Courier New",Courier,monospace;

*/
