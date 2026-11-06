import About from "./about";
import Technologies from "./technology";

export default function AboutSection() {
  return (
   <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-6">
  <About />
  <Technologies />
</div>
  );
}