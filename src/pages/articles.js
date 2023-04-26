import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import article1 from "../../public/images/articles/tailwindcss.jpg";
const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li>
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize my-2 w-full text-left text-4xl font-bold">
          {title}
        </h2>
      </Link>
      <p className="my-2 test-sm text-dark ">{summary}</p>
      <span className="text-primary font-semibold text-xl ">{time}</span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Furkan FIRAT | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden ">
        <Layout className="pt-16">
          <AnimatedText text="Articles" className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              title="Understanding TailwindCSS: The Ultimate Guide"
              summary="TailwindCss is a popular utility-first CSS framework that provides a set of pre-defined CSS classes to quickly style web applications. Unlike other CSS frameworks, TailwindCss does not provide pre-defined UI components, but instead offers a high degree of customization. By using TailwindCss, developers can save time, achieve consistent styles throughout their application, and use a mobile-first approach. To use TailwindCss, developers need to include the stylesheet in their HTML file and add TailwindCss classes to HTML elements. TailwindCss also provides a configuration file that allows for customization of colors, font sizes, and more. Overall, TailwindCss is a powerful tool for developers who value efficiency, flexibility, and consistency in their CSS workflow."
              time="3 min read"
              link="https://medium.com/@furkan.0096/understanding-tailwindcss-the-ultimate-guide-611f4dbc3ac3"
              img={article1}
            />

            <li>Featured Articles-2</li>
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
