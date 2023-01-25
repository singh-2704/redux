import { State } from "../store";

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
