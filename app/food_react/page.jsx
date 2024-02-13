import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { RiRadioButtonFill } from "react-icons/ri";
import food from "../assets/projects/Food-App.png";

export default function Food() {
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
              Full stack food application, developed using React, Tailwind CSS,
              Firebase, Redux Toolkit, and Redux Persist, provides users with a
              seamless platform to explore, order, and manage their food
              selections. It includes Firebase authentication for secure
              sign-ins and personalized features. Users can browse a variety of
              food items, filter them by price or category, and easily add them
              to their cart. Leveraging Redux Toolkit and Redux Persist, users
              can efficiently manage their cart. The application&apos;s
              intuitive user interface, designed with Tailwind CSS, ensures a
              visually appealing and user-friendly experience. By integrating
              Firebase for backend functionality, the app offers real-time data
              storage and retrieval for smooth and efficient transactions.
              Overall, this full stack food app offers a comprehensive solution
              for users to explore and order their favorite dishes while
              enjoying a seamless and personalized shopping experience.
            </p>
            <a
              href="https://github.com/Aymenbachiri/food-app"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </a>
            <a
              href="https://aymen-eats.netlify.app/"
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
                  <RiRadioButtonFill className="pr-1" /> React
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Tailwind
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Firebase
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
}
