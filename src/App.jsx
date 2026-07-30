import { lazy, Suspense, useState, useEffect, useRef } from "react";
import Hero from "./Hero.tsx";
import Navbar from "./component/Navbar.tsx";

// Lazy load below-fold components for code splitting
const About = lazy(() => import("./component/About.tsx"));
const Features = lazy(() => import("./component/Features.tsx"));
const Story = lazy(() => import("./component/Story.tsx"));
const Contact = lazy(() => import("./component/Contact.tsx"));
const Footer = lazy(() => import("./component/Footer.tsx"));

// Minimal loading fallback
const SectionFallback = () => (
  <div className="flex-center h-dvh w-screen">
    <div className="three-body">
      <div className="three-body__dot" />
      <div className="three-body__dot" />
      <div className="three-body__dot" />
    </div>
  </div>
);

const DeferredSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{isVisible ? children : <div className="h-[50vh] w-screen" />}</div>;
};

const App = () => {
  return (
    <main className=" relative min-h-screen w-screen  overflow-x-hidden">
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>
      <DeferredSection>
        <Suspense fallback={<SectionFallback />}>
          <Features />
        </Suspense>
      </DeferredSection>
      <Suspense fallback={<SectionFallback />}>
        <Story />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default App;
