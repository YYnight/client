import React from 'react'
import './test.css'
import {render} from 'react-dom'
import { createStore,applyMiddleware,combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import Main from './src/main/Main'
import JParticles from 'jparticles'
import photo from './src/photo/reducer/Photo'
import $ from 'jquery';
import {Button} from 'react-bootstrap'


const instance = document.querySelector(".instance");
const demo = document.querySelector(".demo");
const loading = new JParticles.waveLoading(demo,{
    font:'normal 500 14px Arial',
    resize:false
});
loading.onProgress(function (progress){
    if(progress>=60){
        loading.setOptions({
            color:"#fff"
        });
    }
    return '加载中...'+Math.ceil(progress)+"%";
})
loading.onFinished(function(){
    setTimeout(function(){
        instance.parentNode.removeChild(instance);
    },100)
});

/**
 *右侧nav动画
 */
function navShow(){
    let timer = null;
    const right = $($(".nav").find("a")[0]).css("right").slice(0,-2);
    console.log(right)
    $(".nav").mouseenter(function(){
        clearTimeout(timer);
        var that= $(this);
        timer = setTimeout(function(){
        that.find("a").each(function(index,ele){
            setTimeout(function(){
                $(ele).stop().animate({right:0},200);
                },50*index);
            })
        },200)
    }).mouseleave(function(){
        if(timer){
            clearTimeout(timer);
            $(this).find("a").each(function(index,ele){
                setTimeout(function(){
                    $(ele).stop().animate({right:right},200);
                },50*index)
            })
        }
    })
}

window.onload = function(){
    navShow();
    $(".mask").css("height",$(window).height());
    new JParticles.particle("#bg", {
        // 开启视差效果
        parallax: true,
        range:0.1,
        num:20,
        lineShape:'splider',
        eventElem:document.body,
        proximity:0.1,
        maxR:15,
        minR:10,
        lineWidth:1,
        opacity: 0.5,
        color:["gray"],
        // maxSpeed:2,
        // // 定义视差强度
        parallaxStrength: 100
})
    setTimeout(()=>loading.done(),0);
}

const reducers = combineReducers({
    photo,
})
let store = createStore(reducers,applyMiddleware(thunkMiddleware))

render(
    <Provider store={store}>
        <Main/>
    </Provider>,
    document.getElementById('blog')
)