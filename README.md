# 前端工具库

这是一个使用webpack打包的JavaScript类库。

> 目的：让前端开发更高效，更专注于业务代码的编写

业务开发过程中，会经常用到`数组的操作`、`日期格式化`、`url的操作`、`浏览器类型判断`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，以提高开发效率。

## 使用方式

### 浏览器：

直接下载项目，引入js文件

```
<script type="text/javascript" src="/dist/util.js"></script>

tUtil.uuid()
tUtil.trim(' Tyro CCC ')
```

### NODE：

1. 使用npm安装:

```
npm install tyro-util --save
```

2. ES6：

```
// 全部引入
import tUtil from 'tyro-util'
tUtil.uuid()

// 单个引入
import { uuid } from 'tyro-util'
uuid()

// 按需加载
import uuid from 'tyro-util/lib/uuid'
uuid()
```

3. Commonjs：

```
// 全部引入
const tUtil = require('tyro-util')
tUtil.uuid()

// 单个引入
const uuid = require('tyro-util').uuid
uuid()

// 按需加载
const uuid = require('tyro-util/lib/uuid')
uuid()
```

## 发布到 npm

```
npm run build // 先webpack打包类库，之后再发布
npm login // 登录
npm publish // 发布
```

## API文档

### array
#### &emsp;&emsp; [allEqual][allEqual] &emsp;&emsp;检查数组各项是否相等
#### &emsp;&emsp; [arrayEqual][arrayEqual] &emsp;&emsp;判断两个数组是否相等
#### &emsp;&emsp; [average][average] &emsp;&emsp;取平均数
#### &emsp;&emsp; [countOccurrences][countOccurrences] &emsp;&emsp;检测指定数值出现次数
#### &emsp;&emsp; [intersection][intersection] &emsp;&emsp;两数组的交集
#### &emsp;&emsp; [sample][sample] &emsp;&emsp;随机获取数组的某个值
#### &emsp;&emsp; [shuffle][shuffle] &emsp;&emsp;数组“洗牌”
#### &emsp;&emsp; [sum][sum] &emsp;&emsp;数组总和
#### &emsp;&emsp; [toTreeData][toTreeData] &emsp;&emsp;递归数组转为树形结构

### clazz
#### &emsp;&emsp; [addClass][addClass] &emsp;&emsp;为元素添加class
#### &emsp;&emsp; [hasClass][hasClass] &emsp;&emsp;判断元素是否有某个class
#### &emsp;&emsp; [removeClass][removeClass] &emsp;&emsp;为元素移除class

### cookie
#### &emsp;&emsp; [getCookie][getCookie] &emsp;&emsp;根据name读取cookie
#### &emsp;&emsp; [removeCookie][removeCookie] &emsp;&emsp;根据name删除cookie
#### &emsp;&emsp; [setCookie][setCookie] &emsp;&emsp;设置Cookie

### device
#### &emsp;&emsp; [detectDeviceType][detectDeviceType] &emsp;&emsp;判断是PC端还是移动端
#### &emsp;&emsp; [getExplore][getExplore] &emsp;&emsp;获取浏览器类型和版本
#### &emsp;&emsp; [getOS][getOS] &emsp;&emsp;获取操作系统类型
#### &emsp;&emsp; [getVersion][getVersion] &emsp;&emsp;判断是否xx浏览器
#### &emsp;&emsp; [isAppleDevice][isAppleDevice] &emsp;&emsp;判断是否为苹果设备
#### &emsp;&emsp; [isBrowserTabInView][isBrowserTabInView] &emsp;&emsp;判断浏览器 Tab 窗口是否为活动窗口
#### &emsp;&emsp; [touchSupported][touchSupported] &emsp;&emsp;判断浏览器是否支持触摸事件

