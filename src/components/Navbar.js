import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  GithubIcon,
  LinkedInIcon,
  MediumIcon,
  MoonIcon,
  SunIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-200 dark:bg-light  ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-200 dark:bg-dark  ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const handleClicked = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex w-full px-32 py-8 font-medium items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handleClicked}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-200 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-200 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-200 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
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
            className={`w-6 ml-3  ${
              mode === "dark" ? "bg-light text-dark" : " text-light"
            }`}
            whileTap={{ scale: 0.8 }}
          >
            <MediumIcon />
          </motion.a>
          <button
            className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"}
          `}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill dark "} />
            ) : (
              <MoonIcon className={"fill dark "} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
          className="min-w-[70vw]  flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blue-md py-32 "
        >
          <nav className="flex flex-col items-center justify-center ">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClicked}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClicked}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClicked}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              className=""
              toggle={handleClicked}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://github.com/FurkanFirat23"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mr-3 sm:mx-1 bg-light dark:bg-dark rounded-full"
              whileTap={{ scale: 0.8 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/furkan-firat23/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 ml-3 mr-3 sm:mx-1"
              whileTap={{ scale: 0.8 }}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://medium.com/@furkan.0096/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 ml-3 sm:mx-1 text-light bg-light  dark:bg-light dark:text-dark"
              whileTap={{ scale: 0.8 }}
            >
              <MediumIcon />
            </motion.a>
            <button
              className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"}
          `}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "dark" ? (
                <SunIcon className={"w-24 fill dark "} />
              ) : (
                <MoonIcon className={"w-24 fill dark "} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%] bottom-4">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
