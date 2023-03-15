import { Routes, Route } from "react-router-dom";
// components pages
import NavbarComponent from "../../components/Navbar";
import Auth from "../Auth";
import Home from "../Home";
import Portfolio from "../Portfolio";

function App() {
   return (
      <div className="App">
         <NavbarComponent />

         {/* router */}
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/portfolio" element={<Portfolio />} />
         </Routes>
      </div>
   );
}

export default App;
