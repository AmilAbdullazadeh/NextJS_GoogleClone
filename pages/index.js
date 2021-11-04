import Head from "next/head";
import Image from "next/image";
import {
  MicrophoneIcon,
  SearchIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  function search(e) {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  }
  return (
    <>
      <div className="flex flex-col items-center justify-between min-h-screen dark:bg-primary-dark dark:text-white group">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="description of your project" />
          <meta name="theme-color" content="#000" />
          <title>Google</title>
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        </Head>

        {/* Header */}
        <header className="flex w-full items-center justify-between p-5 text-sm text-gray-700 dark:text-gray-300 md:font-medium">
          {/* Left */}
          <div className="flex space-x-4 items-center">
            <p className="link">About</p>
            <p className="link">Store</p>
          </div>
          {/* Right */}
          <div className="flex space-x-4 items-center">
            <p>Gmail</p>
            <p>Images</p>
            <ViewGridIcon className="h-10 w-10 p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-[#111] rounded-full" />
            <Avatar url="/img/profile.jpg" />
          </div>
        </header>
        {/* Body */}

        <form className="flex h-96 flex-col items-center justify-center flex-grow w-[80%] sm:w-[90%]">
          <Image
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
            className="w-225 md:w-300 md:h-100"
            width={225}
            height={75}
            alt=""
          />

          <div className="flex w-full mt-5 hover:shadow focus-within:shadow  max-w-md rounded-full border border-gray-500 md:hover:border-white dark:bg-gray-700md:dark:hover:border-gray-100 px-5 py-2 sm:py-3 items-center sm:max-w-xl lg:max-w-2xl">
            <SearchIcon className="h-5 mr-3 text-gray-500 " />
            <input
              ref={searchInputRef}
              type="text"
              className="focus:outline-none w-full flex-grow dark:bg-primary-dark custom-input"
            />
            <MicrophoneIcon className="h-5 text-gray-500" />
          </div>

          <div className="flex flex-row space-y-0 w-[90%] justify-center mt-8 space-x-3 sm:space-x-4">
            <button type="submit" onClick={search} className="btn">
              Google Search
            </button>
            <button onClick={search} className="btn">
              I&apos;m Feeling Lucky
            </button>
          </div>
        </form>

        <Footer className=" group-even:focus:invisible" />
      </div>

      <div id="portal"></div>
    </>
  );
}
