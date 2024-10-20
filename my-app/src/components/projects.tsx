"use client";

import SectionHeading from "./section-heading"
import { ProjectsData } from "@/lib/data"
import Project from "./project-card"
import { useSectionInView } from "@/lib/useInView"

export default function Projects() {
  const { ref } = useSectionInView("#projects", 0.1)
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>
        Projects
      </SectionHeading>

      <div>
        {
          ProjectsData.map((project, index) => (
            <Project {...project} key={index} />
          ))
        }
      </div>
    </section>
  )
}