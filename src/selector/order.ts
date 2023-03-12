import { State } from "../store";
import { Product } from "../model/product";
import { createSelector } from "reselect";

export function orderStateSelector(state: State){
    return state.orders;
}

export function productstateSelector(state: State){
    return state.products
  }

export const productsMapSelector = createSelector(productstateSelector, productMap=>productMap.products
    )
export const loadOrderSelector = createSelector(orderStateSelector,(orderMap)=>{
    return orderMap.loading;
})


export const ordersMapSelector = createSelector(orderStateSelector, (orderMap)=>{
    return orderMap.orders;
});

export const orderSelector = createSelector(ordersMapSelector,(normalizedOrder)=>{
    return (Object.keys(normalizedOrder).map((orderId)=>normalizedOrder[+orderId]));
})

export const ordersProductsSelector = createSelector(ordersMapSelector,productsMapSelector,(orderMap, productMap)=>
{
    return Object.keys(orderMap).reduce<{[orderId: number]: Product[]}>((previous, currentOrderId)=>{
        const order = orderMap[+currentOrderId];
        const products = order.products.map((pid)=>productMap[pid]);
        console.log("order",products)
        return {...previous, [currentOrderId]: products};
    }, {})
}
)

