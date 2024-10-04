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
        "md:w-[1442px] w-full md:px-10 py-10 px-4  gap-10 flex flex-col justify-center items-center mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}
