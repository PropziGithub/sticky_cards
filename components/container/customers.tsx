"use client";
import { Card, CardBody, Button, Link } from "@nextui-org/react";
import Image from "next/image";
import phone from "@/images/phone3.svg";
import { StickyIcon } from "@/components/icons";
export default function Customer() {
  const features = [
    {
      title: "Under 10 seconds to add to any phone.",
    },
    {
      title: "Enjoy shopping & redeeming prizes.",
    },
    {
      title: "Custom design with stamps & points display.",
    },
  ];
  return (
    <div className="w-full flex justify-center items-start space-x-6 p-10 bg-stickyWhite">
      <div className="max-w-[735px] flex flex-col gap-6">
        <span className="text-start text-[72px] text-stickyBlack font-medium leading-[64.8px]">
          Your customers don’t need another app.
        </span>
        <span className="text-start text-[36px] text-stickyBlack font-normal leading-[39.6px]">
          Cannabis marketing shouldn't be complicated. Get customers started
          with a simple sign-up through QR Code, SMS, Email, Instagram, Facebook
          and more!
        </span>
        <div className="flex flex-col gap-2">
          {features.map((feat, index) => (
            <div key={index} className="flex space-x-4">
              <StickyIcon height={30} width={41} className="text-stickyBlack" />
              <p className="text-stickyBlack text-[24px] leading-[24px] font-normal">
                {feat.title}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button
            as={Link}
            className="bg-stickyGreen text-stickyBlack text-[36px] h-[61px] rounded-[100px] p-4 font-medium leading-[28.8px]"
            href="#"
            variant="flat"
          >
            Book Demo
          </Button>
        </div>
      </div>
      <div className="w-[1px] h-[838px] bg-stickyBlack"></div>
      <Card
        className="w-[563px] h-[838px] bg-stickyRed rounded-[18px]"
        shadow="none"
      >
        <CardBody className="overflow-visible flex justify-center items-center">
          <Image alt="Card background" src={phone} />
        </CardBody>
      </Card>
    </div>
  );
}
