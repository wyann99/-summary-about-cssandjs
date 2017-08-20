第一部分：CSS相关

1. 如何垂直居中div（尽量多）？

一、
.containter {
	dispaly: table;
	width: 100px;
	height: 100px;
}

.items {
	dispaly: table-cell;
	vertical-align: middle;
	text-align: center;
}

二、
.container {
	width: 100px;
	height: 100px;
	text-align: center;
}

.items {
	dispaly: inline-display;
	width: 0;
	height: 100%;
	vertical-align: middle;
}

三、
.container {
	position: relative;
	width: 100px;
	height: 100px;
}

.items {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

四、
.container {
	dispaly: flex;
	align-items: center;
	justify-content: center;
	width: 100px;
	height: 100px;
}

.items {
	
}




2. 请解释一下为什么会出现浮动和什么时候需要清除浮动？清除浮动的方式？

设置了float属性的元素脱离了文档流；原来的地方被其他元素填充或塌陷，导致父元素的大小不再由float的元素决定，发生大小变化或塌陷而导致布局混乱。
清浮动常见几种思路如下：
同级元素增加空标签
.clear {clear: both}
	<div class="clear"></div>
父级的div增加overflow: hidden或者display: table
使用伪类属性（常用）
.clearfix:after {
  	content: "",
    display: block,
    clear: both
}
.clearfix {
  	zoom: 1 // 兼容IE
}
第二部分：JavaScript 相关
3. 跨域问题的解决方案有哪些？
	1> document.domain + iframe (只有在主域相同的时候才能使用该方法)
	2> 动态创建script
	3> location.hash + iframe
	4> window.name + iframe
	5> postMessage（HTML5中的XMLHttpRequest Level 2中的API）
	6> CORS
	7> JSONP
	8> web sockets
	http://blog.csdn.net/joyhen/article/details/21631833


4. 导致JavaScript内存泄漏方式有哪些？
	1、意外的全局变量引起的内存泄漏（不使用var进行定义，使用use strict，不会被回收）
	2、闭包引起的内存泄漏（维持函数内局部变量，使其得不到释放）
	3、没有清理的DOM元素引用
	4、被遗忘的定时器或者回调
	5、子元素存在引用引起的内存泄漏

	你能想哪些避免内存泄漏的姿势
	1、减少不必要的全局变量，或者生命周期较长的对象，及时对无用的数据进行垃圾回收
	2、注意程序逻辑，避免“死循环”之类的
	3、避免创建过多的对象
	原则：不用了的东西要及时归还。


5. 有哪些性能优化的方法？


6. 写出下面运行结果
var bar = 0;
var obj = {
	bar: 1,
	foo: function() {
		console.log(this.bar);
	}
};
var obj2 = {
	bar: 2,
	foo: obj.foo
};
var obj3 = {
	bar: 3,
	foo: function() {
		return obj.foo;
	}
};
var tempFoo = obj2.foo;
obj.foo();
obj2.foo();
obj3.foo()();
tempFoo();

tempFoo = obj.foo = function(){console.log(this.bar)}
1
2
3 obj3.foo() = function(){console.log(this.bar)}
0


7. 分别已知2个长方形左上和右下的坐标，判断是否重叠

策略简述
判断不重叠：
一个在另一个左边
一个在另一个上边
并请填充程序（伪代码即可）
function Point(x, y) {
  this.x = x;
  this.y = y;
}

// return true or false to indicate overlap or not
// l1 r1 l2 r2 都是 Point 类型
function is_overlap(l1, r1, l2, r2) {
if (l1.x > r2.x || l2.x > r1.x)
    return false;

// If one rectangle is above other
if (l1.y < r2.y || l2.y < r1.y)
    return false;

return true;
}
