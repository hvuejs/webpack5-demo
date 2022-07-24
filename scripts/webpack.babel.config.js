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
    entry: path.resolve(__dirname, "../src/index.ts"),
    output: {
        path: path.resolve(__dirname, "../dist"),
        libraryTarget: "umd",
        libraryExport: 'default',
        globalObject: 'this',
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
                    from: path.resolve(__dirname, "../static"),
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
            // 使用 babel + @babel/preset-typescript 
            {
                test: /\.(ts|tsx|js|jsx)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: [
                            "@babel/plugin-proposal-class-properties", // 支持类属性
                            "@babel/plugin-proposal-object-rest-spread" // 支持剩余扩展操作符
                        ],
                        presets: [
                            '@babel/preset-typescript', // 对ts文件的预设
                            '@babel/preset-env',
                        ]
                    }
                },
                exclude: /node_modules/,
            },
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