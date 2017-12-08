import React from 'react'
import "./list.css"

export default class RecommendList extends React.Component{

    playMusic(id){
        this.props.findMusicById(id);
    }

    render(){
        return(
            <div className="blk">
                <div className="top">
                    <div className="cver">
                        <img className="j-img" src={this.props.source.playlist.coverImgUrl} alt=""/>
                        <a href="" className="msk"></a>
                    </div>
                    <div className="tit">
                        <a href=""><h3 className="f-thide">{this.props.source.playlist.name}</h3></a>
                        <div className="music-btn">
                            <a href="" className="s-bg s-bg-9"></a>
                            <a href="" className="s-bg s-bg-10"></a>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:20}}>
                    <ol>
                        {
                            
                            this.props.source.playlist.tracks.map((value,key)=>{
                                console.log(1);
                                if(key<=9){
                                    return(
                                        <li key={key}>
                                            <span className={(key>2)?"no":"no no-top"}>{key+1}</span>
                                            <a className="nm" href="">{value.name}</a>
                                            <div className="oper">
                                                <a className="s-bg s-bg-11" onClick={this.playMusic.bind(this,value.id)}></a>
                                                <a href="" className="s-bg u-icn"></a>
                                            </div>
                                        </li>
                                    )
                                }
                            })
                        }
                        
                    </ol>
                    <div className="more">
                        <a href="" className="s-fc0">查看全部></a>
                    </div>
                </div>
            </div>
        )
    }
}