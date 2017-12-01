import React from 'react'
import './css/timeline.css'

export default class TimeLine extends React.Component{
    render(){
        return(
            <ul className="cbp_tmtimeline">
                {
                    this.props.items.map((value,key)=>(
                        <li key={key}>
                            <time className="cbp_tmtime"><span>{value.date.month}</span><span>{value.date.year}</span></time>
                            <div className="cbp_tmicon"></div>
                            <div className="cbp_tmlabel" data-scroll-reveal="enter right 1s">
                                <h2>{value.title}</h2>
                                <p>
                                    <span className="blogpic">
                                        <a href=""><img src={value.img}/></a>
                                    </span>
                                    {value.digest}
                                </p>
                                <a href="" className="readmore">阅读全文&gt;&gt;</a>
                            </div>
                        </li>))
                }
            </ul>
        )
    }
}