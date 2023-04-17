import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center ">
      <MotionLink
        href="/"
        className="w-20 h-20 bg-dark
      text-light flex items-center justify-center rounded-full text-4xl font-bold"
        whileHover={{
          backgroundColor: [
            "#131313",
            "rgba(132,59,180,1)",
            "rgba(254,30,29,1)",
            "rgba(253,177,69,1)",
            "rgba(132,59,180,1)",
            "#131313",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        FF
      </MotionLink>
    </div>
  );
};

export default Logo;
