import React from "react"
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai"

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 mx-auto w-full px-4 sm:px-6 md:max-w-5xl bg-stone-500 dark:bg-stone-800">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-teal-900 border-0 rounded"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-900 dark:text-neutral-100 hover:cursor-default">
          © 2023 Karan Jeswani
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/codewithkaranjeswani" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-900 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://twitter.com/karanjeswani306"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-900 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/karanjeswani/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-900 dark:text-neutral-100"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
