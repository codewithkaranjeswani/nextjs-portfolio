import React from "react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    name: "Streamlining Model Validation",
    description:
      "Automating Workflows for system and language agnostic validations",
    // image: "/thankfulthoughts.png",
    // github: "https://github.com/codewithkaranjeswani/mrisynthesis",
    // link: "https://thankfulthoughts.io/",
  },
  {
    name: "Deep Learning for MRI-CT Translation",
    description:
      "Trained Deep Neural Network model to translate from MRI to CT images",
    // image: "/thankfulthoughts.png",
    github: "https://github.com/codewithkaranjeswani/mrisynthesis",
    // link: "https://thankfulthoughts.io/",
  },
  {
    name: "Automatic Evaluation Metrics for Multi-Sentence Text",
    description: "Analysis of automatic metrics for essay scoring",
    // image: "/platoio.png",
    github: "https://github.com/EshwarSR/AutomaticEvaluationMetrics",
    // link: "https://platoio.com/register",
  },
  {
    name: "Parallel Particle Filter for Video Based Object Tracking",
    description:
      "Proposed faster algorithms for parallel Kalman Filter implementation",
    // image: "/familyphotos.png",
    // github: "https://github.com/hqasmei/katorfamilyphotos",
    // link: "https://katorfamilyphotos.com/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="mb-40">
        <h1 className="text-center font-bold text-4xl">
          Projects
          <hr className="w-full h-0.5 mx-auto my-4 bg-teal-900 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 pl-8">
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  {/* <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div> */}
                  <div className="md:w-1/2">
                    <h1 className="text-lg font-bold mb-4">{project.name}</h1>
                    <p className="text-sm leading-7 mb-2 text-neutral-800 dark:text-neutral-400">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
