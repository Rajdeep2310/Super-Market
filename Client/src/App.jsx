import Header from "./Components/Headers.jsx";
import ProductsItem from "./Components/ProductsItem.jsx";
import ProductsList from "./Components/ProductsList.jsx";
import {ProductProvider} from "./Context/productContext.jsx";
const App = () => {
  return (
    <ProductProvider>
        <div>
        <Header/>
        {/* <ProductsList /> */}
        <ProductsItem />
      </div>
    </ProductProvider>
  );
};

export default App;
