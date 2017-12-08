const path = require('path');   //导入路径包
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports={
    entry:"./index.js", //入口文件

    //输出文件build下的buildle.js
    output:{
        path:path.resolve(__dirname,'build'),
        filename:"build.js"
    },
    //使用loader模块
    module:{
        rules:[
            {
                test:/\.css$/,
                exclude:/node_modules/,
                use:[
                    {loader:'style-loader'},
                    {
                        loader:'css-loader',
                        options:{
                            modules:false
                        }
                    }
                ]
            },
            {
                test:/\.(js|jsx)$/,
                exclude:/(node_modules|build|util)/,
                use:[
                       {
                            loader:'babel-loader',
                            options:{
                                presets:'env',
                                plugins:[
                                    'react-hot-loader/babel'
                                ]
                            }
                        }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude:/node_modules/,
                use: [
                {
                    loader: 'url-loader',
                    options: {
                    limit: 8192,
                    name:'./src/image/[name].[ext]'
                    }
                }
                ]
            },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },  //添加
            { test: /\.(woff|woff2)$/, loader:"url-loader?prefix=font/&limit=5000" }, //添加
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" }, //添加
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" } //添加
        ]
    },
    resolve:{
        alias:{
            __img:path.join(__dirname,'res','images')
        }
    },
    devServer:{
        contentBase:'./build',
        hot:true,
        proxy:{
            "/api/*":{
                target:"http://192.168.2.25:9999/",
                pathRewrite:{"/api/":"/"}
            }
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Hot Module Replacement',
            template:__dirname+"/index.html",
            filename:'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}