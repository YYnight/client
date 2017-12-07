import React from 'react'
import {Glyphicon} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators,dispatch} from 'redux'
import Action from '../action/Action'
import './music.css'
import RecommendList from './RecommendList'
import Audio from '../../public/component/Audio'

class Music extends React.Component{
     componentWillMount(){
        console.log(this.props)
        this.props.findPlayList();
    }

    render(){
        console.error(this.props)
        return(
            <div className="m-top">
                <div className="music-nav">
                    <ul className="m-nav">
                        <li><span>推荐</span></li>
                        <li><span>推荐</span></li>
                        <li><span>推荐</span></li>
                    </ul>
                    <div className="input-con"><Glyphicon className="icon" glyph="glyphicon glyphicon-search"/><input className="input" type="text"/>   </div>            
                </div>
                <div className="clear"></div>
                {this.props.playlist?<div className="music-content">
                <RecommendList {...this.props} source={this.props.playlist.hotSongs}/>
                <RecommendList {...this.props} source={this.props.playlist.newSongs}/>
                <RecommendList {...this.props} source={this.props.playlist.elecSongs}/>
                <div className="clear"></div>
                </div>:''}


                <div className="player" style={{width:"100%",position:"relative",height:"100px"}}>
                    <Audio/>
                </div>
                
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