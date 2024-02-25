import { CLICKED_SONG } from "../actions/actionType";


const initialState = null

// songReducer(state, {type: CLICKED_SONG, payload: song })

const songReducer = (state=initialState, action) =>{
    console.log("Song reducer is excuted", state, action);

    if(action.type === CLICKED_SONG){
        return action.payload
    }
    else if(action.type === "RESET"){
        return initialState
    }
    else{
        return state
    }

}

export default songReducer;