import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { RiRadioButtonFill } from "react-icons/ri";
import chat from "../assets/projects/Chat-App.png";

export default function Chat() {
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
            src={chat}
            alt="Chat"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Chat app</h2>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              Full stack chat application, developed with React, Tailwind CSS,
              and Firebase, offers users a seamless communication platform. With
              Firebase authentication, users can securely sign in to their
              accounts and access the chat rooms. Upon signing in, users can
              enter the name of the chat room they wish to join, facilitating
              easy navigation and participation in discussions. The
              application&apos;s user-friendly interface, crafted with Tailwind
              CSS, ensures a visually appealing and intuitive experience for
              users. Leveraging Firebase&apos;s real-time database capabilities,
              messages are instantly delivered and displayed, enabling smooth
              and efficient communication. The combination of React for the
              frontend, Tailwind CSS for styling, and Firebase for backend
              functionality results in a robust and scalable chat application
              suitable for various communication needs.
            </p>
            <a
              href="https://github.com/Aymenbachiri/chat-app"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </a>
            <a
              href="https://aymen-chat-app.netlify.app/"
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
