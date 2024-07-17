import { Suspense } from "react";
import About from "./ui/components/About/About";
import Hero from "./ui/components/MainPageComponents/Hero";
import Services from "./ui/components/Services/Services";
import ProjectsSection from "./ui/components/Projects/Projects";
import ProjectCardSkeleton from "./ui/components/Projects/Skeleton";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className='top-elements-bkg'>
        <About />
        <Services />
      </section>
      <section className='middle-elements-bkg'>
        <Suspense fallback={<ProjectCardSkeleton />}>
          <ProjectsSection />
        </Suspense>
      </section>
      <section className='bottom-elements-bkg'>

      </section>
    </main>
  );
}
