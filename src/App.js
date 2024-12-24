import {Routes, Route} from "react-router-dom";
import SearchView from "./views/SearchView";
import ProductDetailView from "./views/ProductDetailView";


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<SearchView />} />
          <Route path="/product/:id" element={<ProductDetailView />} />
        </Routes>
      </div>
  );
}

export default App;
