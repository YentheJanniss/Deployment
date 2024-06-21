import { Routes, Route } from "react-router-dom";
import Home from "./pages/Layout";
import { Analytics } from '@vercel/analytics/react';

const App = () => {

  return (
    
    <>
        
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
