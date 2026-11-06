'use client';
import { FiArrowRight} from "react-icons/fi";


export default function Boton_proyectos(){
    return(
        <div className="w-full">
  <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#112369] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:bg-[#135B8A] hover:shadow-indigo-400/40 sm:px-6 sm:py-3.5 sm:text-base">
    View Projects

    <FiArrowRight className="shrink-0 text-lg transition-transform duration-300 group-hover:translate-x-1 sm:text-xl" />
  </button>
</div>
    )
}