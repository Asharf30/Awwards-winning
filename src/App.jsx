import Hero from "./Hero";
import About from "./component/About";
import Navber from "./component/Navbar";

const App = () => {
  return (
    <main className=" relative min-h-screen w-screen  overflow-x-hidden">
      <Navber />
      <Hero />
      <About />
    </main>
  );
};

export default App;
