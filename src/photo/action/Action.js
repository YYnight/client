import axios from 'axios'
import {PhotoActionType} from '../../R/R'

export default {
    findPhotosByPage:(page)=>(dispatch)=>{
        axios.get(`/api/photos/${page}`)
            .then(res=>res.data)
            .then(data=>{
                console.log(data);
                dispatch({type:PhotoActionType.PHOTO_LOADED,data:data})
            })
    },
    selectPhotographByPhotoIdAndPage:(photoId,page)=>(dispatch)=>{
        axios.get(`/api/photograph/${photoId}/${page}`)
            .then(res=>res.data)
            .then(data=>{
                console.log(data);
                dispatch({type:PhotoActionType.PHOTOGRAPH_LOADED,data:data,photoId:photoId})
            })
    },
    initPhotoData:()=>(dispatch)=>{
        console.log("已经清除了");
        dispatch({type:PhotoActionType.INIT_DATA})
    }
}