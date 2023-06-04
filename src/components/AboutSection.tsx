import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Python" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "React" },
  { skill: "C++" },
  { skill: "Julia" },
  { skill: "MATLAB" },
  { skill: "HTML" },
  { skill: "Git" },
  { skill: "GitHub" },
]

function AboutSection() {
  return (
    <section id="about">
      <div className="md:pt-8">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-full h-0.5 mx-auto my-4 bg-teal-900 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Karan and I am a{" "} Machine Learning Engineer at Wells Fargo.
            </p>
            <br />
            <p>
              I did my M. Tech from Indian Institute of Science (IISc), Bangalore in 2019-2021.
              I was in the Medical Imaging Group, in the Department of Computational and Data Science (CDS).
              My thesis was on Medical Image Synthesis using conditional Generative Adversarial Networks.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, and traveling.
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            {/* <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p> */}
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-4">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="pr-4 py-2 text-gray-900 dark:text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/toonface.png"
              alt="toonified image of mine"
              width={300}
              height={297}
              priority={false}
              loading="lazy"
              className="hidden md:block md:relative md:bottom-14 md:left-20 md:z-0 mt-16"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
