# 前端工具库

这是一个使用webpack打包的JavaScript类库。

> 目的：让前端开发更高效，更专注于业务代码的编写

业务开发过程中，会经常用到`数组的操作`、`日期格式化`、`url的操作`、`浏览器类型判断`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，以提高开发效率。

## API文档

### [regex][regex]
#### &emsp;&emsp; isEmail &emsp;&emsp;判断是否为邮箱地址
#### &emsp;&emsp; isPhoneNum &emsp;&emsp;判断是否为手机号
#### &emsp;&emsp; isIdCard &emsp;&emsp;判断是否为身份证号
#### &emsp;&emsp; isUrl &emsp;&emsp;判断是否为URL地址
#### &emsp;&emsp; isValidPwd &emsp;&emsp;判断密码格式是否6-25字符必须包含大小写字母+数字
#### &emsp;&emsp; isColor &emsp;&emsp;判断是否为16进制颜色，rgb 或 rgba
#### &emsp;&emsp; escapeHTML &emsp;&emsp;转义HTML

### [url][url]
#### &emsp;&emsp; getQueryString &emsp;&emsp;获取url参数值
#### &emsp;&emsp; parseQueryToObj &emsp;&emsp;url参数转对象
#### &emsp;&emsp; httpsRedirect &emsp;&emsp;HTTP跳转HTTPS

### [time][time]
#### &emsp;&emsp; dayOfYear &emsp;&emsp;当前日期天数
#### &emsp;&emsp; getDaysDiffBetweenDates &emsp;&emsp;返回日期间的天数
#### &emsp;&emsp; timeLeft &emsp;&emsp;剩余时间
#### &emsp;&emsp; formatPassTime &emsp;&emsp;距现在的已过时间
#### &emsp;&emsp; formatRemainTime &emsp;&emsp;现在距${endTime}的剩余时间
#### &emsp;&emsp; isSameDay &emsp;&emsp;判断是否为同一天
#### &emsp;&emsp; isLeapYear &emsp;&emsp;是否为闰年

### [str][str]
#### &emsp;&emsp; capitalize &emsp;&emsp;首字母大写
#### &emsp;&emsp; capitalizeEveryWord &emsp;&emsp;每个单词首字母大写
#### &emsp;&emsp; decapitalize &emsp;&emsp;首字母小写
#### &emsp;&emsp; stripHTMLTags &emsp;&emsp;从字符串中删除HTML/XML标签
#### &emsp;&emsp; byteSize &emsp;&emsp;返回字符串的字节长度

### [array][array]
#### &emsp;&emsp; toTreeData &emsp;&emsp;递归数组转为树形结构
#### &emsp;&emsp; arrayEqual &emsp;&emsp;判断两个数组是否相等
#### &emsp;&emsp; sample &emsp;&emsp;随机获取数组的某个值
#### &emsp;&emsp; shuffle &emsp;&emsp;数组“洗牌”
#### &emsp;&emsp; countOccurrences &emsp;&emsp;检测指定数值出现次数
#### &emsp;&emsp; allEqual &emsp;&emsp;检查数组各项是否相等
#### &emsp;&emsp; average &emsp;&emsp;取平均数
#### &emsp;&emsp; intersection &emsp;&emsp;两数组的交集

### [cookie][cookie]
#### &emsp;&emsp; getCookie &emsp;&emsp;根据name读取cookie
#### &emsp;&emsp; setCookie &emsp;&emsp;设置Cookie
#### &emsp;&emsp; removeCookie &emsp;&emsp;根据name删除cookie

### [clazz][clazz]
#### &emsp;&emsp; hasClass &emsp;&emsp;判断元素是否有某个class
#### &emsp;&emsp; addClass &emsp;&emsp;为元素添加class
#### &emsp;&emsp; removeClass &emsp;&emsp;为元素移除class

### [dom][dom]
#### &emsp;&emsp; hasClass &emsp;&emsp;校验指定元素是否有指定类
#### &emsp;&emsp; elementContains &emsp;&emsp;检查是否包含子元素
#### &emsp;&emsp; bottomVisible &emsp;&emsp;检查页面底部是否可见
#### &emsp;&emsp; getRect &emsp;&emsp;获取节点对象的上下左右边距及宽高
#### &emsp;&emsp; offset &emsp;&emsp;获取一个元素的距离文档(document)的位置，类似jQ中的offset()
#### &emsp;&emsp; getScrollTop &emsp;&emsp;获取滚动条距顶部的距离
#### &emsp;&emsp; setScrollTop &emsp;&emsp;设置滚动条距顶部的距离
#### &emsp;&emsp; scrollTo &emsp;&emsp;在${duration}时间内，滚动条平滑滚动到${to}指定位置
#### &emsp;&emsp; windowResize &emsp;&emsp;H5软键盘缩回、弹起回调

### [object][object]
#### &emsp;&emsp; mergeObject &emsp;&emsp;合并对象
#### &emsp;&emsp; equals &emsp;&emsp;全等判断
#### &emsp;&emsp; isEmptyObject &emsp;&emsp;判断obj是否为空
#### &emsp;&emsp; deepClone &emsp;&emsp;深拷贝，支持常见类型

### [func][func]
#### &emsp;&emsp; throttle &emsp;&emsp;函数节流
#### &emsp;&emsp; debounce &emsp;&emsp;函数防抖
#### &emsp;&emsp; once &emsp;&emsp;只会调用一次的函数
#### &emsp;&emsp; timeTaken &emsp;&emsp;计算函数执行时间

### [random][random]
#### &emsp;&emsp; randomIntegerInRange &emsp;&emsp;生成指定范围的随机整数
#### &emsp;&emsp; randomNumberInRange &emsp;&emsp;生成指定范围的随机小数
#### &emsp;&emsp; randomColor &emsp;&emsp;随机生成颜色

### [device][device]
#### &emsp;&emsp; getVersion &emsp;&emsp;判断是否xx浏览器
#### &emsp;&emsp; getExplore &emsp;&emsp;获取浏览器类型和版本
#### &emsp;&emsp; getOS &emsp;&emsp;获取操作系统类型

### [money][money]
#### &emsp;&emsp; numToCN &emsp;&emsp;数字现金转中文

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

[regex]:https://github.com/tyrocjh/my-util/blob/master/src/regex.js
[url]:https://github.com/tyrocjh/my-util/blob/master/src/url.js
[time]:https://github.com/tyrocjh/my-util/blob/master/src/time.js
[array]:https://github.com/tyrocjh/my-util/blob/master/src/array.js
[str]:https://github.com/tyrocjh/my-util/blob/master/src/str.js
[cookie]:https://github.com/tyrocjh/my-util/blob/master/src/cookie.js
[clazz]:https://github.com/tyrocjh/my-util/blob/master/src/clazz.js
[dom]:https://github.com/tyrocjh/my-util/blob/master/src/dom.js
[object]:https://github.com/tyrocjh/my-util/blob/master/src/object.js
[func]:https://github.com/tyrocjh/my-util/blob/master/src/func.js
[random]:https://github.com/tyrocjh/my-util/blob/master/src/random.js
[device]:https://github.com/tyrocjh/my-util/blob/master/src/device.js
[money]:https://github.com/tyrocjh/my-util/blob/master/src/money.js
