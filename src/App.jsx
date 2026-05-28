import { lazy, Suspense } from "react";
import Hero from "./Hero";
import Navber from "./component/Navbar";

// Lazy load below-fold components for code splitting
const About = lazy(() => import("./component/About"));
const Features = lazy(() => import("./component/Features"));
const Story = lazy(() => import("./component/Story"));
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

const App = () => {
  return (
    <main className=" relative min-h-screen w-screen  overflow-x-hidden">
      <Navber />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Features />
      </Suspense>
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
