import {MusicActionType} from '../../R/R'

let initState = {
    playlist:null,
    currentMusic:null,
    playState:false,
    hotSingers:[],
}

export default function (state=initState,action){
    switch(action.type){
        case MusicActionType.PLAYLIST_LOADED:
            return Object.assign({},state,{
                playlist:action.data
            })
        case MusicActionType.PLAY_MUSIC:
            return Object.assign({},state,{
                currentMusic:{
                    musicUrl:action.data.musicUrl,
                    name:action.data.name,
                    author:action.data.author,
                    picUrl:action.data.picUrl
                }
            })
        case MusicActionType.OPEN_PLAY_STATE:
            return Object.assign({},state,{
                playState:true
            })
        case MusicActionType.CANCEL_PLAY_STATE:
            return Object.assign({},state,{
                playState:false
            })
        case MusicActionType.GET_HOTSINGER:
            return Object.assign({},state,{
                hotSingers:action.data
            })
        default:
            return Object.assign({},state)
    }
}