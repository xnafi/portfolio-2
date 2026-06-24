import AboutMe from "@/src/components/About";
import Banner from "@/src/components/Banner";
import Skills from "@/src/components/Skills";

export default function Home() {
  return (
    <div className="max-w-350 px-4 lg:px-2 py-10 lg:py-0 mx-auto relative overflow-x-hidden">
      <Banner />
      <AboutMe />
      <Skills />
    </div>
  );
}
