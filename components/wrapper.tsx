import { cn } from "@/helpers";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export default function Wrapper({ className, children }: Props) {
  return (
    <div
      className={cn(
        "w-[1442px] p-10 gap-10 flex flex-col justify-center items-center mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}
