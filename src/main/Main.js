import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {HashRouter as Router,Route} from 'react-router-dom'
import Header from '../header/component/Header'
import Nav from '../public/component/Nav'
import Content from '../content/component/Content'
import Photo from '../photo/component/Photo'
import Log from '../log/component/Log'
import Music from '../music/component/Music'
import './main.css'

const items = [
    {name:"主页",path:"/index",icon:"glyphicon glyphicon-home"},
    {name:"个人信息",path:"/info",icon:"glyphicon glyphicon-user"},
    {name:"日志",path:"/log",icon:"glyphicon glyphicon-duplicate"},
    {name:"相册",path:"/photos",icon:"glyphicon glyphicon-picture"},
    {name:"音乐",path:"/music",icon:"glyphicon glyphicon-music"},
    {name:"留言板",path:"/tellme",icon:"glyphicon glyphicon-tags"}
]
class Main extends React.Component{

    render(){
        return (
            <Router>
                <div>
                    <Header style="height:100px">HelloWorld</Header>
                    <Nav items={items}/>
                    <Content>
                        <Route path="/photos" component={Photo}/>
                        <Route path="/log" component={Log}/>
                        <Route path="/music" component={Music}/>
                    </Content>
                </div>
            </Router>
        )
    }
}

function mapStateToProps(state){
    return Object.assign({},state);
}

// function mapDispatchtoProps(dispatch){
//     return Object.assign({},bindActionCreators(Action,dispatch))
// }

export default connect(mapStateToProps)(Main)

