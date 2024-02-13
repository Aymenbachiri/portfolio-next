import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Navbar from "../components/Navbar";
import food from "../assets/projects/TastyToGo.png";

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
            src={food}
            alt="food"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Food app</h2>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              Developed with Next.js, this food delivery application provides
              users with a convenient platform to search for and filter food
              items based on name, price, and category. Offering a seamless user
              experience, the app is built with responsive design principles,
              ensuring optimal usability across various devices. Users can also
              enjoy a personalized visual experience with integrated dark mode
              functionality. Vendors can list their food offerings and manage
              their inventory through easy updates and deletions. User
              authentication, powered by NextAuth and MongoDB, ensures secure
              access to personalized features, including the ability to sign up
              and sign in using email addresses. Additionally, users can utilize
              Redux Toolkit and Persist to add their favorite food items to
              their cart, facilitating smooth transactions and a tailored
              shopping experience.
            </p>
            <a
              href="https://github.com/Aymenbachiri/food-app-next"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </a>
            <a
              href="https://tastytogo-aymen-bachiri.netlify.app/"
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
