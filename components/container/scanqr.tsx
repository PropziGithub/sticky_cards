"use client";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import phone from "@/images/phone2.svg";
import { QRIcon } from "@/components/icons";
export default function ScanQR() {
  return (
    <div className="w-full flex justify-center items-start space-x-6 p-10 bg-stickyWhite">
      <Card
        className="min-w-[563px] h-[838px] bg-stickyGreen rounded-[18px]"
        shadow="none"
      >
        <CardBody className="overflow-visible flex justify-center items-center">
          <Image alt="Card background" className="mr-6" src={phone} />
        </CardBody>
      </Card>
      <div className="w-[1px] h-[838px] bg-stickyBlack"></div>
      <div className="max-w-[735px] flex flex-col gap-6">
        <span className="text-start text-[72px] text-stickyBlack font-medium leading-[64.8px]">
          Scan the QR Code to add to any phone.
        </span>
        <span className="text-start text-[36px] text-stickyBlack font-normal leading-[39.6px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.
        </span>
        <QRIcon height={231} width={231} />
      </div>
    </div>
  );
}
