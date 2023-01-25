import { AnyAction } from "redux";
import { Moments } from "./store";
import {ActionCreator} from "../src/action/index"

export const HAPPY_BUTTON_CLICKED = "happyButtonClicked";
export const SAD_BUTTON_CLICKED = "sadButtonClicked";

export const happyButtonClicked: ActionCreator<Moments> =(count: number, when: Date)=> ({
    type: HAPPY_BUTTON_CLICKED,
    payload: {intensity: count, when},
});

export const sadButtonClicked: ActionCreator<Moments> = (count: number, when: Date) =>({
    type: SAD_BUTTON_CLICKED,
    payload: {intensity: count, when},

});
