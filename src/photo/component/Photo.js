import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators,dispatch} from 'redux'
import Action from '../action/Action'
import Pagination from '../../public/component/Pagination'
import PhotoList from './PhotoList'
import PhotographList from './PhotographList'
import './photo.css'

class Photo extends React.Component{

    componentWillMount(){
        console.log(this.props)
        this.props.findPhotosByPage(1);
    }
    componentWillUnmount(){
        this.props.initPhotoData();
    }
    onSelectPage(page){
        !this.props.isSelectPhoto?this.props.findPhotosByPage(page):this.props.selectPhotographByPhotoIdAndPage(this.props.selectPhotoId,page)
    }

    render(){
        const photos = this.props.photos?this.props.photos:[];
        return(
            <div>
                {
                    this.props.isSelectPhoto?<PhotographList {...this.props}/>:<PhotoList {...this.props}/>
                }
                <Pagination {...this.props.pageBean} onSelectPage={this.onSelectPage.bind(this)}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return Object.assign({},state.photo);
    
}

function mapDispatchToProps(dispatch){
    return Object.assign({},bindActionCreators(Action,dispatch));
}

export default connect(mapStateToProps,mapDispatchToProps)(Photo)

