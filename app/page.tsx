import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Services from "./components/Services";
import Projects from "./components/Projects";
import WhyChooseUs from "./components/WhyChooseUs";
import Workflow from "./components/Workflow";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <TrustStrip />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Workflow />
        <Testimonials />
        <Blog />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
