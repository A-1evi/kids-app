import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LearningOptions from "./components/LearningOption";

import Alphabet from "./components/Alphabet";
import AlphabetPage from "./components/AlphabetPage";
import Storypage from "./components/Storypage";
import ShapesPage from "./components/Shapes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/learn" element={<LearningOptions />} />
      <Route path="/learn/alphabet" element={<Alphabet />} />
      <Route path="/learn/alphabet/:alphabet" element={<AlphabetPage />} />
      <Route path="/learn/story" element={<Storypage />} />
      <Route path="/learn/shapes" element={<ShapesPage />} />
    </Routes>
  );
}

export default App;
