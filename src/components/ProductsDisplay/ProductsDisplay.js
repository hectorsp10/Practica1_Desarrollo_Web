import React, {useContext} from 'react';
import ProductCard from './ProductCard';
import { SearchContext } from "../../contexts/SearchContext";

function ProductsDisplay() {
    const { searchTerm } = useContext(SearchContext);

    const products = [
        { Id: "1", Name: "Las 48 leyes del poder", Author: "Robert Greene", Image: "https://m.media-amazon.com/images/I/61tHXwnTDiL._AC_UF350,350_QL50_.jpg", Price: "10" },
        { Id: "2", Name: "Don Quijote", Author: "Cervantes", Image: "https://pictures.abebooks.com/isbn/9788471664570-es.jpg", Price: "12.90" },
        { Id: "3", Name: "Homo Deus", Author: "Yuval Noah Harari", Image: "https://traficantes.net/sites/default/files/book_covers//9788466362689.gif", Price: "10" },
        { Id: "4", Name: "Sapiens", Author: "Yuval Noah Harari", Image: "https://m.media-amazon.com/images/I/716E6dQ4BXL._AC_UF894,1000_QL80_.jpg", Price: "10" },
        { Id: "5", Name: "Hábitos atómicos", Author: "James Clear", Image: "https://d1fa9n6k2ql7on.cloudfront.net/KFFQT96YQL2J4NM1664836845.jpg", Price: "10"},
        { Id: "6", Name: "Las meditaciones de Marco Aurelio", Author: "Marco Aurelio", Image: "https://m.media-amazon.com/images/I/61iMxtIaXqL._AC_UF894,1000_QL80_.jpg", Price: "10" },
        { Id: "7", Name: "Don La psicología del dinero", Author: "Morgan Housel", Image: "https://ellector.com.pa/cdn/shop/files/9789584299680.jpg?v=1701266620", Price: "10" },
        { Id: "8", Name: "Can't hurt me", Author: "David Goggins", Image: "https://cdn.achology.com/wp-content/uploads/20230724180241/Cant-Hurt-Me_-Master-Your-Mind-and-Defy-the-Odds_-by-David-Goggins.png", Price: "10" },
        { Id: "9", Name: "21 lecciones para el siglo 21", Author: "Yuval Noah Harari", Image: "https://m.media-amazon.com/images/I/61YbVoSdhnL._AC_UF1000,1000_QL80_.jpg", Price: "10" },
    ]

    // filteredProducts recoge los products que coinciden con el filtro de búsqueda
    const filteredProducts = products.filter(product => {
        // si hay algo escrito en la barra de búsqueda
        if (searchTerm) {
            return product.Name.toLowerCase().includes(searchTerm.toLowerCase());
        }
        else{
            return true
        }
    });
    console.log("filteredproducts: ", filteredProducts);

    return (
        <div className="productdisplay-container">
            <div className="row p-0 m-0">
                {filteredProducts.map((product, index) => (
                    // Para definir la cantidad de tarjetas por fila
                    <div className="col-lg-3 col-md-5 col-sm-7 p-0 m-0" key={index}>
                        <ProductCard
                            key={index}
                            Name={product.Name}
                            Image={product.Image}
                            Price={product.Price}
                            Author={product.Author}
                            Id={product.Id}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsDisplay;