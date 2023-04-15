import React from "react";
import {counterIncrease,counterDecrease} from "../redux/counter/counterAction";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
    const dispatch=useDispatch();
    const state=useSelector(state=> state.counter.counter);
    return(
        <div>
            <h1>Counter:{state}</h1>
            <button onClick={()=>dispatch(counterIncrease())}>INCREASE</button>
            <button onClick={()=>dispatch(counterDecrease())}>DECREASE</button>
        </div>
    )
 };
 export default Counter;