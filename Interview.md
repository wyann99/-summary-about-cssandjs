#### 已知有字符串foo='get-element-by-id',写一个function将其转化成驼峰表示法”getElementById”
- 方法1
```javascript
function changeCase(str){
		var Arr = str.split('-');
		var Arrb = [];
		for(var i=0;i<Arr.length;i++){
			if(i==0){
				Arrb[i] = Arr[i].toString().toLowerCase();
			}else{
				Arrb[i] = Arr[i].toString().substring(0,1).toUpperCase()+ Arr[i].toString().substring(1).toLowerCase();
			}
		}
		return Arrb.join('');
	}
	changeCase('get-element-by-id');
```

<br>
#### arguments.callee 消除函数的执行与函数名的耦合
```javascript
function factorial(num){
	if(num <=1){
		return 1;
	}else{
		return num * arguments.callee(num -1)
	}
}

var trueFactorial = factorial;

factorial = function(){
	return 0;
}

alert(trueFactorial(5));
alert(factorial(5));

<!-- 120 -->
<!-- 5 -->

<!-- 变量trueFactorial 获得了 factorial 的值，实际上是在另一个位置上保存了一个函数的指针。 -->
<!-- 然后，又将一个简单地返回0的函数赋值给了factorial 变量。 -->
<!-- 如果像原来factorial() 那样不使用 arguments.callee ,调用trueFactorial() 就会返回0. -->
<!-- 在解除了函数体内的代码与函数名的耦合状态之后，trueFactorial() 仍然能够正常的计算阶乘；至于factorial(),它现在只是一个返回0的函数。 -->

```

<br>
#### 牢记：函数名字仅仅是一个包含指针的变量而已！

<br>
#### caller 保存着调用当前函数的函数的引用，如果是在全局作用域中调用当前函数，它的值为null

<br>
#### 关于apply() 和 call()
```javascript
<!-- 每个函数都包含两个非继承而来的方法：apply() 和 call() 。 -->
<!--  这两个方法的用途都是在特定的作用域中调用函数，实际上等于设置函数体内的this对象的值。 -->

<!--  apply() 方法接收两个参数：一个是在其中运行函数的作用域，另一个是参数数组。 -->
<!-- 其中，第二个参数可以是 Array 的实例，也可以是 arguments 对象。 -->

<!--  call() ，第一个参数是this值没有变化，其余参数都直接传递给函数。 -->
<!--  换句话说，在使用call() 方法时，传递给函数的参数必须逐个列举出来。 -->

<!-- 这两个方法的作用相同，区别仅在接收参数的方式不同。 -->
<!-- 使用apply() 还是 call() ，完全取决于采取哪种给函数传递参数的方式最方便。 -->

<!-- 使用call() （或apply()）来扩充作用域的最大好处，就是对象不需要与方法有任何耦合关系。 -->
```

<br>
#### bind() 创建一个函数的实例，其 this 值会被绑定到传给 bind() 函数的值。
```javascript
window.color = "red";
var o = {color:"blue"};

function sayColor(){
	alert(this.color);
}
var objectSayColor = sayColor.bind(o);
objectSayColor();

<!-- blue -->
<!-- sayColor() 调用 bind() 并传入对象 o ,创建了 objectSayColor() 函数。 objectSayColor() 函数的 this 值等于 o,因此即使是在全局作用域中调用这个函数，也会看到"blue"。 -->
```

<br>

#### 基本包装Boolean类型
```javascript

<!-- 基本类型与引用类型的布尔值还有两个区别。 -->
<!-- 首先，typeof 操作符对基本类型返回"boolean"，而对引用类型返回"object"。 -->
<!-- 其次，由于boolean 对象是 Boolean 类型的实例，所以使用 instanceof 操作符测试Boolean 对象会返回true，而测试基本类型的布尔值则返回false。 -->

var falseObject = new Boolean(false);
var result = falseObject && true;
alert(result); <!-- ture -->

var falseValue = false;
result = falseValue && true;
alert(result); <!-- false -->
```

<br>

#### 字符串中匹配模式的方法
```javascript

var text = "cat, bat, sat, fat";
var pattern = /.at/;

var matches = text.match(pattern);

console.log(pattern.exec(text));
console.log(matches);
console.log(matches.index);
console.log(matches[0]);

<!-- ["cat",index:0,input:"cat, bat, sat, fat"]; -->
<!-- ["cat",index:0,input:"cat, bat, sat, fat"]; -->
<!-- 0 -->
<!-- cat -->

<!-- macth(); 本质上与调用 RegExp 的 exec()方法相同。 -->
<!-- match()方法只接受一个参数，要么是一个正则表达式，要么是一个RegExp对象。 -->
<br>

var text = "cat, bat, sat, fat";
var pos = text.search(/at/);
console.log(pos);

<!-- 1 -->

<!-- search() 此方法的唯一参数与 match() 方法参数相同：由字符串或 RegExp 对象指定的一个正则表达式。 -->
<!-- search() 方法返回字符串中第一个匹配项的索引；如果没有找到匹配项，则返回-1。 -->
<!-- 而且 search() 方法始终是从字符串开头向后查找模式。 -->
<br>

var text = "cat, bat, sat, fat";
var result = text.replace("at","ond");
console.log(result);

<!-- "cond, bat, sat, fat" -->

result = text.replace(/at/g, "ond");
console.log(result);

<!-- "cond, bond, sond, fond" -->

<!-- replace() ，接受两个参数：第一个参数可以是 RegExp 对象或者一个字符串（这个字符串不会被转换成） -->

```

