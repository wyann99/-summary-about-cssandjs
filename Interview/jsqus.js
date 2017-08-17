// *** 一 ***
 var n = 0;
 function a(){
 	var n = 10;
 	function b(){
 		n++;
 		console.log(n)
 		console.log('1')
 	}
 	b();
 	console.log('2')
 	return b;
 }
 var c = a();
 c();
 console.log(n);

// 词法作用域规则：函数的嵌套关系是定义时决定的，而非调用时决定的，即词法作用域，即嵌套关系是由词法分析时确定的，而运行时决定。


// *** 二 ***
var name = 'wang';

function echo(){
	console.log(name);
}

function env(){
	var name = 'eve';
	echo();
}

env();

// 一和二对比可知函数在哪个作用域下定义，那此函数就在那个作用域下开始往作用域链上找变量;


// *** 三 ***
function b(x,y,a){
	arguments[2] = 10;
	console.log(a);
}
b(1,2,3);

// *** 四 ***
if(!("a" in window)){
 	var a = 1;
 }
 console.log(a);

/*首先会解析所有函数，其次是var声明的变量，但是不会赋值;因为javascript没有块的概念，像
	for(var i in array)这里的i依然是全局变量。因此，这几行代码的执行顺序是：
	1.var a; 声明一个变量，但是不会赋值
	2.if语句，全局变量相当于window的属性，所以"a" in window为真，取反为假。故不会执行大括号里面的语句
	3.console.log(a) // undefined	
*/

// *** 五 ***

 var a = 10;

 function test(){
 	a = 100;
 	b = 10;

 	console.log(this);
 	console.log(a);
 	console.log(this.a);
 	var a;
 	console.log(a)
 }
 test();

// window 
// 100
// 10
// 100


// *** 六 ***
var name = "The window";
var object = {
	name: "My Object",
	getNameFunc: function(){
		var a = 1;
		return function(){
			console.log(a)
			console.log(this)
			return this.name;
		};
	}
};
console.log(this.name);
console.log(object.getNameFunc()());

// "The window"
// 1
object 错误
"My Object" 错误
 

// *** 七 ***
var a = "a";
function say(word) {
	console.log(a);
}

function execute(someFunction, value) {
	var  a = "b";
    someFunction(a);
    console.log(a);
}

execute(say, "Hello");


// ***八***
var a = 1;

function demo(){
	console.log(a)
}

function test(conf){
	var a = 2;
	conf();
}
test(demo);

// 1


// ***九***
// 请写出下面代码段结果
function fun(n,o){

	console.log(o);

	return {
		fun:function(m){
			return fun(m,n);
		}
	};
};
var a = fun(0); a.fun(1); a.fun(2); a.fun(3);   
var b = fun(0).fun(1).fun(2).fun(3);   
var c = fun(0).fun(1); c.fun(2); c.fun(3); 

// 闭包的作用：
// 1.匿名自执行函数
// 2.延长作用域链
// 3.封装  实现对象的私有方法，等 （隐藏对象的细节）

// 有点懵逼


// ***十***
// 非严格模式下执行以下代码段， 请输出最终结果
function fn(){ //函数
	prop = function (){ //函数表达式
		console.log(1); 
	};
	return this;
}
fn.prop = function (){ //属性
	console.log(2); 
};
fn.prototype.prop = function (){  //原型链上的属性
	console.log(3); 
};
var prop = function (){ //函数表达式
	console.log(4); 
};
function prop() { //函数
	console.log(5);
};
// 连续代码段， 不是独立的

fn.prop();  //2
prop();  //  4
fn().prop(); //1
prop(); // 1
new fn.prop();
new fn().prop();
new new fn().prop();


function point(x,y){

	if(!x){
		x = 320;
	}

	if(!y){
		x = 240;
	}

	return {x:x,y:y};
}

point(2,3);
console.log(point(2,3));

// http://web.jobbole.com/85326/


var s1 = new String("hello");
var s2 = new String("hello");
console.log(s1 === s2,s1,s2);

var s3 = 'hello';
var s4 ='hello';
console.log(s3===s4,s3,s4);

var a = 'sssss';
var b=a;
console.log(a===b,a,b);

console.log([1,2] == [1,2])

var s5 = String('hello');
var s6 = String('hello');
console.log(s5===s6,s5,s6);
console.log(typeof s3,typeof s5)


for(var i=0; i<3; i++ ){
	setTimeout(function(){
 		console.log(i);	
 	})
}


for(var i=0; i<3; i++ ){
	setTimeout(function(){
 		console.log(i);	
 	},abc);
 	console.log(9);
 	var abc = (function(){
		 		var b = i*1000;
		 		console.log(b);
		 		return b;
		 	})();
}


var t = true;
setTimeout(function(){
	alert(123);
	t = false;
},1000);
while(t){
	alert(999);
};
console.log('end');

// js 单线程
// https://leohxj.gitbooks.io/front-end-database/theory/single-thread.html




function Animal (name, color) {
	this.name = name;
	this.color = color;
}
Animal.prototype.sleep = function(){
	console.log(this.name + 'sleep');
}

function Cat(){
	Animal.apply(this, arguments);
}
Cat.prototype = chain(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.greenEye = true;
Cat.prototype.mev = function(){
	console.log(this.name + 'mev');
}

function PersianCat(){
	Cat.apply(this, arguments)
}
PersianCat.prototype = chain(Cat.prototype)
PersianCat.prototype.constructor = PersianCat
PersianCat.prototype.name = 'persian cat'
PersianCat.prototype.blueEye = true
PersianCat.prototype.mev = function(){
	Cat.prototype.mev.call(this);
	console.log(this.name + 'miaov')
}

var a1 = new Animal('倒霉熊', 'white');
a1.sleep(); 

var c2 = new Cat('没头脑', 'red');
c2.mev(); 
c2.sleep(); 
console.log(c2.greenEye) 

var p3 = new PersianCat('不高兴', 'yellow');
p3.mev(); 
p3.sleep(); 
console.log(p3.greenEye)
console.log(p3.blueEye) 
console.log(p3.__proto__.name)

