# 前端工具库

这是一个使用webpack打包的JavaScript类库。

> 目的：让前端开发更高效，更专注于业务代码的编写

业务开发过程中，会经常用到`数组的操作`、`日期格式化`、`url的操作`、`浏览器类型判断`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，以提高开发效率。

## API文档

### [array][array]
#### &emsp;&emsp; arrayEqual &emsp;&emsp;判断两个数组是否相等

## 发布到 npm

```
npm run build // 先webpack打包类库，之后再发布
npm login // 登录
npm publish // 发布
```

## 使用方式

### 浏览器：

直接下载项目，引入js文件

```
<script type="text/javascript" src="util.js"></script>

tUtil.array
tUtil.cookie
```

### NODE：

1. 使用npm安装:

```
npm install tyro-util --save-dev
```

2. import工具类：

```
import myUtil from 'tyro-util'

myUtil.array
myUtil.array
```

[array]:https://github.com/tyrocjh/my-util/blob/master/src/array.js
