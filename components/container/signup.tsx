"use client";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import badlands from "@/images/badlands.svg";
import { QRIcon } from "@/components/icons";
import Wrapper from "@/components/wrapper";
export default function Signup() {
  return (
    <Wrapper>
      <div className="w-full flex md:flex-row flex-col justify-center md:space-x-6 gap-y-6 items-start bg-stickyWhite">
        <Card
          className="md:w-[676px] w-full md:h-[838px] bg-stickyGreen rounded-[56px]  py-10"
          shadow="none"
        >
          <CardBody className="overflow-visible flex flex-col justify-center items-center gap-6">
            <p className="md:text-[60px] md:leading-[60px] text-[50px] leading-[50px] text-center text-stickyWhite font-normal px-10">
              Loyalty sign up takes 10 seconds.
            </p>
            <QRIcon height={231} width={231} className="text-stickyWhite" />
          </CardBody>
        </Card>
        <Image alt="Card background" src={badlands} />
      </div>
    </Wrapper>
  );
}
