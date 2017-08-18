## 58
### css
* 屏幕的自适应 media
* rem是怎么计算的


### JS
* jsonp的原理，callback方法
* this的指向
* 数组怎么去重
* 字符串操作
* for循环覆盖值问题


### VueJS
* computed中的方法和methods中定义的方法有什么区别
* 组件之间怎么通信
* 对变量的操作
* 生命周期
* 优势


### git
* 怎么回退上个版本
* 遇到冲突怎么解决


### es6 
* set hash表

### 其他
* 用过node的什么
* 用过express 和 mongdb 么
* 简述下MVC思想
* HTTP协议，输入地址后的反应

## 问答题
* vueJS 的生命周期
	* beforecreated：el 和 data 并未初始化 
	* created:完成了 data 数据的初始化，el没有
	* beforeMount：完成了 el 和 data 初始化 
	* mounted ：完成挂载
* computed中的方法和methods中定义的方法有什么区别
	* computed 方法执行不用加(),methods方法需要加()
	* methods 方法在调用的时候每次都需要执行一次，computer只在第一次进入页面执行，之后不会再触发（相当于放在了缓存中）
* 组件之间的通信
	* 父传子：Props
	* 子传父：子：$emit(eventName) 父$on(eventName)
	* 父访问子：ref
* vuejs 优势
	* Vue.js从React那里借鉴了组件化、prop、单向数据流、性能、虚拟渲染，并意识到状态管理的重要性。
	* Vue.js从Angular那里借鉴了模板，并赋予了更好的语法，以及双向数据绑定（在单个组件里）。
	* 从我们团队使用Vue.js的情况来看，Vue.js使用起来很简单。
	它不强制使用某种编译器，所以你完全可以在遗留代码里使用Vue，并对之前乱糟糟的jQuery代码进行改造。
* 输入网址后，实际发生了什么呢？
	* 1、输入网址
	* 2、浏览器查找域名中的IP地址（DNS查找过程；浏览器缓存->系统缓存->路由器缓存->ISP DNS缓存）
	* 3、浏览器给Web服务器发生一个HTTP请求
	* 4、服务器给浏览器响应一个301永久重定向响应
	* 5、浏览器跟踪重定向地址，给服务器发送另一个获取请求
	* 6、服务器“处理”请求，并返回一个响应
	* 7、浏览器接收到响应，开始显示HTML，显示标签
	* 8、浏览器发送一个获取请求，获取css/js/img资源 （这些资源又会经历一次HTML读取过程）
	* 9、浏览器发送异步（AJAX）请求
* HTTP响应码
	* 1XX：信息，请求收到，继续处理
	* 2XX：成功，行为被成功的接受、理解、采纳
	* 3XX：重定向，为了完成请求，必须进一步执行的动作
	* 4XX：客户端错误，请求包含语法错误或者请求无法实现
	* 5XX：服务器错误，服务器不能实现一种明显无效请求
* 关于跨域问题
	* 了解跨域安全跟性能相关的问题
	* 描述一下跨域安全问题
		* 跨域资源共享(CORS)：CORS定义了两种跨域请求，简单跨域请求和非简单跨域请求。
		* 当一个跨域请求发送简单跨域请求包括：
			* 请求方法为HEAD，GET，POST;
			* 请求头只有4个字段，Accept，Accept-Language，Content-Language，Last-Event-ID;
			* 如果设置了Content-Type，则其值只能是application/x-www-form-urlencoded,multipart/form-data,text/plain。
		* 浏览器检查之后发现这是一个非简单请求，比如请求头含有X-Forwarded-For字段。这时候浏览器不会马上发送这个请求，而是有一个preflight，跟服务器验证的过程。浏览器先发送一个options方法的预检请求。
			* Origin: 普通的HTTP请求也会带有，在CORS中专门作为Origin信息供后端比对,表明来源域。
			* Access-Control-Request-Method: 接下来请求的方法，例如PUT, DELETE等等
			* Access-Control-Request-Headers: 自定义的头部，所有用setRequestHeader方法设置的头部都将会以逗号隔开的形式包含在这个头中

			* Access-Control-Allow-Origin: 允许跨域访问的域，可以是一个域的列表，也可以是通配符"*"。这里要注意Origin规则只对域名有效，并不会对子目录有效。即http://foo.example/subdir/ 是无效的。但是不同子域名需要分开设置，这里的规则可以参照同源策略
			* Access-Control-Allow-Credentials: 是否允许请求带有验证信息，这部分将会在下面详细解释
			* Access-Control-Expose-Headers: 允许脚本访问的返回头，请求成功后，脚本可以在XMLHttpRequest中访问这些头的信息(貌似webkit没有实现这个)
			* Access-Control-Max-Age: 			缓存此次请求的秒数。在这个时间范围内，所有同类型的请求都将不再发送预检请求而是直接使用此次返回的头作为判断依据，非常有用，大幅优化请求次数
			* Access-Control-Allow-Methods: 允许使用的请求方法，以逗号隔开
			* Access-Control-Allow-Headers: 允许自定义的头部，以逗号隔开，大小写不敏感

	* 怎么实现跨域请求
		* document.domain+iframe 的设置
		* 动态创建script
		* 利用iframe和location.hash
		* window.name实现跨域数据传输
		* 使用HTML5 postMessage
		* 利用flash

