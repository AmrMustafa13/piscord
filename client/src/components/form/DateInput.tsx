import { FC } from "react";

interface Props {
  label: string;
  required?: boolean;
}
const MonthsList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const currentYear = new Date().getFullYear();
const maxYearsBefore = 80;
const DateInput: FC<Props> = ({ label, required = false }) => {
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
      <div
        style={{
          display: "flex",
          gap: "5px",
        }}
      >
        <select
          placeholder="Month"
          style={{
            lineHeight: "20px",
            padding: "10px",
            backgroundColor: "hsl( 225 calc( 1 *6.3%) 12.5% /1)",
            borderRadius: "3px",
            border: "none",
            outline: "none",
            color: "white",
            flex: "1",
          }}
        >
          <option value="" selected disabled hidden>
            Month
          </option>
          {MonthsList.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <select
          placeholder="Day"
          style={{
            lineHeight: "20px",
            padding: "10px",
            backgroundColor: "hsl( 225 calc( 1 *6.3%) 12.5% /1)",
            borderRadius: "3px",
            border: "none",
            outline: "none",
            color: "white",
            flex: "1",
          }}
        >
          <option value="" selected disabled hidden>
            Day
          </option>
          (
          {Array(31)
            .fill(0)
            .map((_, index) => (
              <option key={index} value={index + 1} style={{}}>
                {index + 1}
              </option>
            ))}
          )
        </select>
        <select
          placeholder="Year"
          style={{
            lineHeight: "20px",
            padding: "10px",
            backgroundColor: "hsl( 225 calc( 1 *6.3%) 12.5% /1)",
            borderRadius: "3px",
            border: "none",
            outline: "none",
            color: "white",
            flex: "1",
          }}
        >
          <option value="" selected disabled hidden>
            Year
          </option>
          {Array(maxYearsBefore)
            .fill(0)
            .map((_, index) => (
              <option key={index} value={currentYear - index}>
                {currentYear - index}
              </option>
            ))}
        </select>
      </div>
      {/* <input
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
      /> */}
    </div>
  );
};

export default DateInput;

/*
  --font-primary: "gg sans","Noto Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
  --font-headline: "ABC Ginto Nord","Noto Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
  --font-code: Consolas,"Andale Mono WT","Andale Mono","Lucida Console","Lucida Sans Typewriter","DejaVu Sans Mono","Bitstream Vera Sans Mono","Liberation Mono","Nimbus Mono L",Monaco,"Courier New",Courier,monospace;

*/
