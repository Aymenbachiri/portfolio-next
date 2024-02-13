import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Navbar from "../components/Navbar";
import ubemy from "../assets/projects/Ubemy.png";

const property = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen">
        <div className="w-screen h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={ubemy}
            alt="ubemy"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">E-learning app</h2>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              This app was built using Next JS. Users are able to search courses
              based on an name, or description. You will be able to create
              course as well as update and delete your own courses. User
              authentication is available using NextAuth and MongoDB so you can
              signup and signin to your account with an email address, you can
              save your favorite courses with Redux Toolkit and Persist.
            </p>
            <a
              href="https://github.com/Aymenbachiri/e-learning-app"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </a>
            <a
              href="https://ubemy-aymen-bachiri.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4">Demo</button>
            </a>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Next
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Tailwind
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Javascript
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> MongoDB
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Express js
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> NextAuth
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Redux Toolkit
                </p>
              </div>
            </div>
          </div>
          <Link href="/#projects">
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default property;
