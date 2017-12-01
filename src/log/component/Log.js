import React from 'react';
import TimeLine from '../../public/component/TimeLine'

const data=[
    {
        date:{year:'2017',day:'0808'},
        title:'三步实现滚动条触动css动画效果',
        img:'/api/upload/images/p03.jpg',
        digest:'现在很多网站都有这种效果，我就整理了一下，分享出来。利用滚动条来实现动画效果，ScrollReveal.js 用于创建和管理元素进入可视区域时的动画效果，帮助你的网站增加吸引力'
    },
    {
        date:{year:'2017',day:'0808'},
        title:'三步实现滚动条触动css动画效果',
        img:'/api/upload/images/p03.jpg',
        digest:'现在很多网站都有这种效果，我就整理了一下，分享出来。利用滚动条来实现动画效果，ScrollReveal.js 用于创建和管理元素进入可视区域时的动画效果，帮助你的网站增加吸引力'
    },
    {
        date:{year:'2017',day:'0808'},
        title:'三步实现滚动条触动css动画效果',
        img:'/api/upload/images/p03.jpg',
        digest:'现在很多网站都有这种效果，我就整理了一下，分享出来。利用滚动条来实现动画效果，ScrollReveal.js 用于创建和管理元素进入可视区域时的动画效果，帮助你的网站增加吸引力'
    },
    {
        date:{year:'2017',day:'0808'},
        title:'三步实现滚动条触动css动画效果',
        img:'/api/upload/images/p03.jpg',
        digest:'现在很多网站都有这种效果，我就整理了一下，分享出来。利用滚动条来实现动画效果，ScrollReveal.js 用于创建和管理元素进入可视区域时的动画效果，帮助你的网站增加吸引力'
    },
    {
        date:{year:'2017',day:'0808'},
        title:'三步实现滚动条触动css动画效果',
        img:'/api/upload/images/p03.jpg',
        digest:'现在很多网站都有这种效果，我就整理了一下，分享出来。利用滚动条来实现动画效果，ScrollReveal.js 用于创建和管理元素进入可视区域时的动画效果，帮助你的网站增加吸引力'
    },
    {
        date:{year:'2017',day:'0808'},
        title:'三步实现滚动条触动css动画效果',
        img:'/api/upload/images/p03.jpg',
        digest:'现在很多网站都有这种效果，我就整理了一下，分享出来。利用滚动条来实现动画效果，ScrollReveal.js 用于创建和管理元素进入可视区域时的动画效果，帮助你的网站增加吸引力'
    },
    {
        date:{year:'2017',day:'0808'},
        title:'三步实现滚动条触动css动画效果',
        img:'/api/upload/images/p03.jpg',
        digest:'现在很多网站都有这种效果，我就整理了一下，分享出来。利用滚动条来实现动画效果，ScrollReveal.js 用于创建和管理元素进入可视区域时的动画效果，帮助你的网站增加吸引力'
    },
]
export default class Log extends React.Component{
    render(){
        return(
            <div>
                <TimeLine items={data}/>
            </div>
        )
    }
}