"use client";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import customer from "@/images/customer.svg";
import { StickyIcon } from "@/components/icons";
import Wrapper from "@/components/wrapper";

export default function Program() {
  return (
    <Wrapper>
    <div className="w-full flex md:flex-row flex-col justify-center items-start md:space-x-6 gap-y-6">
      <Image alt="Card background" src={customer} />
      <div className="md:w-[1px] md:h-[838px] w-full h-[1px] bg-stickyBlack"></div>
      <div className="max-w-[735px] md:h-[838px]  flex flex-col justify-between gap-6">
        <span className="text-start md:text-[48px] md:leading-[48px] text-[36px] leading-[39.6px] text-stickyBlack font-normal">
          "Sticky Cards transformed our loyalty program. Our customers love the
          simplicity and rewards, and we’ve seen a noticeable increase in repeat
          business.”
        </span>
        <div className="h-[170px] flex justify-between md:mt-10 mt-4">
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
    </Wrapper>
  );
}
