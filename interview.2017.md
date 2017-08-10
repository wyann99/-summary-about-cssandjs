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


### git
* 怎么回退上个版本
* 遇到冲突怎么解决


### es6 
* set hash表

### 其他
* 用过node的什么
* 用过express 和 mongdb 么


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
	* [javascript实现阿拉伯数字和中文数字互相转换](http://blog.csdn.net/gmd_web/article/details/55254131)






