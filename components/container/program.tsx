"use client";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import customer from "@/images/customer.svg";
import { StickyIcon } from "@/components/icons";
export default function Program() {
  return (
    <div className="w-full flex justify-center items-start space-x-6 p-10 bg-stickyWhite">
      <Image alt="Card background" src={customer} />
      <div className="w-[1px] h-[838px] bg-stickyBlack"></div>
      <div className="max-w-[735px] h-[838px]  flex flex-col justify-between gap-6">
        <span className="text-start text-[48px] text-stickyBlack font-normal leading-[48px]">
          "Sticky Cards transformed our loyalty program. Our customers love the
          simplicity and rewards, and we’ve seen a noticeable increase in repeat
          business.”
        </span>
        <div className="h-[170px] flex justify-between mt-10">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-[24px] leading-[24px] text-stickyBlack font-medium">
                Chloe F.
              </p>
              <p className="text-[24px] leading-[24px] text-stickyBlack font-normal">
                Owner of Cangrow
              </p>
            </div>
            <StickyIcon height={30} width={41} className="text-stickyBlack" />
          </div>
          <div className="flex space-x-4">
            <div className="w-[1px] h-[124px] bg-stickyBlack"></div>
            <div className="flex flex-col justify-between">
              <Button
                as={Link}
                className="bg-stickyWhite border border-[1px] text-stickyBlack text-[24px] h-[61px] rounded-[100px] p-4 font-normal leading-[19.2px]"
                href="#"
                variant="bordered"
              >
                All Stories
              </Button>
              <StickyIcon height={30} width={41} className="text-stickyBlack" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
