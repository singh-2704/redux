import { AnyAction } from "redux";
import { ActionCreator } from "./index";
import {Product} from '../model/product';

export const LOAD_PRODUCTS = "LOAD_PRODUCTS"
export const loadProductsAction: ActionCreator=
()=>({
    
        type: LOAD_PRODUCTS,
        payload: undefined,
    
});

export const PRODUCTS_LOADED = "PRODUCTS_LOADED"
export const productsLoadedAction: ActionCreator <Product[]>=
(products: Product[])=>({
    
        type: PRODUCTS_LOADED,
        payload: products,
    
});