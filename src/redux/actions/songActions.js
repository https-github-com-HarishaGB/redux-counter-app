
import {CLICKED_SONG} from "./actionType";


export const clickedSong = (song) =>{

    return{
        type: CLICKED_SONG,
        payload: song
    }
}