### dom
#### &emsp;&emsp; [bottomVisible][bottomVisible] &emsp;&emsp;检查页面底部是否可见
#### &emsp;&emsp; [elementContains][elementContains] &emsp;&emsp;检查是否包含子元素
#### &emsp;&emsp; [elementIsInFocus][elementIsInFocus] &emsp;&emsp;判断 DOM 元素是否已获得焦点
#### &emsp;&emsp; [getRect][getRect] &emsp;&emsp;获取节点对象的上下左右边距及宽高
#### &emsp;&emsp; [getScrollTop][getScrollTop] &emsp;&emsp;获取滚动条距顶部的距离
#### &emsp;&emsp; [getStyle][getStyle] &emsp;&emsp;获取任一元素的任意属性
#### &emsp;&emsp; [hasChildren][hasChildren] &emsp;&emsp;判断元素有没有子元素
#### &emsp;&emsp; [hasClass][hasClass] &emsp;&emsp;校验指定元素是否有指定类
#### &emsp;&emsp; [offset][offset] &emsp;&emsp;获取一个元素的距离文档(document)的位置，类似jQ中的offset()
#### &emsp;&emsp; [retSibling][retSibling] &emsp;&emsp;返回元素的第n个兄弟节点
#### &emsp;&emsp; [scrollTo][scrollTo] &emsp;&emsp;在${duration}时间内，滚动条平滑滚动到${to}指定位置
#### &emsp;&emsp; [setScrollTop][setScrollTop] &emsp;&emsp;设置滚动条距顶部的距离
#### &emsp;&emsp; [windowResize][windowResize] &emsp;&emsp;H5软键盘缩回、弹起回调

### func
#### &emsp;&emsp; [debounce][debounce] &emsp;&emsp;函数防抖
#### &emsp;&emsp; [once][once] &emsp;&emsp;只会调用一次的函数
#### &emsp;&emsp; [throttle][throttle] &emsp;&emsp;函数节流
#### &emsp;&emsp; [timeTaken][timeTaken] &emsp;&emsp;计算函数执行时间

### html
#### &emsp;&emsp; [htmlDecode][htmlDecode] &emsp;&emsp;html解码
#### &emsp;&emsp; [htmlDecodeByRegExp][htmlDecodeByRegExp] &emsp;&emsp;html正则解码
#### &emsp;&emsp; [htmlEncode][htmlEncode] &emsp;&emsp;html转码
#### &emsp;&emsp; [htmlEncodeByRegExp][htmlEncodeByRegExp] &emsp;&emsp;html正则转码

### money
#### &emsp;&emsp; [numToCN][numToCN] &emsp;&emsp;数字现金转中文

### number
#### &emsp;&emsp; [isEven][isEven] &emsp;&emsp;判读数字是否为偶数
#### &emsp;&emsp; [isFloat][isFloat] &emsp;&emsp;判读数字是否为小数
#### &emsp;&emsp; [isInteger][isInteger] &emsp;&emsp;判读数字是否为整数
#### &emsp;&emsp; [isNumber][isNumber] &emsp;&emsp;判读是否为数字
#### &emsp;&emsp; [toFixed][toFixed] &emsp;&emsp;保留小数点（非四舍五入）

### object
#### &emsp;&emsp; [equals][equals] &emsp;&emsp;全等判断
#### &emsp;&emsp; [isEmptyObject][isEmptyObject] &emsp;&emsp;判断obj是否为空
#### &emsp;&emsp; [isObject][isObject] &emsp;&emsp;判断是否对象
#### &emsp;&emsp; [mergeObject][mergeObject] &emsp;&emsp;合并对象
#### &emsp;&emsp; [isEven][isEven] &emsp;&emsp;判读数字是否为偶数

### random
#### &emsp;&emsp; [randomBoolean][randomBoolean] &emsp;&emsp;获取随机布尔值 (true/false)
#### &emsp;&emsp; [randomColor][randomColor] &emsp;&emsp;随机生成颜色
#### &emsp;&emsp; [randomIntegerInRange][randomIntegerInRange] &emsp;&emsp;生成指定范围的随机整数
#### &emsp;&emsp; [randomNumberInRange][randomNumberInRange] &emsp;&emsp;生成指定范围的随机小数
#### &emsp;&emsp; [shuffle][shuffle] &emsp;&emsp;随机化数组的顺序
#### &emsp;&emsp; [uuid][uuid] &emsp;&emsp;UUID生成器

