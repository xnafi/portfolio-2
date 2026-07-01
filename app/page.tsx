import AboutMe from "@/src/components/About";
import Banner from "@/src/components/Banner";
import Experiences from "@/src/components/Experience";
import Skills from "@/src/components/Skills";
import ProjectList from "@/src/components/ProjectList";

export default function Home() {
  return (
    <main className="max-w-350 px-4 lg:px-2 py-10 lg:py-0 mx-auto relative overflow-x-hidden">
      <Banner />
      <AboutMe />
      <Skills />
      <Experiences />
      <ProjectList />
    </main>
  );
}
