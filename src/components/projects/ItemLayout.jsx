"use client";
import { motion } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";

const item = {
  hidden: {opacity: 0, y:100},
  show: {opacity: 1, y:0}
}

const MotionLink = motion(Link)



const ItemLayout = ({ children, className, link, animItem }) => {
  return (
    <MotionLink
      variants={item}
      target = {"_blank"}
      href={link}
      className={clsx(
        "custom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </MotionLink>
  );
};

export default ItemLayout;
