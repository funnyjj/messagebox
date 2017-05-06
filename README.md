## 为什么不需要上传node_modules
1. 因为很大，上传的话会占用服务器空间
2. node_modules不能跨平台使用，所以需要每个用户根据package.json文件自行编译安装自己的node_modules
3. npm install 就是根据package.json文件的依赖模块自行安装

## .idea为什么不需要上传

## 安装模块
```sh
npm install webpack react react-dom webpack-dev-server babel-loader babel-core babel-preset-react babel-preset-es2015 bootstrap jquery css-loader style-loader url-loader file-loader html-webpack-plugin --save

```

