import Image from "next/image";
import { Logo2 } from "@/components/icons";
import hero from "@/images/hero.svg";
export default function Hero() {
  return (
    <div className="w-full">
      <Image
        priority
        src={hero}
        alt="Sticky Cards hero Image"
        className="relative w-full h-[882px] object-cover"
      />
      <div className="absolute inset-0 flex flex-col gap-y-2 justify-center items-center">
        <Logo2 height={230} width={405} />
      </div>
    </div>
  );
}
