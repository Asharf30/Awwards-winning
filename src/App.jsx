import Hero from "./Hero";
import About from "./component/About";
import Navber from "./component/Navbar";
import Features from "./component/Features";
const App = () => {
  return (
    <main className=" relative min-h-screen w-screen  overflow-x-hidden">
      <Navber />
      <Hero />
      <About />
      <Features />
    </main>
  );
};

export default App;
