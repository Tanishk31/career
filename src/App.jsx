import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Career from "./components/Career";

import SecondPage from "./components/SecondPage";
import HomePage from "./components/HomePage";

import Navbar from "./components/Navbar";
import LastPage from "./components/LastPage";
import About from "./components/About";
import DiscoverMore from "./components/DiscoverMore";
import DiscoverMore2 from "./components/Discover-more-2";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<SecondPage />} />
          <Route path="/contact" element={<LastPage />} />
          <Route path="/discover-more" element={<DiscoverMore/>}/>
          <Route path="/discover-more-2" element={<DiscoverMore2/>}/>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
