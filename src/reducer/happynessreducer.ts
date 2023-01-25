import { AnyAction } from "redux";
import { HAPPY_BUTTON_CLICKED } from "../action";
import { Moments } from "../store";
import {produce} from "immer";

export type State = {
    happyMoments: Moments[];
}
export const initialHappyState : State = {
    happyMoments: [],
};

export function happynessReducer(state = initialHappyState, action: AnyAction){
    switch(action.type){
    case HAPPY_BUTTON_CLICKED:
    return produce(state, (draft)=>{
    draft.happyMoments.push(action.payload)})
    default:
    return state;
}};