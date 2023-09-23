"use client";

import Image from "next/image";
import { Fragment } from "react";
import HamburgerIcon from "ui/src/Atoms/HamburgerIcon/HamburgerIcon.web";
import { cn } from "ui/utils/utils";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import useAuth from "@/hooks/useAuth";

export default function Nav() {
  const { auth, logOut } = useAuth();

  return (
    <nav className="w-full h-auto flex flex-row justify-between p-5 relative">
      <Link href="/">
        <div className="flex flex-row items-center">
          <motion.div
            initial={{ opacity: 0.7, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
              repeatType: "reverse",
              repeat: Infinity,
            }}
            className="relative lg:h-11 lg:w-11 md:h-10 md:w-10 h-9 w-9 mr-3"
          >
            <Image src="/tiny_logo.png" alt="logo" fill />
          </motion.div>
          <h1 className="font-black lg:text-3xl md:text-2xl text-xl text-white pt-1">
            Chit Tal
            <span className="relative bottom-1 font-bold text-sm bg-white text-[#282828] px-2 py-0.5 ml-2 rounded-md">
              Beta
            </span>
          </h1>
        </div>
      </Link>
      <Menu as="div" className="z-50">
        <Menu.Button>
          <HamburgerIcon className="text-white fill-white" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-5 w-56 origin-top-right rounded-md border-[#D0D7DE] border-1 bg-[#FFFFFF] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-mm lg:text-base text-sm font-semibold">
            <div className="py-2">
              <Menu.Item>
                {({ active }: { active: boolean }) => (
                  <Link
                    href="/"
                    className={cn(
                      active ? "text-secondary" : "text-[#5D5D5D]",
                      "block px-4 py-2"
                    )}
                  >
                    မူလစာမျက်နှာ
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }: { active: boolean }) => (
                  <Link
                    href="/about-us"
                    className={cn(
                      active ? "text-secondary" : "text-[#5D5D5D]",
                      "block px-4 py-2"
                    )}
                  >
                    ဖန်တီးသူများအကြောင်း
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }: { active: boolean }) => (
                  <Link
                    href={!!auth ? "/create" : "/login"}
                    className={cn(
                      active ? "text-secondary" : "text-[#5D5D5D]",
                      "block px-4 py-2"
                    )}
                  >
                    ရေးမယ်
                  </Link>
                )}
              </Menu.Item>
              {!!auth && (
                <Menu.Item>
                  {({ active }: { active: boolean }) => (
                    <button
                      className={cn(
                        active ? "text-secondary" : "text-[#5D5D5D]",
                        "block px-4 py-2"
                      )}
                      onClick={logOut}
                    >ထွက်မယ်</button>
                  )}
                </Menu.Item>
              )}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  );
}
