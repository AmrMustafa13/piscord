import { FC, useState } from "react";

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

  const [day, setDay] = useState("Day");
  const [month, setMonth] = useState("Month");
  const [year, setYear] = useState("Year");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "month":
        setMonth(value);
        break;
      case "day":
        setDay(value);
        break;
      case "year":
        setYear(value);
        break;
    }
  };

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
      <div className="flex gap-1 ">
        <select
          placeholder="Month"
          className="leading-5 p-3 rounded border-none outline-none text-white flex-1"
          style={{
            backgroundColor: "hsl( 225 calc( 1 *6.3%) 12.5% /1)",
          }}
          onChange={handleSelectChange}
          value={month}
          name="month"
        >
          <option value="Month" disabled hidden>
            Month
          </option>
          {MonthsList.map((month, index) => (
            <option key={month} value={index + 1}>
              {month}
            </option>
          ))}
        </select>
        <select
          placeholder="Day"
          className="leading-5 p-3 rounded border-none outline-none text-white flex-1"
          style={{
            backgroundColor: "hsl( 225 calc( 1 *6.3%) 12.5% /1)",
          }}
          onChange={handleSelectChange}
          value={day}
          name="day"
        >
          <option value="Day" disabled hidden>
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
          className="leading-5 p-3 rounded border-none outline-none text-white flex-1"
          style={{
            backgroundColor: "hsl( 225 calc( 1 *6.3%) 12.5% /1)",
          }}
          onChange={handleSelectChange}
          value={year}
          name="year"
        >
          <option value="Year" disabled hidden>
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
    </div>
  );
};

export default DateInput;
