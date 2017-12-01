import React from 'react'

export default class Pagination extends React.Component{

    onSelectPage(page){
        const {onSelectPage} = this.props;
        onSelectPage?onSelectPage(page):console.log("有问题");
    }
    render(){
        return(
                <div style={{textAlign:'center',margin:'2vh auto',lineHeight:'4vh'}}>页次：{this.props.pageNow}/{this.props.totalPageCount}
                    <a onClick={this.onSelectPage.bind(this,1)}>首页</a>
                    {
                        this.props.hasPre?<a onClick={this.onSelectPage.bind(this,this.props.pageNow-1)}>上一页</a>:<span>上一页</span>
                    }
                    {
                        this.props.hasNext?<a onClick={this.onSelectPage.bind(this,this.props.pageNow+1)}>下一页</a>:<span>下一页</span>
                    }
                    <a onClick={this.onSelectPage.bind(this,this.props.totalPageCount)}>尾页</a>
                </div>
        )
    }
}