import { State } from "../store";
import { Product } from "../model/product";
export function loadOrderSelector(state: State){
    return state.orders.loading;
    
}

    export function orderSelector(state: State){
    const normalizedOrder =  state.orders.orders;
   return (Object.keys(normalizedOrder).map((orderId)=>normalizedOrder[+orderId]));

}
export function ordersMapSelector(state: State){
    return state.orders.orders;
    }

export function ordersProductsSelector(state: State){
   return Object.keys(state.orders.orders).reduce<{[orderId: number]: Product[]}>((previous, currentOrderId)=>{
        const order = state.orders.orders[+currentOrderId];
        const products = order.products.map((pid)=>state.products.products[pid]);
        console.log("order",products)
        return {...previous, [currentOrderId]: products};
    }, {})
}
