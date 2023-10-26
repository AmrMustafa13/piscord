import { FC, ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const FilledButton: FC<Props> = ({ children }) => {
  return (
    <button
      className="w-full h-10 border-none text-white text-base mt-5"
      style={{
        width: "100%",
        padding: "2px 16px",
        backgroundColor: "rgb(88, 101, 242)",
      }}
    >
      {children}
    </button>
  );
};

export default FilledButton;
