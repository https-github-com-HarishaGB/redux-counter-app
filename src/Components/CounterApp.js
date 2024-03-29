import React from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { increase, decrease, reset } from "../redux/actions/counterAction";



const CounterApp = () =>{
    const count = useSelector(state => state.counter) // helping u to get the current value from store
    console.log(count);
    //helping u to get the current value from store

    //const count store.getState()//

    //store = {a:10, b:20, c:30}
    const dispatch = useDispatch()

    function handleIncrease(){
        dispatch(increase(100))
        //dispatch({type: INCREASE, value=100})
    }

    return(
        <div>
            <h1> {count} </h1>
            <button onClick={handleIncrease}> Increase </button>

            <button onClick={()=>dispatch(reset())}> Universal Reset</button>
        </div>
    )
}

export default CounterApp;