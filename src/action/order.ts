import { ActionCreator } from "./index";
import Order from "../model/order";
export const LOAD_ORDER = "LOAD_ORDER"
export const loadOrdersAction: ActionCreator=
()=>({
    
        type: LOAD_ORDER,
        payload: undefined,
        
    
});

export const ORDER_LOADED = "ORDER_LOADED"
export const ordersLoadedAction: ActionCreator<Order[]>=
(orders: Order[])=>({
    
        type: ORDER_LOADED,
        payload: orders,
    
});

export const ORDER_DETAIL_LOADED = "ORDER_DETAIL_LOADED"
export const ordersDetailLoadedAction: ActionCreator<Order>=
(order: Order)=>({
    
        type: ORDER_DETAIL_LOADED,
        payload: order,
    
});
