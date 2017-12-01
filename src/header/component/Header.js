import React from 'react'
import './header.css'
export default class Header extends React.Component{

    render(){
        return(
            <div className="row com-header" style={{width:"100vw"}}>
                <span className="col-md-4 logo" data-scroll-reveal="wait 0.5s then enter left 1s"><img src={require("../../res/images/logo.png")}/></span>
                <span className="col-md-7 sign">与其依靠别人，不如相信自己......</span>
                <span className="weather col-md-1">
                    {/*<iframe name="weather_inc" src="http://i.tianqi.com/index.php?c=code&id=3" width="160" height="70" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>*/}
                    <embed className="weather-content" src="http://i.tianqi.com/index.php?c=code&id=3"/>
                </span>
            </div>
        )
    }
}