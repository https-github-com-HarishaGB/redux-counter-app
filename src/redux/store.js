import { createStore } from "redux";
import counterReducer from "./reducers/counterReducer";


const store = createStore(counterReducer)




export default store


//step1;
//counterReducer() => 0

//dispatch({type: INCREASE})
//counterReducer(0, {type: INCREASE}) => 1

//dispatch({type: INCREASE})
//counterReducer(1, {type: INCREASE}) => 2