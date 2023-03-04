import { createSelector } from "reselect";
import { State } from "../store";

export function productstateSelector(state: State){
  return state.products
}

export const productsloadingselector = createSelector(productstateSelector,(stateProduct)=>{stateProduct.loading
});

export const productMapSelector = createSelector(productstateSelector, productMap=>productMap.products
  )
export const productsselector = createSelector(productMapSelector,(normalizedProduts)=>{
  return (Object.keys(normalizedProduts).map((orderId)=>normalizedProduts[+orderId]))
});


