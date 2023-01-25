import { AnyAction } from "redux";
import { PRODUCTS_LOADED, LOAD_PRODUCTS } from "../action/Product";
import { produce } from "immer";
import {Product} from '../model/product';
import { DRAFTABLE } from "immer/dist/internal";

type normalizedProduct = {
  [id: number]: Product;
}
type State = {
  products: Product[];
  loading: boolean;
};
const initialState: State = {
  products: [],
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
        const order = action.payload;
        // const products = order.reduce((previous: Product[],
        // current: any)=>
        //   ([...previous, current.products]),[]
        //   )
        //   console.log("order", order)
          const normalizedProduct = order.reduce((previous: normalizedProduct,
            current: any)=>
            ({...previous, [current.id]: current}),{}
            );
            console.log("normalizedProducts",normalizedProduct)
        draft.products = normalizedProduct;
        draft.loading = false;
      });
    default:
      return state;
  }
}
