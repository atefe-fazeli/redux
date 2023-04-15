import React from "react";
import { useDispatch,useSelector } from "react-redux";
import {numberDecrease,numberIncrease} from "../redux/number/numberAction";


function Number() {
    const dispatch=useDispatch();
    const state=useSelector(state=> state.number.number);
    return(
        <div>
            <h1>Number:{state}</h1>
            <button onClick={()=>dispatch(numberIncrease())}>INCREASE</button>
            <button onClick={()=>dispatch(numberDecrease())}> DECREASE</button>
        </div>
    )
 };
 export default Number;