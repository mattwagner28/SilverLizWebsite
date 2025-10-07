import FloatingLyrics from "./FloatingLyrics";
// import UnderConstruction from './UnderConstruction';
import Nav from "./Nav";
import { useState } from 'react';
// import About from "./About.";

function App() {
  const [navOpen, setNavOpen] = useState(false);


  return (
    <div className="App">
      {/* <UnderConstruction /> */}

      <FloatingLyrics setNavOpen={setNavOpen} />

      <button
        className="absolute top-6 right-6 z-50 flex flex-col justify-center items-center w-16 h-16 bg-amber-800 bg-opacity-30 rounded-lg text-white hover:bg-opacity-80 transition" 
        aria-label="Menu"
        onClick={() => setNavOpen(true)}
      >
        <span className="block w-10 h-1 bg-white mb-2 rounded"></span>
        <span className="block w-10 h-1 bg-white mb-2 rounded"></span>
        <span className="block w-10 h-1 bg-white rounded"></span>
      </button>

      {/* <About /> */}
      {navOpen ? <Nav setNavOpen={setNavOpen} /> : null}
    </div>
  );
}

export default App;
