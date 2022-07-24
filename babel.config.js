module.exports = {
    // "presets": ["@babel/preset-env"]


    // webpack.babel_2.config.js 对应的配置
    "presets": [
        "@babel/preset-env",
        // [
        //     "@babel/preset-env",
        //     {
        //         "useBuiltIns": "usage",
        //         "corejs": {
        //             //core-js 的版本
        //             "version": 3
        //         }
        //         // "targets": {
        //         //     "browsers": ["> 0.25%", "last 2 versions", "not ie < 8", "Android >= 4.4"]
        //         // }
        //     }
        // ],
        "@babel/preset-typescript"
    ],
    "plugins": [
        "@babel/plugin-proposal-class-properties", // 支持类属性
        "@babel/plugin-proposal-object-rest-spread" // 支持剩余扩展操作符
    ]
}
