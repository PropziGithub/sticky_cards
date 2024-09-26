"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardBody } from "@nextui-org/react";
import { StickyIcon } from "@/components/icons";
import Image from "next/image";
import start from "@/images/start.svg";
import show from "@/images/show.svg";
import Wrapper from "@/components/wrapper";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 3000);
  };

  const stopFlipping = () => {
    clearInterval(interval);
  };

  const handleMouseEnter = () => {
    stopFlipping();
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
      if (isHovered) {
        startFlipping();
      }
  };

  return (
    <div className="relative flex justify-center items-center w-full">
      {cards.map((card, index) => (
        <motion.div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          key={card.id}
          className="absolute inset-0 cursor-pointer"
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
          transition={{
            type: "tween",
            ease: [0.25, 0.8, 0.5, 1],
            duration: 0.4, 
          }}
        >
          <div className="font-normal text-neutral-700 dark:text-neutral-200">
            {card.content}
          </div>
          <div>
            <p className="text-neutral-500 font-medium dark:text-white">
              {card.name}
            </p>
            <p className="text-neutral-400 font-normal dark:text-neutral-200">
              {card.designation}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// StickyCards Component
export default function StickyCards() {
  function InfoCard({
    color = "stickyWhite",
    children,
  }: {
    color?: string;
    children?: React.ReactNode;
  }) {
    const colorClass: { [key: string]: string } = {
      stickyWhite: "bg-stickyWhite",
      stickyBlack: "bg-stickyBlack",
      stickyYellow: "bg-stickyYellow",
      stickyGreen: "bg-stickyGreen",
      stickyOrange: "bg-stickyOrange",
      stickyRed: "bg-stickyRed",
      stickyPurple: "bg-stickyPurple",
    };

    return (
      <Card
        className={`h-[854px] w-[1383px] ${
          colorClass[color] || ""
        } rounded-[56px]`}
        shadow="none"
      >
        <CardBody className="overflow-visible p-10">{children}</CardBody>
      </Card>
    );
  }

  const cards = [
    {
      card: (
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
      ),
    },
    {
      card: (
        <InfoCard color="stickyRed">
          <div className="flex justify-between space-x-6">
            <div className="flex flex-col justify-between items-start h-full">
              <div className="flex flex-col gap-10 max-w-[800px]">
                <p className="text-[80px] leading-[80px] text-stickyBlack font-medium">
                  Scan QR to Start
                </p>
                <p className="text-[60px] leading-[66px] text-stickyBlack font-normal">
                  Add to any phone with a QR scan, friend’s referral, or from
                  your website!
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
      ),
    },
    {
      card: (
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
      ),
    },
    {
      card: (
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
      ),
    },
  ];

  return (
    <div className="bg-stickyWhite h-[100vh]">
      <Wrapper>
        <CardStack
          items={cards.map((item, index) => ({
            id: index,
            name: "",
            designation: "",
            content: item.card,
          }))}
        />
      </Wrapper>
    </div>
  );
}
