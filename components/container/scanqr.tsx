"use client";
import { Card,CardBody } from "@nextui-org/react";
import Image from "next/image";
import phone from "@/images/phone2.svg";
import { QRIcon } from "@/components/icons";
import Wrapper from "@/components/wrapper";
export default function ScanQR() {
  return (
    <Wrapper>
    <div className="w-full flex md:flex-row flex-col justify-center items-start md:space-x-6 gap-y-6 pt-10">
      <Card
        className="md:w-[563px] w-full h-[838px] bg-stickyGreen rounded-[18px]"
        shadow="none"
      >
        <CardBody className="overflow-visible flex justify-center items-center">
          <Image alt="Card background" className="mr-6" src={phone} />
        </CardBody>
      </Card>
      <div className="md:w-[1px] md:h-[838px] w-full h-[1px] bg-stickyBlack"></div>
      <div className="md:max-w-[735px] max-w-full flex flex-col gap-6">
        <span className="text-start md:text-[72px] md:leading-[64.8px] text-[50px] leading-[50px] text-stickyBlack font-medium ">
          Scan the QR Code to add to any phone.
        </span>
        <span className="text-start text-[36px] text-stickyBlack font-normal leading-[39.6px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.
        </span>
        <QRIcon height={231} width={231} className="text-stickyYellow" />
      </div>
    </div>
    </Wrapper>
  );
}
