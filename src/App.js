import ConsumiendoApis from "./Components/ConsumiendoApis/ConsumiendoApis";
import { Footer } from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { Navbar } from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>Error, página no encontrada</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
