import React from "react";
import { CircuText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4  flex items-center justify-center overflow-hidden ">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircuText className={"fill-dark animate-spin-slow dark:fill-light"} />
        <Link
          href="mailto:furkan.0096@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  shadow-md border border-solid border-dark rounded-full w-20 h-20 hover:bg-dark hover:text-light transition-all duration-200 ease-in-out font-semibold dark:text-dark dark:bg-light dark:hover:bg-dark dark:hover:text-light dark:hover:border-light"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
