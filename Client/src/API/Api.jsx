import axios from "axios";


export const fetchProducts = async () => {
    try {
      const reqUrl = "http://localhost:5000/api/products"
      const res = await axios.get(reqUrl);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };