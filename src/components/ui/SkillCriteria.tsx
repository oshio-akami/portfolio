import type { ReactNode } from "react";

type Props = {
  num: number;
  size?: string;
  children: ReactNode;
};

export function SkillCriteria({ num, size = "1.5rem", children }: Props) {
  return (
    <div className={`flex gap-2`}>
      <p
        className={`rounded-full bg-[#2c3e50] text-white text-center font-bold`}
        style={{ width: size, height: size }}
      >
        {num}
      </p>
      {children}
    </div>
  );
}