### regex
#### &emsp;&emsp; [encryptIdentity][encryptIdentity] &emsp;&emsp;身份证号脱敏处理
#### &emsp;&emsp; [encryptPhone][encryptPhone] &emsp;&emsp;手机号脱敏处理
#### &emsp;&emsp; [escapeHTML][escapeHTML] &emsp;&emsp;转义HTML
#### &emsp;&emsp; [filterCENum][filterCENum] &emsp;&emsp;只能输入英文、中文和数字，不符合字符的会替换为空
#### &emsp;&emsp; [filterENum][filterENum] &emsp;&emsp;只能输入英文、和数字，不符合字符的会替换为空
#### &emsp;&emsp; [filterFloate][filterFloate] &emsp;&emsp;只能输入数字和一个小数点，不符合字符的会替换为空
#### &emsp;&emsp; [filterNum][filterNum] &emsp;&emsp;只能输入数字, 不符合字符的会替换为空
#### &emsp;&emsp; [isChinese][isChinese] &emsp;&emsp;是否是中文
#### &emsp;&emsp; [isColor][isColor] &emsp;&emsp;判断是否为16进制颜色，rgb 或 rgba
#### &emsp;&emsp; [isEmail][isEmail] &emsp;&emsp;判断是否为邮箱地址
#### &emsp;&emsp; [isIdCard][isIdCard] &emsp;&emsp;判断是否为身份证号
#### &emsp;&emsp; [isLandline][isLandline] &emsp;&emsp;是否固定电话
#### &emsp;&emsp; [isLetter][isLetter] &emsp;&emsp;是否是英文字母
#### &emsp;&emsp; [isPhoneNum][isPhoneNum] &emsp;&emsp;判断是否为手机号
#### &emsp;&emsp; [isValidPwd][isValidPwd] &emsp;&emsp;判断密码格式是否6-25字符必须包含大小写字母+数字

### str
#### &emsp;&emsp; [byteSize][byteSize] &emsp;&emsp;返回字符串的字节长度
#### &emsp;&emsp; [capitalize][capitalize] &emsp;&emsp;首字母大写
#### &emsp;&emsp; [capitalizeEveryWord][capitalizeEveryWord] &emsp;&emsp;每个单词首字母大写
#### &emsp;&emsp; [decapitalize][decapitalize] &emsp;&emsp;首字母小写
#### &emsp;&emsp; [fNumber][fNumber] &emsp;&emsp;保留小数点后n位
#### &emsp;&emsp; [fNumberWithComma][fNumberWithComma] &emsp;&emsp;数字每隔三位加一个逗号
#### &emsp;&emsp; [fromCamelCase][fromCamelCase] &emsp;&emsp;驼峰转连字符
#### &emsp;&emsp; [isEmoji][isEmoji] &emsp;&emsp;判断是否是emoji
#### &emsp;&emsp; [isNumber][isNumber] &emsp;&emsp;判断是否数字
#### &emsp;&emsp; [isUrl][isUrl] &emsp;&emsp;判断是否是url
#### &emsp;&emsp; [leftPad][leftPad] &emsp;&emsp;补零
#### &emsp;&emsp; [reverseString][reverseString] &emsp;&emsp;反转一个字符串
#### &emsp;&emsp; [rgbToHex][rgbToHex] &emsp;&emsp;RGB转十六进制
#### &emsp;&emsp; [stripHTMLTags][stripHTMLTags] &emsp;&emsp;从字符串中删除HTML/XML标签
#### &emsp;&emsp; [toCamelCase][toCamelCase] &emsp;&emsp;连字符转驼峰
#### &emsp;&emsp; [trim][trim] &emsp;&emsp;去空格

