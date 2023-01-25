import { State } from "../store";

export function productsloadingselector(state: State) {
  return state.products.loading;
}
export function productsselector(state: State) {
  const normalizedProduts = state.products.products;
  return (Object.keys(normalizedProduts).map((orderId)=>normalizedProduts[+orderId]));
}
