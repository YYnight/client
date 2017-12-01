import React from 'react'
import NavItem from './NavItem'
import './css/nav.css'

export default class Nav extends React.Component{

    render(){
        return(
            <div className="nav">
                {
                    this.props.items.map((value,index)=> {
                            return(<NavItem key={index} name={value.name} url={value.path} icon={value.icon}/>)
                        })
                }
            </div>
        )
    }
}