### time
#### &emsp;&emsp; [dayOfYear][dayOfYear] &emsp;&emsp;当前日期天数
#### &emsp;&emsp; [formatPassTime][formatPassTime] &emsp;&emsp;距现在的已过时间
#### &emsp;&emsp; [formatRemainTime][formatRemainTime] &emsp;&emsp;现在距${endTime}的剩余时间
#### &emsp;&emsp; [getDaysDiffBetweenDates][getDaysDiffBetweenDates] &emsp;&emsp;返回日期间的天数
#### &emsp;&emsp; [isLeapYear][isLeapYear] &emsp;&emsp;是否为闰年
#### &emsp;&emsp; [isSameDay][isSameDay] &emsp;&emsp;判断是否为同一天
#### &emsp;&emsp; [isWeekday][isWeekday] &emsp;&emsp;检查日期是否为工作日
#### &emsp;&emsp; [timeLeft][timeLeft] &emsp;&emsp;剩余时间

### url
#### &emsp;&emsp; [getQueryString][getQueryString] &emsp;&emsp;获取url参数值
#### &emsp;&emsp; [httpsRedirect][httpsRedirect] &emsp;&emsp;HTTP跳转HTTPS
#### &emsp;&emsp; [isIpv4][isIpv4] &emsp;&emsp;判断是否为IPv4地址
#### &emsp;&emsp; [isUrl][isUrl] &emsp;&emsp;判断是否为URL地址
#### &emsp;&emsp; [parseQueryToObj][parseQueryToObj] &emsp;&emsp;url参数转对象

[allEqual]:https://github.com/tyrocjh/my-util/blob/master/src/array/allEqual.js
[arrayEqual]:https://github.com/tyrocjh/my-util/blob/master/src/array/arrayEqual.js
[average]:https://github.com/tyrocjh/my-util/blob/master/src/array/average.js
[countOccurrences]:https://github.com/tyrocjh/my-util/blob/master/src/array/countOccurrences.js
[intersection]:https://github.com/tyrocjh/my-util/blob/master/src/array/intersection.js
[sample]:https://github.com/tyrocjh/my-util/blob/master/src/array/sample.js
[shuffle]:https://github.com/tyrocjh/my-util/blob/master/src/array/shuffle.js
[sum]:https://github.com/tyrocjh/my-util/blob/master/src/array/sum.js
[toTreeData]:https://github.com/tyrocjh/my-util/blob/master/src/array/toTreeData.js

[addClass]:https://github.com/tyrocjh/my-util/blob/master/src/clazz/addClass.js
[hasClass]:https://github.com/tyrocjh/my-util/blob/master/src/clazz/hasClass.js
[removeClass]:https://github.com/tyrocjh/my-util/blob/master/src/clazz/removeClass.js

[getCookie]:https://github.com/tyrocjh/my-util/blob/master/src/cookie/getCookie.js
[removeCookie]:https://github.com/tyrocjh/my-util/blob/master/src/cookie/removeCookie.js
[setCookie]:https://github.com/tyrocjh/my-util/blob/master/src/cookie/setCookie.js

[detectDeviceType]:https://github.com/tyrocjh/my-util/blob/master/src/device/detectDeviceType.js
[getExplore]:https://github.com/tyrocjh/my-util/blob/master/src/device/getExplore.js
[getOS]:https://github.com/tyrocjh/my-util/blob/master/src/device/getOS.js
[getVersion]:https://github.com/tyrocjh/my-util/blob/master/src/device/getVersion.js
[isAppleDevice]:https://github.com/tyrocjh/my-util/blob/master/src/device/isAppleDevice.js
[isBrowserTabInView]:https://github.com/tyrocjh/my-util/blob/master/src/device/isBrowserTabInView.js
[touchSupported]:https://github.com/tyrocjh/my-util/blob/master/src/device/touchSupported.js

