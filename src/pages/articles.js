import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import article1 from "../../public/images/articles/tailwindcss.jpg";
import article2 from "../../public/images/articles/reactimage.jpg";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ img, title, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);

    console.log(event.pageY);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        src={img}
        alt={title}
        className="w-96 h-auto hidden absolute rounded-lg z-10 md:!hidden"
        ref={imgRef}
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-secondary sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:border-light dark:bg-dark dark:text-light "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize my-2 w-full text-left text-4xl font-bold hover:underline mt-4 xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="my-2 test-sm text-dark dark:text-light">{summary}</p>
      <span className="text-primary font-semibold text-xl dark:text-secondary">
        {time}
      </span>
    </motion.li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Furkan FIRAT | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Insights and Inspiration: A Collection of My Portfolio Articles"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="Understanding TailwindCSS: The Ultimate Guide"
              summary="TailwindCss is a popular utility-first CSS framework that provides a set of pre-defined CSS classes to quickly style web applications. Unlike other CSS frameworks, TailwindCss does not provide pre-defined UI components, but instead offers a high degree of customization. By using TailwindCss, developers can save time, achieve consistent styles throughout their application, and use a mobile-first approach. To use TailwindCss, developers need to include the stylesheet in their HTML file and add TailwindCss classes to HTML elements. TailwindCss also provides a configuration file that allows for customization of colors, font sizes, and more. Overall, TailwindCss is a powerful tool for developers who value efficiency, flexibility, and consistency in their CSS workflow."
              time="3 min read"
              link="https://medium.com/@furkan.0096/understanding-tailwindcss-the-ultimate-guide-611f4dbc3ac3"
              img={article1}
            />
            <FeaturedArticle
              title="5 Common Mistakes to Avoid When Learning ReactJS as a Beginner
              "
              summary="This article discusses five common mistakes that beginners make when learning ReactJS, a popular front-end JavaScript library used for building dynamic and interactive web applications. The mistakes include skipping the basics, not understanding components, writing inefficient code, not using Hooks, and overcomplicating code. The article provides tips on how to avoid these mistakes, including starting with the basics, understanding components, writing efficient code, using Hooks, and keeping code simple. By avoiding these mistakes, beginners can make the learning process smoother and more enjoyable."
              time="3 min read"
              link="https://medium.com/@furkan.0096/5-common-mistakes-to-avoid-when-learning-reactjs-as-a-beginner-8dc0a9379ab7"
              img={article2}
            />
          </ul>
          {/* <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>

          <ul >
            <Article
            title=""
            date=""
            link=""
            img={}
/>
          </ul> */}
        </Layout>
      </main>
    </>
  );
};

export default articles;
