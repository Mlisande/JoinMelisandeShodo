import { Container } from "@mui/material";
import HeroTitle from "./components/HeroTitle";
import IntroSection from "./components/Intro";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhyShodo from "./components/WhyShodo";
import ButtonContact from "./components/ButtonContact";

export default function Home() {
  return (
    <Container>
      <HeroTitle />
      <ButtonContact />
      <IntroSection />
      <About />
      <WhyShodo />
      <Services />
      <Contact />
      <Footer />
    </Container>
  );
}
