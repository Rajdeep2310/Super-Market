import './Styles/Navbar.css'; 
import { useContext, useEffect } from 'react';
import { ProductContext } from '../Context/productContext';


const ProductsList = () => {
  const {products} = useContext(ProductContext);
  
  const [sortedProducts, setSortedProducts] = useState([...products]);
  const [minPrice, setMinPrice] = useState(0);  
  const [maxPrice, setMaxPrice] = useState(5000);

  useEffect(() =>{
    setSortedProducts([...products]);
  }, [products]);


  return (
    <div className="navbar">
      <button className="nav-btn">Sort by Price</button>
      <div className="price-filter">
        <input type="number" placeholder="Min Price" className="price-input" />
        <input type="number" placeholder="Max Price" className="price-input" />
        <button className="nav-btn" >Filter by Price Range</button>
      </div>
      <div className="type-filter">
        <input type="text" placeholder="Type" className="type-input" />
        <button className="nav-btn">Filter by Type</button>
      </div>
    </div>
  );
}

export default ProductsList;
