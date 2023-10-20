import "./App.scss";
import Home from "./pages/Home";
import Products from "./pages/searchedProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="products/:query" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
