import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Skill } from "./components/pages/Skill";
import { Portfolio } from "./components/pages/Portfolio";

function App() {
  return (
    <HashRouter basename={import.meta.env.DEV ? "/" : "/portfolio"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
