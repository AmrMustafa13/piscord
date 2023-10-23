import { FC, ReactNode } from "react";

interface Props {
  label: ReactNode;
}

const CheckBox: FC<Props> = ({ label }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <input type="checkbox" />
      <label>{label}</label>
    </div>
  );
};

export default CheckBox;
