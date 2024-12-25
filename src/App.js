import {Routes, Route} from "react-router-dom";
import {CartProvider} from "./CartContext";
import SearchView from "./views/SearchView";
import ProductDetailView from "./views/ProductDetailView";
import CartView from "./views/CartView";


function App() {
  return (
      <div className="App">
          <CartProvider>
              <Routes>
                  <Route path="/" element={<SearchView />} />
                  <Route path="/product/:id" element={<ProductDetailView />} />
                  <Route path="/cart" element={<CartView />} />
              </Routes>
          </CartProvider>
      </div>
  );
}

export default App;
