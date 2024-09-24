"use client";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import badlands from "@/images/badlands.svg";
import { QRIcon } from "@/components/icons";
import Wrapper from "@/components/wrapper";
export default function Signup() {
  return (
    <Wrapper>
      <div className="w-full flex justify-center space-x-6 items-start bg-stickyWhite">
        <Card
          className="w-[676px] h-[838px] bg-stickyGreen rounded-[56px]"
          shadow="none"
        >
          <CardBody className="overflow-visible flex flex-col justify-center items-center gap-6">
            <p className="text-[60px] leading-[60px] text-center text-stickyWhite font-normal px-10">
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
