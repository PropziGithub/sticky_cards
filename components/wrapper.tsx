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
        "w-full flex justify-center space-x-28 items-start bg-stickyWhite",
        className
      )}
    >
      {children}
    </div>
  );
}
