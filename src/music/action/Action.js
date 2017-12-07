import axios from 'axios'
import {MusicActionType} from '../../R/R'

export default{
    findPlayList:()=>(dispatch)=>{
        axios.get("/api/music/findPlayList")
            .then(res=>res.data)
            .then(data=>{
                console.log(data)
                if(data.code==200){
                    dispatch({type:MusicActionType.PLAYLIST_LOADED,data:data.data})
                }
            })
    },
    findMusicById:(id)=>(dispatch)=>{
        axios.get(`/api/music/findMusicById?id=${id}`)
            .then(res=>res.data)
            .then(data=>{
                console.log(data);
            })
    }
}