var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //入口文件
    entry:'./app/index.js',
    //输出配置
    output:{
        //把打包编译后的文件保存在哪个目录下
        path:path.resolve('./build'),
        //保存的文件名是什么
        filename:'bundle.js'
    },
    devServer:{
        //当源代码发生改变之后自动重新编译打包，并自动刷新浏览器
        inline:true,
        //端口号
        port:8080,
        //静态文件根目录
        contentBase:'./build'
    },
    //配置模块的加载器
    module:{
        loaders:[
            {
              test:/\.jsx?$/,
                //使用此loader来加载
              loader:'babel-loader',
              //指定预设
              query:{
                  presets:["react","es2015"]
              },
              exclude:/node_modules/
            },
            {
                test:/\.css$/, //如果加载的模块文件名是以.css结尾的话，
                loader:'style-loader!css-loader'
            },
            {
                test:/\.(woff|woff2|svg|eot|ttf)$/,
                loader:'url-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./app/index.html'
        })
    ]
}