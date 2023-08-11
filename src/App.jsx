import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar,  Works,Pitch, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-black select-none'>
        <div className=' bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience /> 
        <Works />
        <Pitch />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
