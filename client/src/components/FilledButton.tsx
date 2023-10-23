import { FC, ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const FilledButton: FC<Props> = ({ children }) => {
  return (
    <button
      style={{
        width: "100%",
        padding: "2px 16px",
        height: "40px",
        backgroundColor: "rgb(88, 101, 242)",
        border: "none",
        color: "white",
        fontSize: "16px",
        lineHeight: "24px",
        marginTop: "20px",
      }}
    >
      {children}
    </button>
  );
};

export default FilledButton;
