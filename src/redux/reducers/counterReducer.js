import { INCREASE, DECREASE, RESET } from "../actions/actionType";


const initialState = 0

//counterReducer(0, {type: INCREASE})
//counterReducer(0, {type: INCREASE, value: 100})


const counterReducer = (state=initialState, action) =>{
    console.log("Counter Reducer is executed", action );
    switch(action.type){
        case INCREASE:
            return state+ action.value
         
        case DECREASE:
            return state-1

        case RESET:
            return 0

        default:
            return state    
    }
}

//counterReducer(undefined, undefined)

//counterReducer(100, {type: INCREASE})
//counterReducer(100, {type: DECREASE})
//counterReducer(100, {type: RESET})

export default counterReducer;