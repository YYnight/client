import {PhotoActionType} from '../../R/R'
let initState = {
    photos:[],
    photographs:[],
    pageBean:{},
    isSelectPhoto:false,
    selectPhotoId:null,
}
export default function(state=initState,action){
    switch(action.type){
        case PhotoActionType.INIT_DATA:
            return Object.assign({},initState);
        case PhotoActionType.PHOTO_LOADED:
            return Object.assign({},state,{
                photos:action.data.beans,
                pageBean:{
                   pageNow:action.data.pageNow,
                   pageSize:action.data.pageSize,
                   totalPageCount:action.data.totalPageCount,
                   hasNext:action.data.hasNext,
                   hasPre:action.data.hasPre 
                },
                isSelectPhoto:false,
                selectPhotoId:null
            })
        case PhotoActionType.PHOTOGRAPH_LOADED:
            return Object.assign({},state,{
                photographs:action.data.beans,
                isSelectPhoto:true,
                selectPhotoId:action.photoId,
                pageBean:{
                   pageNow:action.data.pageNow,
                   pageSize:action.data.pageSize,
                   totalPageCount:action.data.totalPageCount,
                   hasNext:action.data.hasNext,
                   hasPre:action.data.hasPre 
                }
            })
        default:
            return Object.assign({},state)
    }
}