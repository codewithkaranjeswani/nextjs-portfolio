"use client"
import React, { useEffect, useState } from "react"
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import DownloadButton from "@/src/components/DownloadButton"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
]

function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const currentTheme = theme === "system" ? systemTheme : theme
  const pathname = usePathname()
  const [navbar, setNavbar] = useState(false)
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-stone-200 dark:bg-stone-800 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block hover:cursor-pointer">
            <Link
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold">Karan Jeswani</h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 hover:cursor-pointer">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      "block lg:inline-block text-neutral-900 dark:text-neutral-100 hover:text-neutral-700 dark:hover:text-neutral-300"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                )
              })}

              <div className="block lg:inline-block text-neutral-900 dark:text-neutral-100 hover:text-neutral-700 dark:hover:text-neutral-300">
                <DownloadButton theme={currentTheme} mounted={mounted} />
              </div>

              {(!mounted) ? (
                <button className="bg-stone-200 dark:bg-stone-800 p-2 rounded-xl">
                  <RiSunLine size={25} color="#00000000" />
                </button>
              ) : (
                (currentTheme === "dark" && mounted) ? (
                  <button
                    onClick={() => {
                      setTheme("light")
                      setNavbar(!navbar)
                    }}
                    className="bg-stone-200 dark:bg-stone-800 p-2 rounded-xl"
                  >
                    <RiSunLine size={25} color="white" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setTheme("dark")
                      setNavbar(!navbar)
                    }}
                    className="bg-stone-200 dark:bg-stone-800 p-2 rounded-xl"
                  >
                    <RiMoonFill size={25} color="black" />
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar