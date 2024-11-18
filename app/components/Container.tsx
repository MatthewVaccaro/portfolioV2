import { HTMLAttributes } from "react";

export const Container = ({
  children,
  style,
  className,
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div style={style} className={`px-4 sm:px-6 md:px-[135px] ${className}`}>
      {children}
    </div>
  );
};
