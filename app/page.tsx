import Hero from "./ui/components/MainPageComponents/Hero";
import Services from "./ui/components/Services/Services";
import ProjectsSection from "./ui/components/Projects/Projects";
import UsersFeedbacks from "./ui/components/userFeedback/Feedbacks";

// export const experimental_ppr = true;

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <section className='middle-elements-bkg'>
        <ProjectsSection />
      </section>
      <UsersFeedbacks />
    </main>
  );
}
