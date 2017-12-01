import React from 'react'
import {Image} from 'react-bootstrap'
export default class PhotoList extends React.Component{

    onSelect(id){
        this.props.selectPhotographByPhotoIdAndPage(id,1);
    }

    render(){
        let photos = this.props.photos?this.props.photos:[];
        return(
            <div className="albums" data-scroll-reveal="wait 0.5s then enter top 1s">
                {
                   photos.map((value,key)=>(
                        <div className="albums-inner" key={key}>
                            <div className="albums-tab photo-anim " id="photo-anim1">
                                {
                                    value.photographs.map((photograph,key)=>(
                                        <Image src={"/api"+photograph.path} key={key}/>
                                    ))
                                }
                            </div>
                            <div className="albums-tab-text"><a onClick={this.onSelect.bind(this,value.id)}>{value.name}</a><span>{value.photographs.length}pictures</span></div>
                        </div>
                    ))
                }
            </div>
        )
    }
}