import { FC, ReactNode, useState } from "react";
import ScrollObserver from "../Wrapper/ScrollObserver";

type StyledSectionProps = {
  children: ReactNode;
  className?: string;
};
const StyledSection: FC<StyledSectionProps> = ({ children, className }) => {
  const [isObserved, setIsObserved] = useState(false);

  return (
    <ScrollObserver callback={() => setIsObserved(true)}>
      <section
        className={`${
          isObserved ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        } transition-all duration-500 ${className}`}
      >
        {children}
      </section>
    </ScrollObserver>
  );
};

export default StyledSection;
