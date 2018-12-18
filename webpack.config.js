var path  = require('path')
var webpack = require('webpack');
var node_modules = path.resolve(__dirname,'node_modules')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var deps = []

var config = {
// entry:path.resolve(__dirname,'./app/appEntry.js'),
entry:{
    "app": "./src/browser/index.jsx",
    "verdor": ["react", "react-dom", "react-router-dom", "mobx", "mobx-react"]
},
devtool: "eval-source-map",
resolve:{
    extensions: [".webpack.js", ".jsx", ".web.js", ".js"]
},
output:{
    path:path.join(__dirname,'./dist/broswer'),
    filename:'bundle.js'
},
// mode:'development',
module:{
    rules:[
        {
            test:/\.js|jsx?$/,
            exclude:/(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: [
                    ["import", {
                        "libraryName": "antd",
                        "libraryDirectory": "es",
                        "style": true
                    }],
                    ["transform-decorators-legacy"],
                    ["transform-class-properties"]
                ]
            }
        },
        {
            test:/\.tsx?$/,
            use:'ts-loader',
            exclude:/(node_modules|bower_components)/
        },
        {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader?sourceMap-loader'
        },
        {
            test:/\.less$/,
            use:[{
                loader:'style-loader'
            },{
                loader:'css-loader'
            },{
                loader:'less-loader',
                options: {
                    modifyVars: {
                        "@icon-url":"'http://update.bjsasc.com/iconfont/iconfont'" // 因为是内网环境 ， 所以需要手动指定icon 位置， antd 字体图标 依赖于公网
                    },
                    javascriptEnabled: true,
                }
            }]
        },
        {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader: "url-loader?limit=8192&name=./images/[hash:8].[ext]"
        } 
    ]
},
plugins:[
    new webpack.optimize.CommonsChunkPlugin({
        name:"verdor",
        filename: "verdor.bundle.js"
    }),
    new HtmlWebpackPlugin({
        template:__dirname + "/src/browser/index.html"
    }),
    new webpack.HotModuleReplacementPlugin()  //热加载插件
],

devServer:{
    contentBase:path.join(__dirname,"dist"),
    compress:true,
    port:9000,
    historyApiFallback:true,
    inline:true,
    hot:true
},

}
try {
    config.devtool = env.prod ? false : config.devtool;
} catch (error) {
    console.log("当前为开发环境");
}
module.exports = config