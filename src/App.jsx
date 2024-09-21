import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LearningOptions from './components/LearningOption';

import Alphabet from './components/Alphabet';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/learn" element={<LearningOptions/>} />
      <Route path="/learn/:letter" element={<Alphabet/>} />
    </Routes>
  );
}

export default App;
