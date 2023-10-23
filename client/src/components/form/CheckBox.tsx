import { FC, ReactNode } from "react";

interface Props {
  label: ReactNode;
}

const CheckBox: FC<Props> = ({ label }) => {
  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" />
      <label>{label}</label>
    </div>
  );
};

export default CheckBox;
