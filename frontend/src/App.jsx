import { Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Collections from "./pages/Collections";
function App() {
  return (

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
  );
}

export default App;
