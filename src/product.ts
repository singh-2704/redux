import { AnyAction } from "redux";
import { Moments } from "./action/index";

export const HAPPY_BUTTON_CLICKED = "happyButtonClicked";
export const SAD_BUTTON_CLICKED = "sadButtonClicked";
type ActionCreator<T> = (...args: any) =>{
    type: string, payload: T,
}
export const happyButtonClicked: ActionCreator<Moments> =(count: number, when: Date)=> ({
    type: HAPPY_BUTTON_CLICKED,
    payload: {intensity: count, when},
});

export const sadButtonClicked: ActionCreator<Moments> = (count: number, when: Date) =>({
    type: SAD_BUTTON_CLICKED,
    payload: {intensity: count, when},

});