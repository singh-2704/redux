import Order from "../model/order";

export type Action = {
    type: string;
    payload?: any;

}

export type ActionCreator<T= undefined> = (...args: any) =>{
    type: string;
     payload?: T;
}
export type Moments ={
    intensity: number;
    when: Date;
}

