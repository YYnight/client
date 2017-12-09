import React from 'react'
import './hotSinger.css'

export default class HotSinger extends React.Component{

    componentWillMount(){
        this.props.findSingers();
    }
    render(){
        return(
        <div style={{width:"799px",margin:"auto",height:"573px"}}>
            <ul className="fcb">
                {
                    this.props.hotSingers.map((value,key)=>{
                        return(
                            <li key={key}>
                                <div className="u-cover">
                                    <a>
                                        <img src={value.picUrl} alt=""/>
                                        <span className="msk"></span>
                                    </a>
                                </div>
                                <p style={{fontWeight:"normal"}}><a className="nm f-thide">{value.name}</a></p>
                            </li>
                        )
                    })
                }
                <div className="clear"></div>
            </ul>
        </div>
        )
    }
}