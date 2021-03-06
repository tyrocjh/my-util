# 前端工具库

这是一个使用webpack打包的JavaScript类库。

> 目的：让前端开发更高效，更专注于业务代码的编写

业务开发过程中，会经常用到`数组的操作`、`日期格式化`、`url的操作`、`浏览器类型判断`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，以提高开发效率。

## 使用方式

### 浏览器：

直接下载项目，引入js文件

```
<script type="text/javascript" src="util.js"></script>

tUtil.uuid()
tUtil.trim(' Tyro CCC ')
tUtil.getExplore()
```

### NODE：

1. 使用npm安装:

```
npm install tyro-util --save
```

2. import工具类：

```
// 全部引入
import tUtil from 'tyro-util'

tUtil.uuid()
tUtil.getExplore()
```

```
// 按需引入
import { uuid, getExplore } from 'tyro-util'

uuid()
getExplore()
```

## 发布到 npm

```
npm run build // 先webpack打包类库，之后再发布
npm login // 登录
npm publish // 发布
```

## API文档

### [regex][regex]
#### &emsp;&emsp; isEmail &emsp;&emsp;判断是否为邮箱地址
#### &emsp;&emsp; isLetter &emsp;&emsp;是否是英文字母
#### &emsp;&emsp; isChinese &emsp;&emsp;是否是中文
#### &emsp;&emsp; isPhoneNum &emsp;&emsp;判断是否为手机号
#### &emsp;&emsp; isLandline &emsp;&emsp;是否固定电话
#### &emsp;&emsp; isIdCard &emsp;&emsp;判断是否为身份证号
#### &emsp;&emsp; isUrl &emsp;&emsp;判断是否为URL地址
#### &emsp;&emsp; isValidPwd &emsp;&emsp;判断密码格式是否6-25字符必须包含大小写字母+数字
#### &emsp;&emsp; isColor &emsp;&emsp;判断是否为16进制颜色，rgb 或 rgba
#### &emsp;&emsp; filterNum &emsp;&emsp;只能输入数字, 不符合字符的会替换为空
#### &emsp;&emsp; filterCENum &emsp;&emsp;只能输入英文、中文和数字，不符合字符的会替换为空
#### &emsp;&emsp; filterENum &emsp;&emsp;只能输入英文、和数字，不符合字符的会替换为空
#### &emsp;&emsp; filterFloate &emsp;&emsp;只能输入数字和一个小数点，不符合字符的会替换为空
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
#### &emsp;&emsp; isWeekday &emsp;&emsp;检查日期是否为工作日

### [number][number]
#### &emsp;&emsp; isEven &emsp;&emsp;判读数字是否为偶数
#### &emsp;&emsp; toFixed &emsp;&emsp;保留小数点（非四舍五入）

### [str][str]
#### &emsp;&emsp; isNumber &emsp;&emsp;判断是否数字
#### &emsp;&emsp; isUrl &emsp;&emsp;判断是否是url
#### &emsp;&emsp; isEmoji &emsp;&emsp;判断是否是emoji
#### &emsp;&emsp; trim &emsp;&emsp;去空格
#### &emsp;&emsp; leftPad &emsp;&emsp;补零
#### &emsp;&emsp; fNumberWithComma &emsp;&emsp;数字每隔三位加一个逗号
#### &emsp;&emsp; fNumber &emsp;&emsp;保留小数点后n位
#### &emsp;&emsp; capitalize &emsp;&emsp;首字母大写
#### &emsp;&emsp; capitalizeEveryWord &emsp;&emsp;每个单词首字母大写
#### &emsp;&emsp; reverseString &emsp;&emsp;反转一个字符串
#### &emsp;&emsp; decapitalize &emsp;&emsp;首字母小写
#### &emsp;&emsp; stripHTMLTags &emsp;&emsp;从字符串中删除HTML/XML标签
#### &emsp;&emsp; byteSize &emsp;&emsp;返回字符串的字节长度
#### &emsp;&emsp; rgbToHex &emsp;&emsp;RGB转十六进制
#### &emsp;&emsp; toCamelCase &emsp;&emsp;连字符转驼峰
#### &emsp;&emsp; fromCamelCase &emsp;&emsp;驼峰转连字符

