// import Image from "next/image";
import About from "./ui/components/About/About";
import Hero from "./ui/components/MainPageComponents/Hero";
import Services from "./ui/components/Services/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className='top-elements-bkg'>
        <About />
        <Services />
      </section>
      <section className='middle-elements-bkg'>

      </section>
      <section className='bottom-elements-bkg'>

      </section>
    </main>
  );
}
