import { FC, ReactNode, useCallback, useEffect, useRef } from "react";

const options: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

type ScrollObserverProps = {
  children: ReactNode;
  callback: () => void;
};

const ScrollObserver: FC<ScrollObserverProps> = ({ children, callback }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const callbackFunction: IntersectionObserverCallback = useCallback(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        callback();
      }
    },
    [callback]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (!containerRef.current) return;
    const containerRefCopy = containerRef.current;
    observer.observe(containerRefCopy);
    return () => {
      observer.unobserve(containerRefCopy);
    };
  }, [callbackFunction, containerRef]);
  return <div ref={containerRef}>{children}</div>;
};

export default ScrollObserver;
