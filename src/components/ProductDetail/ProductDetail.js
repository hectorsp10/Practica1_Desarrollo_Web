import React from 'react';
import { useParams } from "react-router-dom";

function ProductDetail() {
    const { id } = useParams();

    const productDetails = {
        1: { Name: "Las 48 leyes del poder", Author: "Robert Greene", Image: "https://m.media-amazon.com/images/I/61tHXwnTDiL._AC_UF350,350_QL50_.jpg", Price: "10" },
        2: { Name: "Don Quijote", Author: "Cervantes", Image: "https://pictures.abebooks.com/isbn/9788471664570-es.jpg", Price: "12.90" },
        3: { Name: "Homo Deus", Author: "Yuval Noah Harari", Image: "https://traficantes.net/sites/default/files/book_covers//9788466362689.gif", Price: "10" },
        4: { Name: "Sapiens", Author: "Yuval Noah Harari", Image: "https://m.media-amazon.com/images/I/716E6dQ4BXL._AC_UF894,1000_QL80_.jpg", Price: "10" },
        5: { Name: "Hábitos atómicos", Author: "James Clear", Image: "https://d1fa9n6k2ql7on.cloudfront.net/KFFQT96YQL2J4NM1664836845.jpg", Price: "10"},
        6: { Name: "Las meditaciones de Marco Aurelio", Author: "Marco Aurelio", Image: "https://m.media-amazon.com/images/I/61iMxtIaXqL._AC_UF894,1000_QL80_.jpg", Price: "10" },
        7: { Name: "Don La psicología del dinero", Author: "Morgan Housel", Image: "https://ellector.com.pa/cdn/shop/files/9789584299680.jpg?v=1701266620", Price: "10" },
        8: { Name: "Can't hurt me", Author: "David Goggins", Image: "https://cdn.achology.com/wp-content/uploads/20230724180241/Cant-Hurt-Me_-Master-Your-Mind-and-Defy-the-Odds_-by-David-Goggins.png", Price: "10" },
        9: { Name: "21 lecciones para el siglo 21", Author: "Yuval Noah Harari", Image: "https://m.media-amazon.com/images/I/61YbVoSdhnL._AC_UF1000,1000_QL80_.jpg", Price: "10" },
    }
    const product = productDetails[id] || "product not found.";

    return (
        <div className="product-detail">
            <h1>{product.Name}</h1>
            <p>{product.Author}</p>
            <img src={product.Image} alt="" />
            <p>Price: {product.Price}</p>
        </div>
    );
}

export default ProductDetail;