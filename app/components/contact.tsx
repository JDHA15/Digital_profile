
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight
} from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <div>
          <span className="text-sky-400 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            // Contact
          </span>

          <h2 className="text-white text-xl sm:text-2xl font-semibold mt-1">
            Let's talk together
          </h2>
        </div>

          <p className="text-gray-400 mt-4 max-w-xl">
            Have a project in mind or want to connect?
            Feel free to reach out. I'm always open
            to new opportunities and collaborations.
          </p>
        </div>

        {/* Contact card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="p-8 rounded-2xl border border-blue-900/40 bg-[#0b1220]">
            <FiMail className="text-blue-400 text-3xl mb-6" />

            <h3 className="text-white text-xl font-semibold">
              Email Me
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Let's discuss ideas and opportunities.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=davidjosueha@gmail.com&su=Portfolio%20Contact&body=Hello%20Josu%C3%A9%2C%0A%0AI'm%20reaching%20out%20to%20you%20through%20your%20portfolio.%0A%0AName%3A%20%0ACompany%3A%20%0A%0AMessage%3A%0A%0A%0ABest%20regards%2C%0A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-blue-400 hover:text-blue-300 transition"
            >
              Send an email
              <FiArrowUpRight />
            </a>
          </div>

          <div className="p-8 rounded-2xl border border-blue-900/40 bg-[#0b1220]">
            <h3 className="text-white text-xl font-semibold mb-6">
              Find me online
            </h3>

            <div className="flex flex-col gap-5">

              <a
                href="https://github.com/JDHA15"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-gray-300 hover:text-blue-400 transition"
              >
                <span className="flex items-center gap-3">
                  <FiGithub size={22} />
                  GitHub
                </span>
                <FiArrowUpRight />
              </a>

              <a
                href="https://www.linkedin.com/in/josué-david-hernández-alvarado-123275430/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-gray-300 hover:text-blue-400 transition"
              >
                <span className="flex items-center gap-3">
                  <FiLinkedin size={22} />
                  LinkedIn
                </span>
                <FiArrowUpRight />
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
