import Hero from "./ui/components/MainPageComponents/Hero";
import Services from "./ui/components/Services/Services";
import ProjectsSection from "./ui/components/Projects/Projects";
import Feedbacks from "./ui/components/feedback/Feedbacks";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <section className='middle-elements-bkg'>
        <ProjectsSection />
      </section>
      <Feedbacks />
    </main>
  );
}
