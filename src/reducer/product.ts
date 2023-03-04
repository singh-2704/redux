import { AnyAction } from "redux";
import { PRODUCTS_LOADED, LOAD_PRODUCTS } from "../action/Product";
import { produce } from "immer";
import {Product} from '../model/product';
import { normalize, schema } from "normalizr";
import { ORDER_DETAIL_LOADED, ORDER_LOADED } from "../action/order";


type normalizedProduct = {
  [id: number]: Product;
}
export type State = {
  products: normalizedProduct;
  loading: boolean;
};
const initialState: State = {
  products: {},
  loading: false,
};

export function productsReducer(state = initialState, action: AnyAction): State {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return produce(state, (draft) => {
        draft.loading = true;
       });
    case PRODUCTS_LOADED:
      return produce(state, (draft) => {
        const products = action.payload;
        const productsEntity = new schema.Entity("products");
        const normalizedProduct = normalize(products, [productsEntity])
        console.log("data", normalizedProduct);
        draft.products = normalizedProduct.entities.products!;
        draft.loading = false;
      });
      case ORDER_LOADED:
        return produce(state,(draft)=>{
          const orders = action.payload;
          const products = orders.reduce((previous: Product[], current: any)=>{
            return [...previous, ...current.products];
          },[])
          const productsEntity = new schema.Entity("Products")
          const data = normalize(products, [productsEntity]);
          console.log("productreudcerdata", data);
          draft.products = data.entities.Products!;
        })
        case ORDER_DETAIL_LOADED:
          return produce(state,(draft)=>{
          const order = action.payload;
          const products = order.products;
          const productEntity = new schema.Entity("products");
  
          const data = normalize(products, [productEntity]);
          console.log("productreducerdata",data);
          draft.products = data.entities.products!;
          });
    default:
      return state;
  }
}
