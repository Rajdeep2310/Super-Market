import { createContext, useState, useEffect } from 'react';
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try{
        axios.get("http://localhost:5000/api/products").then((response) => {
            setProducts(response.data);
        });
    }catch(error){
        console.log(error);
    }
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
