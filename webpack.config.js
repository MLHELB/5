// Configuración de Webapck

const htmlWebpack    = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin     = require("copy-webpack-plugin");
module.exports = {
    mode: 'development',
    
    output:{
        clean:true
    },
    module:{
        rules:[
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources:false
                }
            },
            {
                test:/\.css$/,
                exclude: /normalize1.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test:/normalize1.css$/,
                use: [MiniCssExtract.loader, 'css-loader']
            },
           
         
        ]
    },

    optimization:{

    },

    plugins:[
      new htmlWebpack({
        template:'src/index.html',
      }),
      new htmlWebpack({
        filename: 'index-2.html',
        template:'src/index-2.html',
      }),
      new htmlWebpack({
        filename: 'index-3.html',
        template:'src/index-3.html',
      }),
      new htmlWebpack({
        filename: 'index-4.html',
        template:'src/index-4.html',
      }),
      new htmlWebpack({
        filename: 'index-5.html',
        template:'src/index-5.html',
      }),
      new MiniCssExtract({
        filename: 'normalize.css',
        ignoreOrder:false,
      }),
      new CopyPlugin({
        patterns:[
            {from: 'src/assets/', to: 'assets/'}
        ]
      })
    ]
}