import React from 'react'
import './css/audio.css'

export default class Audio extends React.Component{

    render(){
        return(
            <div className="wrap" classID="g_player">
                <div className="btns">
                    <a className="prv">上一首</a>
                    <a className="ply j-flag pas">播放/暂停</a>
                    <a className="nxt">下一首</a>
                </div>
                <div className="head j-flag">
                    <img src={require("../../res/images/cheng.jpg")} alt="wu"/>
                    <a className="head-mask"/>
                </div>
                <div className="play">
                    <div className="j-flag words">
                        <a className="name f-thide f-fl">愚爱</a>
                        <span className="by f-thide f-fl">杨丞琳</span>
                    </div>
                    <div className="m-pbar">
                    <div className="barbg j-flag">
                        <div className="rdy" style={{width:"100%"}}></div>
                        <div className="cur">
                            <span className="f-tdn">
                                <i></i>
                            </span>
                        </div>
                        <div className="time j-flag">
                            <em>1:48</em>/0:48
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}