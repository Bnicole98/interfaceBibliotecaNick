import { useState, React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./componentes/inicio/inicio";
import Principal from "./componentes/principal/principal";
import Fim from "./componentes/fim/fim";
import notFound from "./componentes/notFound/notFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/main" element={<Principal />} />
        <Route path="/fim" element={<Fim />} />
        <Route path="*" element={<notFound />} />
      </Routes>
    </Router>
  );
}

export default App;
