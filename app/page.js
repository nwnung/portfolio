"use client"
import About from "@/components/About"
import Navbar from "@/components/Navbar"
import Proyects from "@/components/Proyects"
import { useEffect, useState } from "react"
import {SiNextdotjs, SiJavascript, SiTailwindcss, SiGit, SiReact, SiHtml5, SiCss3, } from "react-icons/si"

const TOP_OFFSET = 106

export default function Home() {
  const skills = [
    {
      name: "HTML",
      icon: <SiHtml5 size={25} />
    },
    {
      name: "CSS",
      icon: <SiCss3 size={25} />
    },
    {
      name: "Javascript",
      icon: <SiJavascript size={25} />
    },
    {
      name: "React",
      icon: <SiReact size={25} />
    },
    {
      name: "Next js",
      icon: <SiNextdotjs size={25} />
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={25} />
    },
    {
      name: "Git",
      icon: <SiGit size={25} />
    },
  ]

  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    const handlerScroll = ()=>{
      if(window.scrollY > TOP_OFFSET){
        setShowNavbar(true)
      } else {
        setShowNavbar(false)
      }
    }

    window.addEventListener("scroll", handlerScroll)

    return ()=> {
      window.removeEventListener("scroll", handlerScroll)
    }
  }, []);


  return (
    <>
      {showNavbar && (<Navbar />)}
      <main className="min-h-screen p-16 md:p-24 flex flex-col">
        <div className="flex flex-col gap-6 mt-12 items-center mx-auto w-[70vw] md:w-fit">
          <div>
              <p className="text-sm font-semibold">Hi! my name is...</p>
              <h1 className="md:text-5xl text-4xl">Jonathan Aleman.</h1>
          </div>

          <div className="flex gap-2 mb-12">
            {skills.map(skill => (
              <div className="cursor-pointer hover:opacity-80 transition" key={skill.name}>
                {skill.icon}
              </div>
            ))}
          </div>
        </div>

        <About />

        {/* <div className="w-[80vw] mx-auto flex flex-col"> */}
          <Proyects />
        {/* </div> */}
      </main>
    </>
  )
}