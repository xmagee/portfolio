import React from 'react';
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

// Placeholder components to replace shadcn/ui
const Button = ({ children, className, ...props }) => (
  <button className={`px-3 py-2 rounded ${className}`} {...props}>{children}</button>
);

const Card = ({ children, className, ...props }) => (
  <div className={`rounded-lg ${className}`} {...props}>{children}</div>
);

const CardContent = ({ children, className, ...props }) => (
  <div className={`p-4 ${className}`} {...props}>{children}</div>
);

export default function GlassPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-sky-600">
      <div className="container mx-auto px-4 py-8">
        <Card className="backdrop-blur-lg bg-white/10 shadow-xl rounded-xl overflow-hidden">
          <CardContent className="p-6">
            <header className="flex flex-col md:flex-row items-center justify-between mb-8">
              <div className="flex items-center mb-4 md:mb-0">
                <img
                  src="https://avatars.githubusercontent.com/u/86931568?v=4"
                  alt="Profile Picture"
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                />
                <div className="ml-4">
                  <h1 className="text-2xl font-bold text-white">Alexander Magee</h1>
                  <p className="text-xl text-white/80">Software Engineer</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <a href='https://www.linkedin.com/in/xmagee/' target='_blank' rel="noreferrer">
                  <Button className="bg-white/20 hover:bg-white/30">
                    <Linkedin className="h-4 w-4 text-white" />
                  </Button>
                </a>

                <a href='https://www.github.com/xmagee/' target='_blank' rel="noreferrer">
                  <Button className="bg-white/20 hover:bg-white/30">
                    <Github className="h-4 w-4 text-white" />
                  </Button>
                </a>

                <a href='https://x.com/lostNotForgottn' target='_blank' rel="noreferrer">
                  <Button className="bg-white/20 hover:bg-white/30">
                    <Twitter className="h-4 w-4 text-white" />
                  </Button>
                </a>

                <a href='mailto:alex@magee.us'>
                  <Button className="bg-white/20 hover:bg-white/30">
                    <Mail className="h-4 w-4 text-white" />
                  </Button>
                </a>
              </div>
            </header>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-2">About Me</h2>
              <p className="text-white/80">
                I'm a creative engineer who loves to solve problems! I have over five years of professional experience creating and
                supporting code from the back-end to the front-end and everything in-between. When I’m not typing my days away
                crafting software I'm typically deep in an exciting book or playing my guitar.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-2">Experience</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Software Engineer II",
                    company: "Seneca Resources",
                    period: "2022 - Present",
                    description: "Full stack engineer focused on creating and maintaining web and mobile projects assisting in the process of responsible fracking/extraction of natural gas.",
                  },
                  {
                    title: "Software Engineer",
                    company: "American Refining Group",
                    period: "2019 - 2022",
                    description: "Individual contributor, lead design and development for an app that automates the generation and renewal of oil well lease agreement documents.",
                  },
                ].map((job, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm">
                    <CardContent>
                      <h3 className="font-semibold text-white">{job.title}</h3>
                      <p className="text-sm text-white/70">{job.company} | {job.period}</p>
                      <p className="mt-2 text-white/80">{job.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-2">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Threads of Tech: Fashion-Tech Jobboard",
                    projectLink: "https://jobs.threadsoftech.com",
                    description: "I Co-created a job board for the Fashion/Tech startup known as Threads of Tech (based in NYC). Organically grew from 0 to 600+ monthly users immediately following launch!.",
                    technologies: ["React", "Next.JS", "Node.js", "Firebase"],
                  },
                  {
                    title: "Ratter",
                    projectLink: "https://apps.apple.com/us/app/ratter/id6736864015",
                    description: "An IOS app that allows users to report rat sightings in their area, shows sightings reported by other users with map pins. Soon: report forwarding to NYC 311, to assist the Rat Task Force.",
                    technologies: ["Swift", "Firebase"],
                  }
                ].map((project, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm">
                    <CardContent>
                      <h3 className="font-semibold text-white">
                        <a href={project.projectLink} target='_blank' rel="noreferrer">{project.title}</a>
                      </h3>
                      <p className="text-sm text-white/80 mt-1">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-2">Education</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Bachelors of Science",
                    company: "University of Pittsburgh",
                    period: "2016 - 2020",
                    description: "Web dev, Esports club; President, IT Club.",
                  },
                ].map((job, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm">
                    <CardContent>
                      <h3 className="font-semibold text-white">{job.title}</h3>
                      <p className="text-sm text-white/70">{job.company} | {job.period}</p>
                      <p className="mt-2 text-white/80">{job.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {['React', 'Angular', 'JS/TS', 'Swift', 'Go', 'C#', 'React Native'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/20 rounded-full text-sm text-white font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
