import { Footer } from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { Navbar } from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <ProductCard title="Fender Jazz Bass" price={60000} />
      <ProductCard title="Fender Precision" price={45000} />
      <ProductCard title="Fender Dimension" price={73000} />
      <ProductCard title="Musicman Stingray" price={99000} />
      <Footer />
    </div>
  );
}

export default App;
