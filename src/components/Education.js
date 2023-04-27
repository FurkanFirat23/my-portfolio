import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
const Details = ({ type, time, place, info, link }) => {
  const ref = useRef(null);

  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl ">{type}</h3>
        <span className="capitalize font-medium text-dark/80 dark:text-light/80">
          {time} | {place} |&nbsp;
          <a href={link} target="_blank" className=" capitalize">
            Link
          </a>
        </span>
        <p className="font-medium w-full ">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center ">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin top dark:bg-light"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor of Science in Civil Engineering"
            time="2016-2021"
            place="Yildiz Technical University"
            info="Participate in 5-year undergraduate education in the Department of Civil Engineering."
          />
          <Details
            type="React Bootcamp "
            time="30 Nov 2022 "
            place="Kodluyoruz"
            info="Participate in 70-hour workshops on React as part of the React Bootcamp.
            "
            link="https://verified.sertifier.com/tr/verify/94086871972853"
          />
          <Details
            type="Bootcamp Accelerator Program-Javascript "
            time="Jul-Sept 2022 "
            place="Patika.dev"
            info="Participate in 250-hour workshops on React as part of the React Bootcamp.
            "
            link="https://academy.patika.dev/certificates/e792b0bf"
          />
          <Details
            type="Beginner Frontend Web Development Path "
            time="March-June 2022 "
            place="Patika.dev"
            info="Participate in 200-hour workshops as part of the Beginner Frontend Web Development Path.
            "
            link="https://academy.patika.dev/certificates/ztPH9mb"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
