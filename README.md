# 🚀 Welcome to your new awesome project!

This project has been created using **webpack-cli**, you can now run

```
npm run build
```

or

```
yarn build
```

to bundle your application



## webpack 5 安装

> 前言：在之前我们都是手动配置搭建webpack项目，webpack官方提供了cli快速构建基本模版，无需像之前一样手动配置entry、plugins、loader等

1. 新建文件夹 (webpack5-demo)

2. ```npm --init -y``` 生成 ```package.json``` 文件

3. 安装 ```webpack``` 和 ```webpack-cli```
```base
npm install webpack webpack-cli -D
```

4. 安装第3步后，命令行执行
```base
npx webpack init
```

5. 根据提示选择配置即可

```js

/**
 *  注意：两种编译器不要混用
 * 
 *      1. 如果没有使用 Babel，首选 TypeScript 自带编译器（配合 ts-loader 使用）
 *      2. 如果项目中有 Babel，安装 @babel/preset-typescript，配合 tsc 做类型检查
 *  
 */


module.exports = {
    module: {
        rules: [
            // 方法一： 使用 ts-loader + babel-loader 
            {
                test: /\.(ts|tsx)$/i,
                loader: "ts-loader",
                exclude: ["/node_modules/"],
            },
            {
                test: /\.js$/, //用正则匹配文件，用require或者import引入的都会匹配到
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', { modules: "auto" }]
                    }
                }, //加载器名，就是上一步安装的loader
                exclude: /node_modules/, //排除node_modules目录，我们不加载node模块中的js哦~
            },
        ]
    }
}


// 2. 把 ts.config.ts 设置 

// {
//     "compilerOptions" : {
//         "noEmit":true,    // 不输出文件，只做类型检查
//     }
// }
 

module.exports = {
    module: {
        rules: [
            // 方法二： 使用 babel 中 @babel/preset-typescript 进行解析 ts
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
        ]
    }
}

```
