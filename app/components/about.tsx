
'use client';

import {
  FaHeart,
  FaGraduationCap,
  FaMapLocationDot
} from "react-icons/fa6";

export default function About() {
  return (
    <section className="w-full grid grid-cols-1 gap-8 lg:gap-12 items-center">

      {/* SOBRE MÍ */}
      <div className="flex flex-col gap-5 min-w-0">

        <div>
          <span className="text-sky-400 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            // About me
          </span>

          <h2 className="text-white text-xl sm:text-2xl font-semibold mt-1">
            A little about me
          </h2>
        </div>

        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xl">
          I am a student and developer that is constantly learning,
          with interests in medicine, technology and problem solving.
          Creating solutions is something that motivates me, since
          I like to make a positive impact on people's lives.
        </p>

        {/* INFORMACIÓN PERSONAL */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-3 pt-3">

          {/* LOCATION */}
          <div className="flex items-start gap-2">
            <FaMapLocationDot className="text-sky-400 text-sm mt-1 shrink-0" />

            <div className="min-w-0">
              <h3 className="text-white text-xs font-semibold">
                Location
              </h3>
              <p className="text-slate-400 text-[11px] mt-1">
                San Juan Opico
              </p>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="flex items-start gap-2">
            <FaGraduationCap className="text-sky-400 text-base mt-0.5 shrink-0" />

            <div className="min-w-0">
              <h3 className="text-white text-xs font-semibold">
                Education
              </h3>
              <p className="text-slate-400 text-[11px] mt-1">
                High School
              </p>
              <p className="text-slate-400 text-[11px]">
                ¡Supérate! Hilasal
              </p>
            </div>
          </div>

          {/* INTERESTS */}
          <div className="flex items-start gap-2">
            <FaHeart className="text-sky-400 text-sm mt-1 shrink-0" />

            <div className="min-w-0">
              <h3 className="text-white text-xs font-semibold">
                Interests
              </h3>
              <p className="text-slate-400 text-[11px] mt-1">
                Medicine, Technology and Innovation
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
