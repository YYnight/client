import React from 'react'
import {Glyphicon} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators,dispatch} from 'redux'
import Action from '../action/Action'
import './music.css'
import RecommendList from './RecommendList'
import HotSinger from './HotSinger'
import Audio from '../../public/component/Audio'

class Music extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectTab:"list",
        }
    }

     componentWillMount(){
        this.props.findPlayList();
    }
    componentDidMount(){
        this.searchMusicListener();
    }
    searchMusicListener(){
        document.getElementById("searchMusic").addEventListener("keydown",(event)=>{
            if(event.keyCode == 13){
                this.props.findMusicByName(document.getElementById("searchMusic").value);
            }
        })
    }

    onTabSelect(tabname){
        this.setState({selectTab:tabname})
    }

    getContent(){
        switch(this.state.selectTab){
            case "list":
                return (
                    <div>
                    {
                        this.props.playlist?<div className="music-content">
                        <RecommendList {...this.props} source={this.props.playlist.hotSongs}/>
                        <RecommendList {...this.props} source={this.props.playlist.newSongs}/>
                        <RecommendList {...this.props} source={this.props.playlist.elecSongs}/>
                        <div className="clear"></div>
                    </div>:'' 
                    }
                    <div className="player" style={{height:"80px",position:"relative",background:"black",marginTop:"10px"}}>
                        <Audio {...this.props}/>
                    </div>
                </div>
                )
            case "singer":
                return (
                    <div>
                        <div className="clear"></div>
                        <HotSinger {...this.props}/>
                    </div>
                )
            case "search":
                return ;
            default:
                break;
        }
    }

    render(){
        return(
            <div className="m-top">
                <div className="music-nav">
                    <ul className="m-nav">
                        <li className={(this.state.selectTab=="list")?"selected":""} onClick={this.onTabSelect.bind(this,"list")}><span>榜单</span></li>
                        <li className={(this.state.selectTab=="singer")?"selected":""} onClick={this.onTabSelect.bind(this,"singer")}><span>热门歌手</span></li>
                    </ul>
                    <div className="input-con"><Glyphicon className="icon" glyph="glyphicon glyphicon-search"/><input className="input" id="searchMusic" type="text"/>   </div>            
                </div>
                <div className="clear"></div>
                {
                    this.getContent()
                }
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return Object.assign({},state.music);
}

function mapDispatchToProps(dispatch){
    return Object.assign({},bindActionCreators(Action,dispatch));
}
export default connect(mapStateToProps,mapDispatchToProps)(Music)