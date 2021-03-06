import React from 'react'
import './css/audio.css'

export default class Audio extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isPlay:false,
            length:0,
            cur:0,
            player:null,
        }
    }

    onPlayOrPause(){
        this.setState({isPlay:!this.state.isPlay})  
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.playState){
            this.setState({isPlay:true})
            this.props.cancelPlayState();
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        const player = document.getElementById("player");
        if(nextState.isPlay){
            if(player.src!=""&&player.src!=null&&player.src!=undefined){
                player.play();
                this.progressBar();
            }
        }else{
            player.pause();
            // this.setState({cur:player.currentTime})
        }
        return true;
    }

    progressBar(){
        const player = document.getElementById("player");
        const curBar = document.getElementById("cur");
        const timer = setInterval(()=>{
            const length = player.duration;
            const cur = player.currentTime;
            if(length){
                curBar.style.width=""+parseFloat(cur/length)*100+"%";
                document.getElementById("time").innerHTML = "<em>"+this.formatSeconds(cur)+"</em>/"+this.formatSeconds(length);
            }
        },50)
    }

    formatSeconds(value) {
        let seconds = parseInt(value);// 秒
        let minutes = 0;// 分
        if(seconds > 60) {
            minutes = parseInt(seconds/60);
            seconds = parseInt(seconds%60);
        }
        if(seconds<10){
            seconds = "0"+seconds;
        }
        if(minutes<10){
            minutes = "0"+minutes;
        }
        return minutes+":"+seconds;
    }

    formatTime(num){
        let time = Math.round(parseFloat(num/60)*100)/100;
        if(time<10){
            time = "0"+time;
        }
        return time.replace('.',':');
    }

    componentDidMount(){
        let that = this;
        let bar = document.getElementById("bar");
        let slider = document.getElementById("slider");
        let curBar = document.getElementById("cur");
        let g_player = document.getElementById("g_player");
        const player = document.getElementById("player");
        bar.addEventListener("click",function(e){
            if(that.props.currentMusic){
                player.currentTime = e.offsetX/bar.offsetWidth*player.duration;
            }
        })
        // slider.addEventListener("mousedown",function(e1){
        //     console.log(bar.clientLeft)
            
        //     g_player.addEventListener("mousemove",function(e){
        //         if(e.target == this){
        //             const start = e.offsetX;
        //             g_player.addEventListener("moveup",function(upEvent){
        //                 return;
        //             })
        //         }
        //     })
        // })
    }

    render(){
        return(
            <div className="wrap" id="g_player">
                <audio id="player" src={this.props.currentMusic?this.props.currentMusic.musicUrl:""} loop="true"/>
                <div className="btns">
                    <a className="prv">上一首</a>
                    <a className={this.state.isPlay?"ply j-flag":"j-flag pas"} onClick={this.onPlayOrPause.bind(this)}>播放/暂停</a>
                    <a className="nxt">下一首</a>
                </div>
                <div className="head j-flag">
                    <img src={this.props.currentMusic?this.props.currentMusic.picUrl:""} alt=""/>
                    <a className="head-mask"/>
                </div>
                <div className="play">
                    <div className="j-flag words">
                        <a className="name f-thide f-fl">{this.props.currentMusic?this.props.currentMusic.name:""}</a>
                        <span className="by f-thide f-fl">{this.props.currentMusic?this.props.currentMusic.author:""}</span>
                    </div>
                    <div className="m-pbar">
                    <div className="barbg j-flag" id="bar">
                        <div className="rdy" style={{width:"100%"}}></div>
                        <div className="cur" id="cur">
                            <span className="f-tdn" id="slider">
                                <i></i>
                            </span>
                        </div>
                    </div>
                    <div className="time j-flag" id="time">
                            <em>00:00</em>/00:00
                    </div>
                </div>
                </div>
            </div>
        )
    }
}