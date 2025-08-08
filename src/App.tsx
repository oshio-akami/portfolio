import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Skill } from "./components/pages/Skill";
import { Portfolio } from "./components/pages/Portfolio";

function App() {
  return (
    <BrowserRouter
      basename={
        import.meta.env.DEV ? "" : "https://oshio-akami.github.io/portfolio/"
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
