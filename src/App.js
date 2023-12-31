import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="w-screen h-screen">
    {/* <ParticlesBackground /> */}
     <Navbar />
     <Home />
     <About />
     <Skills />
     <Work />
     <Contacts />
    </div>
  );
}

export default App;