[bottomVisible]:https://github.com/tyrocjh/my-util/blob/master/src/dom/bottomVisible.js
[elementContains]:https://github.com/tyrocjh/my-util/blob/master/src/dom/elementContains.js
[elementIsInFocus]:https://github.com/tyrocjh/my-util/blob/master/src/dom/elementIsInFocus.js
[getRect]:https://github.com/tyrocjh/my-util/blob/master/src/dom/getRect.js
[getScrollTop]:https://github.com/tyrocjh/my-util/blob/master/src/dom/getScrollTop.js
[getStyle]:https://github.com/tyrocjh/my-util/blob/master/src/dom/getStyle.js
[hasChildren]:https://github.com/tyrocjh/my-util/blob/master/src/dom/hasChildren.js
[hasClass]:https://github.com/tyrocjh/my-util/blob/master/src/dom/hasClass.js
[offset]:https://github.com/tyrocjh/my-util/blob/master/src/dom/offset.js
[retSibling]:https://github.com/tyrocjh/my-util/blob/master/src/dom/retSibling.js
[scrollTo]:https://github.com/tyrocjh/my-util/blob/master/src/dom/scrollTo.js
[setScrollTop]:https://github.com/tyrocjh/my-util/blob/master/src/dom/setScrollTop.js
[windowResize]:https://github.com/tyrocjh/my-util/blob/master/src/dom/windowResize.js

[debounce]:https://github.com/tyrocjh/my-util/blob/master/src/func/debounce.js
[once]:https://github.com/tyrocjh/my-util/blob/master/src/func/once.js
[throttle]:https://github.com/tyrocjh/my-util/blob/master/src/func/throttle.js
[timeTaken]:https://github.com/tyrocjh/my-util/blob/master/src/func/timeTaken.js

[htmlDecode]:https://github.com/tyrocjh/my-util/blob/master/src/html/htmlDecode.js
[htmlDecodeByRegExp]:https://github.com/tyrocjh/my-util/blob/master/src/html/htmlDecodeByRegExp.js
[htmlEncode]:https://github.com/tyrocjh/my-util/blob/master/src/html/htmlEncode.js
[htmlEncodeByRegExp]:https://github.com/tyrocjh/my-util/blob/master/src/html/htmlEncodeByRegExp.js

[numToCN]:https://github.com/tyrocjh/my-util/blob/master/src/money/numToCN.js

[isEven]:https://github.com/tyrocjh/my-util/blob/master/src/number/isEven.js
[isFloat]:https://github.com/tyrocjh/my-util/blob/master/src/number/isFloat.js
[isInteger]:https://github.com/tyrocjh/my-util/blob/master/src/number/isInteger.js
[isNumber]:https://github.com/tyrocjh/my-util/blob/master/src/number/isNumber.js
[toFixed]:https://github.com/tyrocjh/my-util/blob/master/src/number/toFixed.js

[equals]:https://github.com/tyrocjh/my-util/blob/master/src/object/equals.js
[isEmptyObject]:https://github.com/tyrocjh/my-util/blob/master/src/object/isEmptyObject.js
[isObject]:https://github.com/tyrocjh/my-util/blob/master/src/object/isObject.js
[mergeObject]:https://github.com/tyrocjh/my-util/blob/master/src/object/mergeObject.js

[randomBoolean]:https://github.com/tyrocjh/my-util/blob/master/src/random/randomBoolean.js
[randomColor]:https://github.com/tyrocjh/my-util/blob/master/src/random/randomColor.js
[randomIntegerInRange]:https://github.com/tyrocjh/my-util/blob/master/src/random/randomIntegerInRange.js
[randomNumberInRange]:https://github.com/tyrocjh/my-util/blob/master/src/random/randomNumberInRange.js
[shuffle]:https://github.com/tyrocjh/my-util/blob/master/src/random/shuffle.js
[uuid]:https://github.com/tyrocjh/my-util/blob/master/src/random/uuid.js

