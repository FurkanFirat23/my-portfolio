import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import pphd from "../../public/images/profile/pphd.jpg";
const about = () => {
  return (
    <>
      <Head>
        <title>Furkan FIRAT | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion-Driven Frontend Development: The Story of Furkan"
            className="mb-16"
          />
          <div className="grid w-full grid-cols-8 gap-16 ">
            <div className="col-span-3 flex flex-col items-start justify-start ">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/70 ">
                Biography
              </h2>

              <p className="font-medium">
                Hi, My name is Furkan, and I'm a frontend developer. I graduated
                from Yildiz Technical University with a degree in Civil
                Engineering, but I've always been interested in the tech
                industry. After careful consideration, I decided to pursue a
                career in frontend development and have been working hard to
                acquire the necessary skills.
              </p>
              <p className="font-medium my-4">
                To kickstart my journey, I obtained a Beginner Front End Web
                Development Certificate from Patika.dev, and then completed a
                Bootcamp acceleration program to prepare for boot camps. I
                further honed my technical skills by successfully completing the
                React Bootcamp, where I worked in groups and participated in
                interactive activities that improved my communication skills.
              </p>
              <p className="font-medium my-4">
                Currently, I'm focused on staying up-to-date with the latest
                advancements in frontend development technologies. Throughout
                this process, I've demonstrated a keen ability to learn quickly
                and approach challenges with innovation and timeliness. My
                passion for frontend development drives me to constantly seek
                out new skills and knowledge to enhance my expertise.
              </p>
              <p className="font-medium my-4">
                I'm excited about the opportunity to contribute my skills to any
                engineering position. With my experience and drive, I'm
                confident that I can excel in any role in frontend development.
              </p>
              <p className="font-medium my-4">
                Thank you for visiting my portfolio, and feel free to get in
                touch with me if you have any questions or opportunities.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 ">
              <Image
                src={pphd}
                alt="FurkanF"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
