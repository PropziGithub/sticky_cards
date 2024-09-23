"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Card, CardBody } from "@nextui-org/react";
import { ReactNode } from "react";
import { StickyIcon } from "@/components/icons";
import Image from "next/image";
import start from "@/images/start.svg";
import show from "@/images/show.svg";
import visits from "@/images/visits.svg";

interface Props {
  color?: string;
  children?: ReactNode;
}

export default function StickyCards() {
  function InfoCard({ color, children }: Props) {
    return (
      <Card
        className={`h-[854px] w-[1383px] bg-${color} rounded-[56px]`}
        shadow="none"
      >
        <CardBody className="overflow-visible p-10">{children}</CardBody>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-10 justify-center items-center bg-stickyWhite">
      {/* <Swiper
        effect="cards"
        grabCursor={true}
        centeredSlides={true}
        centerInsufficientSlides={true}
        modules={[EffectCards]}
        style={{
          overflow: "hidden",
        }}
        cardsEffect={{
          slideShadows: false,
        }}
      >
        <SwiperSlide>
          <InfoCard color="stickyPurple" />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCard color="stickyRed" />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCard color="stickyGreen" />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCard color="stickyOrange" />
        </SwiperSlide>
      </Swiper> */}
      <InfoCard color="stickyPurple">
        <div className="flex justify-between space-x-6">
          <div className="flex flex-col justify-between items-start h-full">
            <div className="flex flex-col gap-10 max-w-[800px]">
              <p className="text-[80px] leading-[80px] text-stickyBlack font-medium">
                SMS doesn’t work when it comes to cannabis.
              </p>
              <p className="text-[60px] leading-[66px] text-stickyBlack font-normal">
                Send messages the right way with 100% delivery.
              </p>
            </div>
            <div className="relative">
              <StickyIcon
                width={154}
                hanging={116}
                className="text-stickyBlack relative"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <p className="text-stickyPurple text-[48px] leading-[48px] font-medium mr-[30px]">
                  1
                </p>
              </div>
            </div>
          </div>
          <Card
            className={`h-[703px] w-[446px] bg-stickyWhite rounded-[18px]`}
            shadow="none"
          >
            <CardBody className="overflow-visible p-10"></CardBody>
          </Card>
        </div>
      </InfoCard>
      <InfoCard color="stickyRed">
        <div className="flex justify-between space-x-6">
          <div className="flex flex-col justify-between items-start h-full">
            <div className="flex flex-col gap-10 max-w-[800px]">
              <p className="text-[80px] leading-[80px] text-stickyBlack font-medium">
                Scan QR to Start
              </p>
              <p className="text-[60px] leading-[66px] text-stickyBlack font-normal">
                Add to any phone with a QR scan, friend’s referral, or from your
                website!
              </p>
            </div>
            <div className="relative">
              <StickyIcon
                width={154}
                hanging={116}
                className="text-stickyBlack relative"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <p className="text-stickyRed text-[48px] leading-[48px] font-medium mr-[30px]">
                  2
                </p>
              </div>
            </div>
          </div>
          <Image alt="Card image" src={start} />
        </div>
      </InfoCard>
      <InfoCard color="stickyGreen">
        <div className="flex justify-between space-x-6">
          <div className="flex flex-col justify-between items-start h-full">
            <div className="flex flex-col gap-10 max-w-[800px]">
              <p className="text-[80px] leading-[80px] text-stickyBlack font-medium">
                Show & Go
              </p>
              <p className="text-[60px] leading-[66px] text-stickyBlack font-normal">
                Scan their card. No need to ask for a phone number anymore.
              </p>
            </div>
            <div className="relative">
              <StickyIcon
                width={154}
                hanging={116}
                className="text-stickyBlack relative"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <p className="text-stickyGreen text-[48px] leading-[48px] font-medium mr-[30px]">
                  3
                </p>
              </div>
            </div>
          </div>
          <Image alt="Card image" src={show} />
        </div>
      </InfoCard>
      <InfoCard color="stickyOrange">
        <div className="flex justify-between space-x-6">
          <div className="flex flex-col justify-between items-start h-full">
            <div className="flex flex-col gap-10 max-w-[800px]">
              <p className="text-[80px] leading-[80px] text-stickyBlack font-medium">
                Repeat Visits
              </p>
              <p className="text-[60px] leading-[66px] text-stickyBlack font-normal">
                Bring your loyal customers back with automatic push
                notifications.
              </p>
            </div>
            <div className="relative">
              <StickyIcon
                width={154}
                hanging={116}
                className="text-stickyBlack relative"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <p className="text-stickyOrange text-[48px] leading-[48px] font-medium mr-[30px]">
                  4
                </p>
              </div>
            </div>
          </div>
          <Card
            className={`h-[703px] w-[446px] bg-stickyWhite rounded-[18px]`}
            shadow="none"
          >
            <CardBody className="overflow-visible p-10"></CardBody>
          </Card>
        </div>
      </InfoCard>
    </div>
  );
}
