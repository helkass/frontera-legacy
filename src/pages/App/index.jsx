import { Routes, Route } from "react-router-dom";
// components pages
import NavbarComponent from "../../components/Navbar";
import Home from "../Home";
import Portfolio from "../Portfolio";

function App() {
   return (
      <div className="App">
         <NavbarComponent />

         {/* router */}
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
         </Routes>
      </div>
   );
}

export default App;
