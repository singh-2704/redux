import React, { memo } from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { happyButtonClicked } from "./action";
import Button from "./Button";
import { useState } from "react";

type HappyIncrementorProps = {};

const HappyIncrementor: FC<HappyIncrementorProps> =(props)=>{
    const[quantity, setQuantity]= useState(0)
    const dispatch = useDispatch();
    function increment(){
        dispatch(happyButtonClicked(quantity, new Date()));
        console.log("happyincrementorclicked");
    }

return<>

<div>Are You Happy</div>
<input type="number" value = {quantity} onChange={(event)=>setQuantity(+event.target.value)}/>
<Button theme="primary" onClick={increment}>yes</Button>
</>
}
HappyIncrementor.defaultProps = {}
export default HappyIncrementor;
