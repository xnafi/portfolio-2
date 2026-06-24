import AboutMe from "@/src/components/About";
import Banner from "@/src/components/Banner";
import Skills from "@/src/components/Skills";

export default function Home() {
  return (
    <div className="page-">
      <Banner />
      <AboutMe />
      <Skills />
    </div>
  );
}
