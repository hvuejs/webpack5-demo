// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// const TerserPlugin = require("terser-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "umd",
    },
    target: ["web", "es5"],
    devServer: {
        open: true,
        host: "localhost",
    },
    plugins: [
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            template: "index.html",
        }),
        
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname + "/static"),
                    to: "./static",
                    globOptions: {
                        dot: true,
                        gitignore: true,
                        ignore: [
                            // 配置不用copy的文件
                            "**/index.html",
                        ],
                    },
                },
            ],
        }),

        new MiniCssExtractPlugin(),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            // 使用 babel 后就不能在使用 ts-loader
            {
                test: /\.(ts|tsx)$/i,
                loader: "ts-loader",
                exclude: ["/node_modules/"],
            },
            /**
             *  1. 如果没有使用 Babel，首选 TypeScript 自带编译器（配合 ts-loader 使用）
             *  2. 如果项目中有 Babel，安装 @babel/preset-typescript，配合 tsc 做类型检查
             *  3. 注意：两种编译器不要混用
             */
            // {
            //     test: /\.(ts|js)x?$/,
            //     loader: "babel-loader",
            //     exclude: ["/node_modules/"],
            // },
            {
                test: /\.less$/i,
                use: [stylesHandler, "css-loader", "postcss-loader", "less-loader"],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, "css-loader", "postcss-loader"],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";
    } else {
        config.mode = "development";
        config.devtool = "source-map";
        // config.optimization = {
        //     // sideEffects: true, // 开启sideEffects
        //     usedExports: true, // 设置为true 告诉webpack会做 tree-shaking
        //     minimize: true, // 开启 terser
        //     minimizer: [
        //         new TerserPlugin({
        //             terserOptions: {
        //                 ie8: true,
        //             },
        //             extractComments: false, // 是否将注释剥离到单独文件，默认是true
        //         }),
        //     ],
        // };
    }
    return config;
};
