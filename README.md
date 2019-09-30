# 前端工具库
使用webpack打包的一个JavaScript类库。


## 简介

这家伙很懒，什么也没有写


## 发布到 npm

```
npm run build // 先webpack打包类库，之后再发布
npm login // 登录
npm publish // 发布
```

## 使用方式

### 浏览器

直接下载项目，引入js文件

```
<script type="text/javascript" src="util.js"></script>
```

```
tUtil.array
tUtil.cookie
```

### NODE

1. 使用npm安装:

```
npm install tyro-util --save-dev
```

2. import工具类：

```
require('lodash')
import myUtil from 'tyro-util'

myUtil.array
myUtil.array
```
