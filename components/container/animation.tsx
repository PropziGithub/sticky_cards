import Image from "next/image";
import phone from "@/images/phone1.svg";
import {
  AnimationIcon,
  GoogleWalletIcon,
  IOSWalletIcon,
  TestmonialIcon,
} from "@/components/icons";

export default function Animation() {
  return (
    <div className="flex flex-col justify-center items-center bg-stickyWhite">
      {/* <AnimationIcon height={1003} width={1323} /> */}
      <div className="bottom-0 w-full flex justify-center items-center space-x-16 p-16 bg-stickyRed">
        <div className="flex flex-col gap-4">
          <IOSWalletIcon width={213} height={66} className="cursor-pointer" />
          <GoogleWalletIcon
            width={213}
            height={60}
            className="cursor-pointer"
          />
        </div>
        <Image
          priority
          src={phone}
          alt="Sticky Cards hero Image"
          className=""
        />
        <div className="gap-4">
          <TestmonialIcon width={380} height={497} />
        </div>
      </div>
    </div>
  );
}
