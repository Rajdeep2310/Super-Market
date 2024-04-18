import { useContext } from 'react';
import { ProductContext } from '../Context/productContext';
import ("./Styles/ProductsItem.css")


const ProductsItem = () => {
 const products = useContext(ProductContext);
  return (
    <>
      {products.products.length > 0 &&
        products.products.map((product) => (
          <div className="product-container"  key={product._id}>
            <div className="product-card">
              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />
              <div className="product-details">
                <h3 style={{ fontWeight: "700" }}>{product.name}</h3>
                <p style={{ fontWeight: "300" }}>{product.description}</p>
                <p style={{ fontWeight: "500" }}>
                  Price: {product.price} Rs/Kg
                </p>
              </div>
			<button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
    </>
  );
};

export default ProductsItem;
