import React, { memo, useState } from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { sadButtonClicked } from "./action";
import Button from "./Button";

type SadIncrementorProps = {};

const SadIncrementor: FC<SadIncrementorProps> =(props)=>{
    const[quantity, setQuantity] = useState(0);
const dispatch = useDispatch();
    function increment(){
        dispatch(sadButtonClicked(quantity, new Date()))
        console.log("sadincrementorclicked")
    }
return<>
<div>Are You sad</div>
<input type="number" value = {quantity} onChange={(event)=>setQuantity(+event.target.value)}/>
<Button theme="primary" onClick={increment}> yes</Button>

</>
}
SadIncrementor.defaultProps = {}

export default SadIncrementor;
