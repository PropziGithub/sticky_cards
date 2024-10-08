"use client";
import { Card, CardBody, Button, Link } from "@nextui-org/react";
import Image from "next/image";
import phone from "@/images/phone3.svg";
import { StickyIcon } from "@/components/icons";
import Wrapper from "@/components/wrapper";
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
    <Wrapper>
      <div className="w-full flex md:flex-row flex-col justify-center items-start md:space-x-6 gap-y-6 bg-stickyWhite">
        <div className="md:w-[840px] w-full flex flex-col gap-6">
          <span className="text-start md:text-[72px] md:leading-[64.8px] text-[50px] leading-[50px] text-stickyBlack font-medium ">
            Your customers don’t need another app.
          </span>
          <span className="text-start text-[36px] text-stickyBlack font-normal leading-[39.6px]">
            Cannabis marketing shouldn't be complicated. Get customers started
            with a simple sign-up through QR Code, SMS, Email, Instagram,
            Facebook and more!
          </span>
          <div className="flex flex-col gap-2">
            {features.map((feat, index) => (
              <div key={index} className="flex space-x-4">
                <StickyIcon
                  height={30}
                  width={41}
                  className="text-stickyBlack"
                />
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
        <div className="md:w-[1px] md:h-[838px] w-full h-[1px] bg-stickyBlack"></div>
        <Card
          className="md:w-[563px] w-full h-[838px] bg-stickyRed rounded-[18px]"
          shadow="none"
        >
          <CardBody className="overflow-visible flex justify-center items-center">
            <Image alt="Card background" src={phone} />
          </CardBody>
        </Card>
      </div>
    </Wrapper>
  );
}
