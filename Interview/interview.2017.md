## 58
#### css
* 屏幕的自适应 media
* rem是怎么计算的

#### JS
* jsonp的原理，callback方法
* this的指向
* 数组怎么去重
* 字符串操作
* for循环覆盖值问题

#### VueJS
* computed中的方法和methods中定义的方法有什么区别
* 组件之间怎么通信
* 对变量的操作
* 生命周期
* 优势

#### git
* 怎么回退上个版本
* 遇到冲突怎么解决

#### es6 
* set hash表

#### 其他
* 用过node的什么
* 用过express 和 mongdb 么
* 简述下MVC思想
* HTTP协议，输入地址后的反应
* 去除数组中重复元素
* 

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

### 解答 

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

### 瓜子
#### 第一轮
* $("div").click(function(){}) 和 $("div").on("click",function(){})的区别
* let const var 的区别 （let是块作用域）
* 跨域怎么实现的，有几种方法
* format函数
* backgroundsize怎么使用的
* 为什么要使用rem，是怎么设置的？跟em区别
* 块级元素居中显示，有几种方法；
* proxy
* promise
* 写一个倒计时的方法；


#### 第二轮
* section article
* css可以继承的属性
* 跨域怎么实现的
* 居中操作
* 遇到过什么兼容性问题
* 实现从200个样例中随机抽取100个样例，（不用随机函数实现，因为还需要去重；可以先将样例打散，然后进行取值）；


#### 第三轮
* 知道BEM么
* css3有哪些新属性
* 图片上传可以使用微信的jssdk
* 原生有哪些对DOM元素进行操作的方式(appendChild\insetBefore)
* 知道symbol么，怎么使用的
* setInterval 和 setTimeout 有什么区别；setTimeout(0)的使用；设置1000ms,setInterval是按照标准的1000ms区执行代码么？（不是，是按照function中的执行时间决定的）
* css实现动画和js实现动画有什么不同，选择哪个
* node的库koa 
* document.cookie
* git 分支的操作
* promise为什么要使用，并且在ES6中提出来
* 使用vue有什么感受么

* 书：《蚂蚁金服》


### 借贷宝
#### 客观题
* alert(0 || 1);
* 4 + 3 + 2 + '1'
* 
```javascript
function foo(a){
	arguments[0] = 2;
	alert(a)
}
foo(1)
```
* 
```javascript
var a = 888;
++a;
alert(a++);
```
* 
```javascript
var name = 'world';
(function(){
	if(typeof name === 'undefined'){
		var name = 'Jack';
		console.log('Goodbye' + name);
	}else{
		console.log('Hello' + name);
	}
})();
```
* 关于变量的命名规则
* 关于数组的操作，pop(),shife(),concat(),返回值、返回长度
* 有关HTML5 Canvas性能优化的做法
* 为了实现表单文件上传，需要将form元素的enctype的属性设置为：multipart/form-data
* 两个文档同源需要满足的条件：协议相同、域名相同、端口相同
* 输出“I'm lasagna hog”.split("").reverse().join("");
* HTTP状态码的含义
	* 200：
	* 301：
	* 404：
	* 500
* 优	先级排序
	* tag id class !important

#### 问答题
* 跨域通信通常的方法？
* JavaScript中将对象值赋给一个变量并不会复制这个对象，而是让变量指向同一个对象，请用至少2种不同的方法实现对象的拷贝；* 提示：可自己实现copy方法，也可用第三方库的方法
* 罗列常用的图片格式，并简要说明使用场景
* 针对以下性能问题，如果追查，如果解决
	* 白屏时间过长
	* 列表滚动卡顿
	* 图片加载慢
* 以下题目3选1
	* 1、下面数组是从1到n连续的数组（n>2），从中间折断并交换顺序后，用二分法找到数组中1的索引
		数组：[n-x+1, n-x+2, ..., n-1, n, 1, 2, 3, 4, 5, ..., n-x]
		示例：[7, 8, 9 ,10, 11, 12, 13, 14, 15, 1, 2, 3, 4, 5, 6]
	* 2、Fibonacci数列
		Fibonacci数列，定义如下：
		f(1)=f(2)=1;
		f(n)=f(n-1)+f(n-2) n>=3
		计算第n项Fibanacci数值
		Input ：输入第一行为一个整数N，接下来N行为整数Pi(1<=Pi<=1000);
		Output：输出为N行，每行为对应的f(Pi);
	* 3、用面向对象的思想设计一款魔方游戏； 

#### 开放题
* 比较一下库或框架，zepto、vue、react、angular.js、Angulart2
* 比较WebApp、hybrid App、React Native、Native App的区别
* 综合上两个项目，说说对于移动端页面，如何选型？



#### 其他知识点
* 数据结构
* 算法
* 设计模式
* 编译原理
* 进程间的通信

* 数据转换 undefined null NaN

### 知识点总结
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

	* 易用 已经会了HTML,CSS,JavaScript？即刻阅读指南开始构建应用！
	* 灵活 简单小巧的核心，渐进式技术栈，足以应付任何规模的应用。
	* 性能 20kb min+gzip 运行大小\ 超快虚拟 DOM \最省心的优化


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
	* http://blog.csdn.net/xiaozhuxmen/article/details/51934706
	* http://blog.csdn.net/xiaozhuxmen/article/details/52014901
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
* 前端工程与性能优化
性能优化方向分类：

	请求数量

	1、合并脚本和样式表

	2、CSS Sprites

	3、拆分初始化负载

	4、划分主域（使用“查找-替换”思路，我们可以很好的实现，划分主域原则）

	请求带宽

	1、开启GZip(开启服务器的GZip压缩)

	2、精简JavaScript（利用YUI compressor，压缩工具）

	3、移出重复脚本

	4、图像优化（图片压缩）

	缓存利用

	1、使用CDN（实现静态资源的缓存和快速访问）

	2、使用外部的JavaScript 和 Css

	3、添加 Expire

	4、减少DNS查询

	5、配置ETag

	5、使用Ajax

	页面结构

	1、将样式表放在顶部

	2、今早刷新文档的输出

	代码校验

	1、避免CSS表达式

	2、避免重定向

	* http://www.jianshu.com/p/758f30a64368

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





