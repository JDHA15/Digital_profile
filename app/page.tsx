import { FaGithub, FaLinkedin} from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import Image from "next/image"
import Navbar from "./components/navbar"
import Boton_proyectos from "./components/buttom"
import AboutSection from "./components/connect"
import Work from "./components/apps"
import Footer from "./components/footer"
import Skill from "./skills"
import Contact from "./components/contact"
export default function Home(){
  return(
    
<div className="min-h-screen">
  <Navbar />

  <div id="start" className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-12 sm:px-10 md:flex-row md:justify-between md:gap-8 lg:px-20 lg:py-20">

    <div className="w-full space-y-4 text-center md:w-3/5 md:text-left">

     <div className="inline-flex items-center gap-2 rounded-full border border-gray-600 px-3 py-1.5 sm:gap-2.5 sm:px-4 sm:py-2">
  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300 sm:h-2 sm:w-2 shadow-lg shadow-sky-300/30"></span>

  <span className="text-[clamp(0.75rem,2vw,0.875rem)] text-gray-300">
    Hi, I am
  </span>
</div>

      <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-tight">
        Josué David Hernández Alvarado
      </h1>

      <h2 className="text-[clamp(1.5rem,4vw,3rem)] leading-tight">
        Software <span className="text-sky-300">Developer</span>
        <br className="hidden sm:block" />
        {" "}& creator of{" "}
        <span className="text-sky-300">
          Digital solutions.
        </span>
      </h2>

      <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base md:mx-0">
        Passionate about technology, web development, and creating
        digital experiences that truly matter. I build efficient
        solutions with a user-focused approach.
      </p>
      <a href="#projects">
        <Boton_proyectos/>
      </a>
        
    
    <div className="mt-8 flex items-center justify-center gap-6 md:justify-start">
  <a
    href="https://github.com/JDHA15"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="text-2xl text-gray-300 transition-all duration-300 hover:scale-110 hover:text-sky-300 sm:text-3xl"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/josué-david-hernández-alvarado-123275430/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="text-2xl text-gray-300 transition-all duration-300 hover:scale-110 hover:text-sky-300 sm:text-3xl"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=davidjosueha@gmail.com&su=Portfolio%20Contact&body=Hello%20Josu%C3%A9%2C%0A%0AI'm%20reaching%20out%20to%20you%20through%20your%20portfolio.%0A%0AName%3A%20%0ACompany%3A%20%0A%0AMessage%3A%0A%0A%0ABest%20regards%2C%0A"
    aria-label="Enviar correo"
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl text-gray-300 transition-all duration-300 hover:scale-110 hover:text-sky-300 sm:text-3xl"
  >
    <FiMail />
  </a>
</div>
    </div>

    <div className="flex w-full justify-center md:w-2/5">
      <Image
        src="/image.png"
        alt="Imagen de Josué"
        width={300}
        height={300}
        priority
        className="h-auto w-[clamp(180px,35vw,300px)] rounded-3xl object-cover"
      />
    </div>
      
  </div>
  <div id="about" className="mx-auto max-w-7xl flex-col items-center gap-10 px-6 py-12 sm:px-10 md:flex-row md:justify-between md:gap-8 lg:px-20 lg:py-20 scroll-mt-24">
    <AboutSection/>
  </div>
  <div id="projects" className="mx-auto max-w-7xl flex-col items-center gap-10 px-6 py-12 sm:px-10 md:flex-row md:justify-between md:gap-8 lg:px-20 lg:py-20 scroll-mt-24">
    <Work/>
  </div>
  <div id="experience" className="mx-auto max-w-7xl flex-col items-center gap-10 px-6 py-12 sm:px-10 md:flex-row md:justify-between md:gap-8 lg:px-20 lg:py-20 scroll-mt-24">
    <Skill/>
  </div>
  <div id="contact" className="mx-auto max-w-7xl flex-col items-center gap-10 px-6 py-12 sm:px-10 md:flex-row md:justify-between md:gap-8 lg:px-20 lg:py-20 scroll-mt-24">
    <Contact/>
  </div>

<div className="items-center">
  <Footer/>
</div>
  
</div>

  )
}