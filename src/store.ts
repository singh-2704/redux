import {combineReducers, createStore} from 'redux';
import { happynessReducer } from './reducer/happynessreducer';
import { sadnessReducer } from './reducer/sadnessreducer';
import { productsReducer } from './reducer/product';
import { orderReducer } from './reducer/order';


export type Moments = {
    happy: [];
    sad: []
}



const reducer = combineReducers({
happy: happynessReducer,
sad: sadnessReducer,
products: productsReducer,
orders: orderReducer,
});

export type State = ReturnType<typeof reducer>;

const store = createStore(reducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
