import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import pphd from "../../public/images/profile/pphd.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 100, stiffness: 100 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (v) => {
      if (ref.current && v.toFixed(0) <= value) {
        ref.current.textContent = v.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Furkan FIRAT | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion-Driven Frontend Development: The Story of Furkan"
            className="mb-16"
          />
          <div className="grid w-full grid-cols-8 gap-16 ">
            <div className="col-span-3 flex flex-col items-start justify-start ">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/70 dark:text-light/70">
                Biography
              </h2>

              <p className="font-medium">
                My name is Furkan, and I'm a frontend developer. Despite having
                a degree in Civil Engineering from Yildiz Technical University,
                I have always been interested in the tech industry. After
                completing a Beginner Front End Web Development Certificate from
                Patika.dev, I decided to pursue a career in frontend
                development.
              </p>
              <p className="font-medium my-4">
                To prepare for my career, I participated in a Bootcamp
                acceleration program and completed the React Bootcamp, where I
                worked in groups and participated in interactive activities that
                improved my communication skills. I have a keen ability to learn
                quickly and approach challenges with innovation and timeliness,
                and I'm always looking to enhance my expertise by staying
                up-to-date with the latest advancements in frontend development
                technologies.
              </p>
              <p className="font-medium my-4">
                I'm confident that my passion for frontend development, coupled
                with my experience and drive, would make me an asset in any
                engineering position. Thank you for visiting my portfolio, and
                please feel free to contact me if you have any questions or
                opportunities.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={pphd}
                alt="FurkanF"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between ">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-5xl font-bold">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-5xl font-bold">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-5xl font-bold">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
