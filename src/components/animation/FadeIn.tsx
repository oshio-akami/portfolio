import { useInView } from "@/hooks/useInView";
import { useEffect, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FadeIn({ children, className = "", delay = 200 }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [isFirst, setIsFirst] = useState(false);

  useEffect(() => {
    if (inView && !isFirst) {
      setTimeout(() => {
        setIsFirst(true);
      }, delay);
    }
  }, [inView, isFirst, delay]);
  return (
    <div
      ref={ref}
      className={`opacity-0 ${isFirst ? "fade-in" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