[encryptIdentity]:https://github.com/tyrocjh/my-util/blob/master/src/regex/encryptIdentity.js
[encryptPhone]:https://github.com/tyrocjh/my-util/blob/master/src/regex/encryptPhone.js
[escapeHTML]:https://github.com/tyrocjh/my-util/blob/master/src/regex/escapeHTML.js
[filterCENum]:https://github.com/tyrocjh/my-util/blob/master/src/regex/filterCENum.js
[filterENum]:https://github.com/tyrocjh/my-util/blob/master/src/regex/filterENum.js
[filterFloate]:https://github.com/tyrocjh/my-util/blob/master/src/regex/filterFloate.js
[filterNum]:https://github.com/tyrocjh/my-util/blob/master/src/regex/filterNum.js
[isChinese]:https://github.com/tyrocjh/my-util/blob/master/src/regex/isChinese.js
[isColor]:https://github.com/tyrocjh/my-util/blob/master/src/regex/isColor.js
[isEmail]:https://github.com/tyrocjh/my-util/blob/master/src/regex/isEmail.js
[isIdCard]:https://github.com/tyrocjh/my-util/blob/master/src/regex/isIdCard.js
[isLandline]:https://github.com/tyrocjh/my-util/blob/master/src/regex/isLandline.js
[isLetter]:https://github.com/tyrocjh/my-util/blob/master/src/regex/isLetter.js
[isPhoneNum]:https://github.com/tyrocjh/my-util/blob/master/src/regex/isPhoneNum.js
[isValidPwd]:https://github.com/tyrocjh/my-util/blob/master/src/regex/isValidPwd.js

[byteSize]:https://github.com/tyrocjh/my-util/blob/master/src/str/byteSize.js
[capitalize]:https://github.com/tyrocjh/my-util/blob/master/src/str/capitalize.js
[capitalizeEveryWord]:https://github.com/tyrocjh/my-util/blob/master/src/str/capitalizeEveryWord.js
[decapitalize]:https://github.com/tyrocjh/my-util/blob/master/src/str/decapitalize.js
[fNumber]:https://github.com/tyrocjh/my-util/blob/master/src/str/fNumber.js
[fNumberWithComma]:https://github.com/tyrocjh/my-util/blob/master/src/str/fNumberWithComma.js
[fromCamelCase]:https://github.com/tyrocjh/my-util/blob/master/src/str/fromCamelCase.js
[isEmoji]:https://github.com/tyrocjh/my-util/blob/master/src/str/isEmoji.js
[isNumber]:https://github.com/tyrocjh/my-util/blob/master/src/str/isNumber.js
[isUrl]:https://github.com/tyrocjh/my-util/blob/master/src/str/isUrl.js
[leftPad]:https://github.com/tyrocjh/my-util/blob/master/src/str/leftPad.js
[reverseString]:https://github.com/tyrocjh/my-util/blob/master/src/str/reverseString.js
[rgbToHex]:https://github.com/tyrocjh/my-util/blob/master/src/str/rgbToHex.js
[stripHTMLTags]:https://github.com/tyrocjh/my-util/blob/master/src/str/stripHTMLTags.js
[toCamelCase]:https://github.com/tyrocjh/my-util/blob/master/src/str/toCamelCase.js
[trim]:https://github.com/tyrocjh/my-util/blob/master/src/str/trim.js

[dayOfYear]:https://github.com/tyrocjh/my-util/blob/master/src/time/dayOfYear.js
[formatPassTime]:https://github.com/tyrocjh/my-util/blob/master/src/time/formatPassTime.js
[formatRemainTime]:https://github.com/tyrocjh/my-util/blob/master/src/time/formatRemainTime.js
[getDaysDiffBetweenDates]:https://github.com/tyrocjh/my-util/blob/master/src/time/getDaysDiffBetweenDates.js
[isLeapYear]:https://github.com/tyrocjh/my-util/blob/master/src/time/isLeapYear.js
[isSameDay]:https://github.com/tyrocjh/my-util/blob/master/src/time/isSameDay.js
[isWeekday]:https://github.com/tyrocjh/my-util/blob/master/src/time/isWeekday.js
[timeLeft]:https://github.com/tyrocjh/my-util/blob/master/src/time/timeLeft.js

[getQueryString]:https://github.com/tyrocjh/my-util/blob/master/src/url/getQueryString.js
[httpsRedirect]:https://github.com/tyrocjh/my-util/blob/master/src/url/httpsRedirect.js
[isIpv4]:https://github.com/tyrocjh/my-util/blob/master/src/url/isIpv4.js
[isUrl]:https://github.com/tyrocjh/my-util/blob/master/src/url/isUrl.js
[parseQueryToObj]:https://github.com/tyrocjh/my-util/blob/master/src/url/parseQueryToObj.js
