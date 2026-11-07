'use client'

export default function Skill(){
    return(
        <div>
             <div>
          <span className="text-sky-400 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            // Experience
          </span>

          <h2 className="text-white text-xl sm:text-2xl font-semibold mt-1">
            Courses and skills
          </h2>
        </div>
       <div className="relative flex flex-col gap-8 border-l-2 border-sky-400/40 ml-3 pl-6">

 <br />
 <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

    <span className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-sky-400 border-4 border-[#0a0f1c]"></span>

    <h1 className="text-white text-sm font-bold sm:text-base font-medium">
    PowerPoint Course - October 18, 2026
    </h1>

    <button 
    onClick={()=> window.open('powerPoint.pdf','_blank')}
    className="bg-[#112369] hover:bg-blue-800  text-white text-xs px-4 py-2 rounded-lg transition-colors w-fit">
      View Certificate
    </button>

  </div>
  <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

    <span className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-sky-400 border-4 border-[#0a0f1c]"></span>

    <h1 className="text-white font-bold text-sm sm:text-base font-medium">
      Intermediate English Workshop For Medical Appointments - October 6, 2026
    </h1>

    <button
    onClick={()=> window.open('/ingles_medico.pdf', '_blank')}
    className="bg-[#112369]  hover:bg-blue-800 text-white text-xs px-4 py-2 rounded-lg transition-colors w-fit shrink-0">
      View Certificate
    </button>

  </div>
  <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

    <span className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-sky-400 border-4 border-[#0a0f1c]"></span>

    <h1 className="text-white text-sm  font-bold sm:text-base font-medium">
      Psychological First Aid Course - September 23, 2026
    </h1>

    <button 
    onClick={()=> window.open('first_aid.pdf','_blank')}
    className="bg-[#112369] hover:bg-blue-800 text-white text-xs px-4 py-2 rounded-lg transition-colors w-fit">
      View Certificate
    </button>

  </div>

  

  

  <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

    <span className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-sky-400 border-4 border-[#0a0f1c]"></span>

    <h1 className="text-white font-bold text-sm sm:text-base font-medium">
    Course of Prompt Engineering - May 23, 2026
    </h1>

    <button 
    onClick={()=> window.open('prompt.pdf')}
    className="bg-[#112369]  hover:bg-blue-800 text-white text-xs px-4 py-2 rounded-lg transition-colors w-fit shrink-0">
      View Certificate
    </button>

  </div>
    <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

    <span className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-sky-400 border-4 border-[#0a0f1c]"></span>

    <h1 className="text-white font-bold text-sm sm:text-base font-medium">
    Microsoft Office Specialist: Excel (Microsoft 365 Apps) Expert - March 25, 2026
    </h1>

    <button 
    onClick={()=> window.open('Excel_expert.pdf')}
    className="bg-[#112369]  hover:bg-blue-800 text-white text-xs px-4 py-2 rounded-lg transition-colors w-fit shrink-0">
      View Certificate
    </button>

  </div>
  <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

    <span className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-sky-400 border-4 border-[#0a0f1c]"></span>

    <h1 className="text-white font-bold text-sm sm:text-base font-medium">
    Microsoft Office Specialist: Excel (Microsoft 365 Apps) Associate - November 4, 2025
    </h1>

    <button 
    onClick={()=> window.open('Excel_associate.pdf')}
    className="bg-[#112369]  hover:bg-blue-800 text-white text-xs px-4 py-2 rounded-lg transition-colors w-fit shrink-0">
      View Certificate
    </button>

  </div>
</div>
        

        </div>
    )
}