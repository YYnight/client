import {MusicActionType} from '../../R/R'

let initState = {
    playlist:null,
}

export default function (state=initState,action){
    switch(action.type){
        case MusicActionType.PLAYLIST_LOADED:
            return Object.assign({},state,{
                playlist:action.data
            })
        default:
            return Object.assign({},state)
    }
}