import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LearningOptions from "./components/LearningOption";

import Alphabet from "./components/Alphabet";
import AlphabetPage from "./components/AlphabetPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/learn" element={<LearningOptions />} />
      <Route path="/learn/alphabet" element={<Alphabet />} />
      <Route path="/learn/alphabet/:alphabet" element={<AlphabetPage />} />
    </Routes>
  );
}

export default App;
