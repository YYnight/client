import React from "react"
import $ from 'jquery'

export default class PhotographList extends React.Component{

    openMask(){
        $(".mask").css("display","block");
    }

    closeMask(){
        $(".mask").css("display","none");
    }

    showImage(path){
        var content = "<img src='/api"+path+"'/>"
        $(".mask .maskContent .neirong").html(content)
        this.openMask();
    }
    render(){
        let photographs = this.props.photographs?this.props.photographs:[];
        return(
            <div className="photoContent">
                <ul>
                    {
                        photographs.map((photograph,key)=>(
                            <li key={key}>
                                <div onClick={this.showImage.bind(this,photograph.path)}>
                                    <img src={"api"+photograph.path}/>
                                    <span className="info">
                                        <p>{photograph.uploadDate}</p>{photograph.imageName}
                                    </span>
                                </div>
                            </li>
                        ))
                    }
                    </ul>
                <div className="mask">
                    <div className="maskContent">

                        <div className="neirong" onClick={this.openMask.bind(this)}>打开</div>
                        <div className="close" onClick={this.closeMask.bind(this)}>X</div>
                    </div>
                </div>
            </div>
        )
    }
}