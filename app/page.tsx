import { Suspense } from "react";
import About from "./ui/components/About/About";
import Hero from "./ui/components/MainPageComponents/Hero";
import Services from "./ui/components/Services/Services";
import ProjectsSection from "./ui/components/Projects/Projects";
import ProjectsCardsSkeleton from "./ui/components/Projects/ProjectsCardsSkeleton";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <section className='top-elements-bkg'> */}
      <Services />
      {/* <About /> */}
      {/* </section> */}
      <section className='middle-elements-bkg'>
        <ProjectsSection />
      </section>
      <section className='bottom-elements-bkg'>

      </section>
    </main>
  );
}
