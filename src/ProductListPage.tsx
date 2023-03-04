import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsloadingselector, productsselector } from "./selector/product";
import { loadProductsAction, productsLoadedAction } from "./action/Product";
import axios from 'axios';
import { ORDER_LOADED } from "./action/order";

type ProductListPageProps = {};
const ProductListPage: FC<ProductListPageProps> = (props) => {
  const loading = useSelector(productsloadingselector);
  const products = useSelector(productsselector);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadProductsAction());
    axios.get("https://dummyjson.com/products").then((response)=>dispatch(productsLoadedAction(response.data.products)));
  }, [ORDER_LOADED]);
 
  return (
    <div>{loading && <div className="bg-red-500">...Loading</div>}
      {products &&
        products.map(p => (
          <div key={p.id} className="text-blue-500">
            {p.id}. {p.title} (Rs{p.price})
          </div>
        ))}
    </div>
  );
};

ProductListPage.defaultProps = {};
export default ProductListPage;
