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
            Important projects
          </h2>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

<div className="border border-gray-700 rounded-2xl p-5 shadow-lg hover:shadow-xl hover:border-gray-500 transition-all duration-300 min-h-80">
    <div className="overflow-hidden rounded-xl">
      <Image
        src="/savvyshop.png"
        alt="Valtrust website"
        width={450}
        height={450}
        className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>

    <div className="flex items-center justify-between mt-5">
      <h1 className="text-2xl font-semibold">Savvyshop</h1>
      <a href="https://apps.powerapps.com/play/e/default-d8e3bd44-0bba-426b-952d-ada7bb17393c/a/aaec0745-db8c-4ca3-8514-c47b4c406632?tenantId=d8e3bd44-0bba-426b-952d-ada7bb17393c&hint=0bc75d18-a555-4821-a836-6d68e094b1c1&sourcetime=1793852176203" target="_blank" rel="noopener noreferrer">
        <FiArrowUpRight className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </a>
      
    </div>

    <p className="text-gray-400 mt-2 text-sm">
      A plattaform to compare prices of markets
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5">
      <div className="border border-white/70 rounded-lg px-3 py-2 text-center text-xs shadow-md">
     Power Apps
    </div>

    <div className="border border-white/70 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      SharePoint
    </div>

    <div className="border border-white/70 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      Figma
    </div>

    <div className="border border-white/70 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      Copilot
    </div>

    </div><br />
    <h1 className="text-gray-400 mt-2 text-sm"><span className="font-bold text-gray-400 mt-2 text-sm">Role: </span>Developer</h1> <br/>

  </div>

<div className="group border border-gray-700 rounded-2xl p-5 shadow-lg hover:shadow-xl hover:border-gray-500 transition-all duration-300">

  <div className="overflow-hidden rounded-xl">
    <Image
      src="/havenup.png"
      alt="HavenUp logo"
      width={250}
      height={250}
      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
    />
  </div>

  <div className="flex items-center justify-between mt-5">
    <h1 className="text-2xl font-semibold">HavenUp</h1>
    <FiArrowUpRight className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
  </div>

  <p className="text-gray-400 mt-2 text-sm">
    A website to discover and sell properties.
  </p>

  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5">

    <div className="border border-white/70 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      Next.js
    </div>

    <div className="border border-white/70 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      React
    </div>

    <div className="border border-white/70 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      Tailwind CSS
    </div>

    <div className="border border-white/70 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      Clerk
    </div>

    <div className="border border-white/70 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      Ollama
    </div>

    <div className="border border-white/70 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      Three.js
    </div>

   

  </div> <br />
  <h1 className="text-gray-400 mt-2 text-sm"><span className="font-bold text-gray-400 mt-2 text-sm">Role: </span>Programmer</h1> <br/>
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
      A website to buy and sell verified properties.
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5">
      <div className="border border-white/70 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      Next.js
    </div>

    <div className="border border-white/70 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      React
    </div>

    <div className="border border-white/70 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      Tailwind CSS
    </div>

    <div className="border border-white/70 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      Clerk
    </div>

    <div className="border border-white/70 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      Gemini API
    </div>

    <div className="border border-white/70 rounded-lg px-3 py-2 text-center text-xs shadow-md">
      Tesseract
    </div>
    </div><br />
    <h1 className="text-gray-400 mt-2 text-sm"><span className="font-bold text-gray-400 mt-2 text-sm">Role: </span>Product Owner</h1> <br/>
    <a href="https://github.com/ValtrustET26/valtrust-website.git" className="text-sky-400" target="_blank" rel="noopener noreferrer" >View Github repository</a>
  </div>

  

</div>
    </div>
    )
    
}