import { BrowserRouter, Routes, Route } from "react-router-dom";
import Livros from "./view/Livros";
import Add from "./view/Add";
import Update from "./view/Update";
import NoPage from "./view/Nopage";
import "./style.css"

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<Livros />} />
          <Route path="livros" element={<Livros />} />
          <Route path="adicionar" element={<Add />} />
          <Route path="atualizar/:id" element={<Update />} />
          <Route path="*" element={<NoPage />} />
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
