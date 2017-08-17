第一部分：CSS相关

1. 如何垂直居中div（尽量多）？

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

4. 导致JavaScript内存泄漏方式有哪些？

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