* 去除数组中重复元素
return Array.from(new Set(Arr));

### 一些JS操作问题
```javascript
// 一
function doSomething(){
  console.log(this);
}
element.onclick = doSomething;
element.onclick = function(){
  doSomething();
}
doSomething();

// 二
var events = {m1: 'clicked',m2: 'changed'};
var obj = {};
for(e in events){
  obj[e] = function(){
    console.log(events[e])
  }
}
console.log(obj.m1 == obj.m2);
obj.m1();
obj.m2();

// 三 将'92658' 转换为 '九万两千六百五十八'
function change(str){
	var pri = ['','十','百','千'];
	var num = ['零','一','二','三','四','五','六','七','八','九'];
	var Arr = str.split('');
	var _length = Arr.length;
	var newArr = [];

	for(var i=0;i< _length;i++){
		newArr.push(num[Arr[i]]);
		newArr.push(pri[_length-1-i]);
	}

	return newArr.join('');
}
change('92658');

```
* 参考：
	* [Javascript this指针详解](http://blog.csdn.net/daiwei15/article/details/7635463)
	* [深入剖析jsonp跨域原理](http://www.cnblogs.com/digdeep/p/4170059.html)
	* [GIT的基本操作](http://www.cnblogs.com/my-freedom/p/5701427.html)
	* javascript实现阿拉伯数字和中文数字互相转换
		* [简单版](http://blog.csdn.net/gmd_web/article/details/55254131)
		* [复杂版](https://segmentfault.com/a/1190000008962568)


## 三节课
* js原型链
* 数组排序 正序 逆序
* 简述浏览器的渲染过程
* H5的新特性
* 你在过去的公司或者在过去的项目中学到了什么东西？

```javaScript
// 一
function Sjk() {
    getVal = function () { console.log(1); };
    return this;
}
Sjk.getVal = function () { console.log(2);};
Sjk.prototype.getVal = function () { console.log(3);};
var getVal = function () { console.log(4);};
function getVal() { console.log(5);}

//请写出以下语句的运行结果，并解释原因
Sjk.getVal();
getVal();
Sjk().getVal();
getVal();
new Sjk().getVal();

// 二
var arr = [12, 3, 1, 5, 34, 10, 22];
function sortArr(arr, sym){
  var newArr = arr;
  if(sym == '>'){
    return arr.sort(function(a,b){return a<b?1:-1})
  }else{
    return arr.sort(function(a,b){return a>b?a:-1})
  }
}

sortArr(arr, '>');

// 三
渲染过程
i.渲染是以流式进行的。不需要得到全部数据再渲染，如：HTML文件下载多少就渲染多少；
ii.大多数HTML外部资源都不会阻塞UI线程，如：CSS、IMG、Flash等，没有load完毕的图片会留一个空位置在那里；
iii.大多数的HTML元素都是渲染出DOM便立刻显示的；
iiii.HTML从上到下解析，该过程不可逆（参考 i）。但会出现reflow（重排） and repaint（重绘）。

遇到script标签 浏览器会暂停渲染HTML，将script交给js引擎编译执行，js会创建textNode


// 四
文档类型 <!DOCTYPE HTML>
新结构标签：header footer nav section article hgroup aside
新增内联元素 figure figcaption mark time 
全新的表达设计 email url number range search color Date pickers(date,month)
绘图跟多媒体：canvas svg audio video
离线缓存 web storage

// 五
https://www.dajie.com/corp/3490059/discuss/6887634

```



##
* 数据结构
* 算法
* 设计模式
* 编译原理
* 进程间的通信

* 数据转换 undefined null NaN

