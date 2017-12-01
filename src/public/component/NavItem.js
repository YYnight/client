import React from 'react'
import {Link} from 'react-router-dom'

export default class NavItem extends React.Component{

    render(){
        return(
            <Link className="menu" to={this.props.url}><span className={this.props.icon}></span>{this.props.name}</Link>
        )
    }
}