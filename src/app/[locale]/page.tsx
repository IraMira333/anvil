import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Partner } from "@/components/Partner";
import { Services } from "@/components/Services";
import ModelScroller from "@/components/shared/ModelScroller";
import ModelScrollerTab from "@/components/shared/ModelScrollerTab";
import { Stages } from "@/components/Stages";
import { Team } from "@/components/Team";
import { Vacancies } from "@/components/Vacancies";

export default function Home() {
  return (
    <>
      <ModelScroller />
      <ModelScrollerTab />
      <Hero />
      <About />
      <Partner />
      <Team />
      <Services />
      <Stages />
      <Gallery />
      <Vacancies />
      <Footer />
    </>
  );
}
