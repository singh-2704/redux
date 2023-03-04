import { Action } from "../action/index";
import { LOAD_ORDER } from "../action/order";
import { produce } from "immer";
import Order from "../model/order";
import { ORDER_LOADED } from "../action/order";
import { ORDER_DETAIL_LOADED } from "../action/order";
import { normalize, schema } from "normalizr";

type NormalizedOrder = { [id: number]: Order };
export type State = {
  orders: NormalizedOrder;
  loading: boolean;
};
export const initialState: State = {
  orders: {},
  loading: false,
};

export function orderReducer(state = initialState,action: Action): State {
  switch (action.type) {
    case LOAD_ORDER:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case ORDER_LOADED:
      return produce(state, (draft) => {
        draft.loading = false;
        const orderArr = action.payload;
        const productEntity = new schema.Entity("product");
        const orderEntity = new schema.Entity("orders",
        {products: [productEntity]});
        const data = normalize(orderArr, [orderEntity]);
console.log("data",data)
        
        draft.orders = data.entities.orders!;
      });
    case ORDER_DETAIL_LOADED:
      return produce(state, (draft) => {
        const order = action.payload;
        const productEntity = new schema.Entity("products");
        const orderEntity = new schema.Entity("order",
        {products: [productEntity],});
        const data = normalize(order, orderEntity);
        console.log("singleOrder",data)
        draft.orders[order.id] = data.entities.order![order.id];
      });
    default:
      return state;
  }
}
