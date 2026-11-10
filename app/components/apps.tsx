import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

export default function Work(){
    return(
        <div>
        <div>
          <span className="text-sky-400 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            // My projects
          </span>

          <h2 className="text-white text-xl sm:text-2xl font-semibold mt-1">
            Featured Projects
          </h2>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

<div className="border border-gray-700  rounded-2xl p-5 shadow-lg hover:shadow-xl hover:border-gray-500 transition-all duration-300 min-h-80">
    <div className="overflow-hidden rounded-xl">
      <Image
        src="/savvyshop.png"
        alt="Valtrust website"
        width={450}
        height={450}
        className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>

    <div className="flex items-center justify-between mt-5 ">
      <h1 className="text-2xl font-semibold">Savvyshop</h1>
      <a href="https://make.powerapps.com/e/Default-d8e3bd44-0bba-426b-952d-ada7bb17393c/canvas/?action=edit&app-id=%2Fproviders%2FMicrosoft.PowerApps%2Fapps%2Faaec0745-db8c-4ca3-8514-c47b4c406632" target="_blank" rel="noopener noreferrer">
        <FiArrowUpRight className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </a>
      
    </div>

    <p className="text-gray-400 mt-2 text-sm">
     A platform designed to compare market prices and help users manage their personal budgets through an integrated budgeting system.
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5">
      <div className="bg-slate-900/40 border border-slate-700/40 rounded-lg px-3 py-2 text-center text-xs shadow-md">
     Power Apps
    </div>

    <div className="bg-slate-900/40 border border-slate-700/40 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      SharePoint
    </div>

    <div className="bg-slate-900/40 border border-slate-700/40 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      Figma
    </div>

    <div className="bg-slate-900/40 border border-slate-700/40 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      Copilot
    </div>

    </div><br />
    <h1 className="text-gray-400 mt-2 text-sm"><span className="font-bold text-gray-400 mt-2 text-sm">Role: </span>Software Developer focused on implementing, optimizing, and maintaining the functionality of the features offered to users.</h1> <br/>
    <h1 className="text-gray-400 mt-2 text-sm"><span className="font-bold text-gray-400 mt-2 text-sm">Year: </span>2024</h1> <br/>

  </div>

<div className="group border border-gray-700 rounded-2xl p-5 shadow-lg hover:shadow-xl hover:border-gray-500 transition-all duration-300">

  <div className="overflow-hidden rounded-xl">
    <Image
      src="/aboutt.png"
      alt="HavenUp logo"
      width={250}
      height={250}
      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
    />
  </div>

  <div className="flex items-center justify-between mt-5">
    <h1 className="text-2xl font-semibold">HavenUp</h1>
    <a href="https://haven-up-website.vercel.app/" target="_blank" rel="noopener noreferrer">
        <FiArrowUpRight className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </a>
  </div>

  <p className="text-gray-400 mt-2 text-sm">
    A real estate platform that allows users to discover and list properties, integrating Gemini AI to assist buyers in making informed property decisions.
  </p>

  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5">

    <div className="bg-slate-900/40 border border-slate-700/40 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      Next.js
    </div>

    <div className="bg-slate-900/40 border border-slate-700/40 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      React
    </div>

    <div className="bg-slate-900/40 border border-slate-700/40 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      Tailwind CSS
    </div>

    <div className="bg-slate-900/40 border border-slate-700/40 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      Clerk
    </div>

    <div className="bg-slate-900/40 border border-slate-700/40 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      Gemini
    </div>

    <div className="bg-slate-900/40 border border-slate-700/40 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      Three.js
    </div>

   

  </div> <br />
  <h1 className="text-gray-400 mt-2 text-sm"><span className="font-bold text-gray-400 mt-2 text-sm">Role: </span>Software Developer responsible for implementing user authentication features, including registration and login functionalities.</h1> <br/>
  <h1 className="text-gray-400 mt-2 text-sm"><span className="font-bold text-gray-400 mt-2 text-sm">Year: </span>2025</h1> <br/>
<a href="https://github.com/Tech-LeoF/HavenUp-Website.git" className="text-sky-400" target="_blank" rel="noopener noreferrer" >View Github repository</a>
</div>
  <div className="group border border-gray-700 rounded-2xl p-5 shadow-lg hover:shadow-xl hover:border-gray-500 transition-all duration-300">

    <div className="overflow-hidden rounded-xl">
      <Image
        src="/mainpage.png"
        alt="Valtrust website"
        width={450}
        height={450}
        className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>

    <div className="flex items-center justify-between mt-5">
      <h1 className="text-2xl font-semibold">Valtrust</h1>
      <a href="https://valtrust-website.vercel.app/" target="_blank" rel="noopener noreferrer">
        <FiArrowUpRight className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </a>
      
    </div>

    <p className="text-gray-400 mt-2 text-sm">
    A platform designed to verify property ownership and improve trust in real estate transactions.
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5">
      <div className="bg-slate-900/40 border border-slate-700/40 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      Next.js
    </div>

    <div className="bg-slate-900/40 border border-slate-700/40 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      React
    </div>

    <div className="bg-slate-900/40 border border-slate-700/40 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      Tailwind CSS
    </div>

    <div className="bg-slate-900/40 border border-slate-700/40 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      Clerk
    </div>

    <div className="bg-slate-900/40 border border-slate-700/40 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      Gemini
    </div>

    <div className="bg-slate-900/40 border border-slate-700/40 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      Tesseract OCR
    </div>
    </div><br />
    <h1 className="text-gray-400 mt-2 text-sm"><span className="font-bold text-gray-400 mt-2 text-sm">Role: </span>Product Owner responsible for overseeing tool functionality, validating performance, and developing the solutions offered to users.</h1> <br/>
    <h1 className="text-gray-400 mt-2 text-sm"><span className="font-bold text-gray-400 mt-2 text-sm">Year: </span>2026</h1> <br/>
    <a href="https://github.com/ValtrustET26/valtrust-website.git" className="text-sky-400" target="_blank" rel="noopener noreferrer" >View Github repository</a>
  </div>

  

</div>
    </div>
    )
    
}