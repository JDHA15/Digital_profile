
'use client';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGithub,
} from "react-icons/fa6";

import {
  SiNextdotjs,
  SiMysql,
  SiPrisma,
  SiPostgresql,
  SiSupabase,
  SiClerk
} from "react-icons/si";

const technologies = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React", icon: FaReact, color: "text-sky-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Python", icon: FaPython, color: "text-yellow-400" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
  { name: "GitHub", icon: FaGithub, color: "text-white-500" },
  {name: "Postgresql", icon: SiPostgresql, color: "text-blue-400"},
  {name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]"},
  {name: "Prisma", icon: SiPrisma, color: "text-white"},
  {name: "Clerk", icon: SiClerk, color: "text-[#6C47FF]"}
];

export default function Technologies() {
  return (
    <section className="w-full min-w-0 flex flex-col gap-5">

      {/* ENCABEZADO */}
      <div>
        <span className="text-sky-400 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
          // Skills
        </span>

        <h2 className="text-white text-xl sm:text-2xl font-semibold mt-1">
          Technologies & Tools
        </h2>
      </div>

      {/* TECNOLOGÍAS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">

        {technologies.map((tech) => {
          const Icon = tech.icon;

          return (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center gap-2
              min-h-[68px] sm:min-h-[76px]
              bg-slate-900/40 border border-slate-700/40
              rounded-md p-3
              transition-all duration-300
              hover:border-sky-400/50 hover:bg-slate-800/70
              hover:-translate-y-1"
            >
              <Icon className={`${tech.color} text-xl sm:text-2xl`} />

              <span className="text-slate-300 text-[10px] sm:text-xs font-medium">
                {tech.name}
              </span>
            </div>
          );
        })}

      </div>
    </section>
  );
}
