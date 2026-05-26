import Hero from "./Hero";
import About from "./component/About";
import Navber from "./component/Navbar";
import Features from "./component/Features";
import Story from "./component/Story";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

const App = () => {
  return (
    <main className=" relative min-h-screen w-screen  overflow-x-hidden">
      <Navber />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