### [array][array]
#### &emsp;&emsp; unique &emsp;&emsp;数组去重
#### &emsp;&emsp; steamroller &emsp;&emsp;数组扁平化
#### &emsp;&emsp; toTreeData &emsp;&emsp;递归数组转为树形结构
#### &emsp;&emsp; arrayEqual &emsp;&emsp;判断两个数组是否相等
#### &emsp;&emsp; sample &emsp;&emsp;随机获取数组的某个值
#### &emsp;&emsp; shuffle &emsp;&emsp;数组“洗牌”
#### &emsp;&emsp; countOccurrences &emsp;&emsp;检测指定数值出现次数
#### &emsp;&emsp; allEqual &emsp;&emsp;检查数组各项是否相等
#### &emsp;&emsp; average &emsp;&emsp;取平均数
#### &emsp;&emsp; sum &emsp;&emsp;数组总和
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
#### &emsp;&emsp; elementIsInFocus &emsp;&emsp;判断 DOM 元素是否已获得焦点
#### &emsp;&emsp; retSibling &emsp;&emsp;返回元素的第n个兄弟节点
#### &emsp;&emsp; hasChildren &emsp;&emsp;判断元素有没有子元素
#### &emsp;&emsp; getStyle &emsp;&emsp;获取任一元素的任意属性

### [object][object]
#### &emsp;&emsp; isObject &emsp;&emsp;判断是否对象
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
#### &emsp;&emsp; uuid &emsp;&emsp;UUID生成器
#### &emsp;&emsp; randomIntegerInRange &emsp;&emsp;生成指定范围的随机整数
#### &emsp;&emsp; randomNumberInRange &emsp;&emsp;生成指定范围的随机小数
#### &emsp;&emsp; shuffle &emsp;&emsp;随机化数组的顺序
#### &emsp;&emsp; randomBoolean &emsp;&emsp;获取随机布尔值 (true/false)
#### &emsp;&emsp; randomColor &emsp;&emsp;随机生成颜色

### [device][device]
#### &emsp;&emsp; detectDeviceType &emsp;&emsp;判断是PC端还是移动端
#### &emsp;&emsp; getVersion &emsp;&emsp;判断是否xx浏览器
#### &emsp;&emsp; getExplore &emsp;&emsp;获取浏览器类型和版本
#### &emsp;&emsp; getOS &emsp;&emsp;获取操作系统类型
#### &emsp;&emsp; isBrowserTabInView &emsp;&emsp;判断浏览器 Tab 窗口是否为活动窗口
#### &emsp;&emsp; touchSupported &emsp;&emsp;判断浏览器是否支持触摸事件
#### &emsp;&emsp; isAppleDevice &emsp;&emsp;判断是否为苹果设备

### [html][html]
#### &emsp;&emsp; htmlEncode &emsp;&emsp;html转码
#### &emsp;&emsp; htmlDecode &emsp;&emsp;html解码
#### &emsp;&emsp; htmlEncodeByRegExp &emsp;&emsp;html正则转码
#### &emsp;&emsp; htmlDecodeByRegExp &emsp;&emsp;html正则解码

### [money][money]
#### &emsp;&emsp; numToCN &emsp;&emsp;数字现金转中文

[regex]:https://github.com/tyrocjh/my-util/blob/master/src/regex.js
[url]:https://github.com/tyrocjh/my-util/blob/master/src/url.js
[time]:https://github.com/tyrocjh/my-util/blob/master/src/time.js
[array]:https://github.com/tyrocjh/my-util/blob/master/src/array.js
[number]:https://github.com/tyrocjh/my-util/blob/master/src/number.js
[str]:https://github.com/tyrocjh/my-util/blob/master/src/str.js
[cookie]:https://github.com/tyrocjh/my-util/blob/master/src/cookie.js
[clazz]:https://github.com/tyrocjh/my-util/blob/master/src/clazz.js
[dom]:https://github.com/tyrocjh/my-util/blob/master/src/dom.js
[object]:https://github.com/tyrocjh/my-util/blob/master/src/object.js
[func]:https://github.com/tyrocjh/my-util/blob/master/src/func.js
[random]:https://github.com/tyrocjh/my-util/blob/master/src/random.js
[device]:https://github.com/tyrocjh/my-util/blob/master/src/device.js
[html]:https://github.com/tyrocjh/my-util/blob/master/src/html.js
[money]:https://github.com/tyrocjh/my-util/blob/master/src/money.js
