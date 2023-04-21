import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, MediumIcon } from "./Icons";
import { motion } from "framer-motion";
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-200 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="flex w-full px-32 py-8 font-medium items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://github.com/FurkanFirat23"
          target={"_blank"}
          whileHover={{ y: -2 }}
          className="w-6 mr-3"
          whileTap={{ scale: 0.8 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/furkan-firat23/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          className="w-6 ml-3 mr-3"
          whileTap={{ scale: 0.8 }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://medium.com/@furkan.0096/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          className="w-6 ml-3"
          whileTap={{ scale: 0.8 }}
        >
          <MediumIcon />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%] bottom-4">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
