import { Moments } from "../store";
import { AnyAction } from "redux";
import { SAD_BUTTON_CLICKED } from "../action";
import produce from "immer";

export type State = {
    sadMoments: Moments[];
}
export const initialSadState : State = {
    sadMoments: []
};

export function sadnessReducer(state = initialSadState, action: AnyAction){
    switch(action.type){
    case SAD_BUTTON_CLICKED:
    return produce(state, (draft)=>{
        draft.sadMoments.push(action.payload)
    });
    default:
    return state;
}

};