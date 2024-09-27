"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import phone from "@/images/phone1.svg";
import {
  AnimationIcon,
  GoogleWalletIcon,
  IOSWalletIcon,
  TestmonialIcon,
} from "@/components/icons";

export default function Animation() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const iconScale = useTransform(scrollYProgress, [0, 1], [1, 6.5]);
  const iconTranslateY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const iconTranslateX = useTransform(scrollYProgress, [0, 1], [0, 0]);

  const transition = { duration: 0.5, ease: "easeInOut" };

  return (
    <div
      ref={ref}
      className="min-h-[100vh] flex flex-col items-center pb-20 pt-10 justify-center bg-stickyWhite overflow-hidden"
    >
      <motion.div
        className="transform"
        style={{
          scale: iconScale,
          translateY: iconTranslateY,
          translateX: iconTranslateX,
        }}
        transition={transition}
      >
        <AnimationIcon height={1003} width={1323} />
      </motion.div>

      <motion.div
        className="w-full flex justify-center items-center space-x-16 p-16 bg-stickyRed"
        style={{
          translateY: iconTranslateY,
        }}
        transition={transition}
      >
        <div className="flex flex-col gap-4">
          <IOSWalletIcon width={213} height={66} className="cursor-pointer" />
          <GoogleWalletIcon
            width={213}
            height={60}
            className="cursor-pointer"
          />
        </div>
        <Image
          priority
          src={phone}
          alt="Sticky Cards hero Image"
          className=""
        />
        <div className="gap-4">
          <TestmonialIcon width={380} height={497} />
        </div>
      </motion.div>
    </div>
  );
}
