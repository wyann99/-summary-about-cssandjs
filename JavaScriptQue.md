### 1、javaScript中not defined，undefined和null的区别

[ans](http://www.jianshu.com/p/eca505f12095)


### 2、JavaScript怎么清空数组？
``` javaScript
// 1
arr = [];
//2
arr.length = 0;
//3
arr.splice(0, arr.length);
```

### 3、怎么判断一个object是否是数组(array)？
```javaScript
// 1、使用 Object.prototype.toString 来判断是否是数组
function isArray(obj){
	return Object.prototype.toString.call(obj) === '[object Array]';
}

// 2、使用原型链
function isArray(obj){
	return obj._proto__ === Array.prototype;
}

```

### 4、关注delete操作
``` javaScript
var output = (function(x){
    delete x;
    return x;
})(0);

console.log(output);

// 1、输出是 0。 delete 操作符是将object的属性删去的操作。
// 但是这里的 x 是并不是对象的属性， delete 操作符并不能作用。

var x = 1;
var output = (function(){
    delete x;
    return x;
})();

console.log(output);

// 2、输出是 1。delete 操作符是将object的属性删去的操作。
// 但是这里的 x 是并不是对象的属性， delete 操作符并不能作用。

var x = { foo : 1};
var output = (function(){
    delete x.foo;
    return x.foo;
})();
 
console.log(output);

// 3、输出是 undefined。x虽然是全局变量，但是它是一个object。
// delete作用在x.foo上，成功的将x.foo删去。所以返回undefined

var Employee = {
    company: 'xyz'
}
var emp1 = Object.create(Employee);
delete emp1.company
console.log(emp1.company);

// 4、输出是 xyz，这里的 emp1 通过 prototype 继承了 Employee的 company。
// emp1自己并没有company属性。所以delete操作符的作用是无效的。

```

### 5、什么是 undefined x 1 ？


### 6、输出结果
```javaScript

var z = 1, y = z = typeof y;
console.log(y);

// String

```

### 7、如果我们使用JavaScript的”关联数组”，我们怎么计算”关联数组”的长度？
```javaScript
var counterArray = {
    A : 3,
    B : 4
};
counterArray["C"] = 1;

//其实答案很简单，直接计算key的数量就可以了。

Object.keys(counterArray).length // Output 3

```

### 8、下题的结果
```javaScript
function fun(n,o) {
	console.log(o)
	return {
		fun:function(m){
			return fun(m,n);
		}
	};
}

var a = fun(0);  a.fun(1);  a.fun(2);  a.fun(3);
var b = fun(0).fun(1).fun(2).fun(3);
var c = fun(0).fun(1);  c.fun(2);  c.fun(3);

//解析
a = fun(0);//fun(0,o)，此时o为undefined,
所以console.log 一个 undefined 
并
return {fun:function(m)}
则
a = {
		fun:function(m){
    		return fun(m,0);
    }
}
a.fun(1) = function(1){
  return fun(1,0);
};
fun(1,0) = {
    console.log(0);
    return {
  	  fun:function(m)
	   }
};//所以会console.log一个0
a.fun(2)与a.fun(3)同a.fun(1);

关于b fun(0).fun(1) == a.fun(1)//到这层为止，请参照a.fun(1)的解释。所以会console.log undefined,0;
fun(0).fun(1).fun(2)//这层 
fun(0).fun(1) = {
console.log(0);    
return{
        fun:function(m){
            return fun(m,1);
          }
      }
}
则fun(0).fun(1).fun(2) = fun(2,1); //运行到fun(0).fun(1).fun(2)这层
fun(2,1) = {
    console.log(1);
     return {
        fun:function(m)
            {
             return fun(m,2);
            }
     }
  }
所以会console.log一个1
则fun(0).fun(1).fun(2).fun(3) = fun(3,2); //同理于fun(2,1)，所以会console.log一个2
  
那么c这边就好解决的多了。
c = fun(0).fun(1) 	//类似于a.fun(1); 所以会console.log undefined,0;
c.fun(2)与c.fun(3)	//参考b 的fun(0).fun(1).fun(2) ，所以会console.log 1,1.
  
// 所以最后答案为 undefined,0,0,0;undefined,0,1,2;undefined,0,1,1

```

#### 请写出下列语句的返回结果并解释原因。
```javaScript

function Sjk() {
    getVal = function () { console.log(1); };
    return this;
}

Sjk.getVal = function () { console.log(2);};

Sjk.prototype.getVal = function () { console.log(3);};
var getVal = function () { console.log(4);};
function getVal() { console.log(5);}

//请写出以下语句的运行结果，并解释原因
Sjk.getVal(); //2
getVal(); //4
Sjk().getVal(); //1
getVal(); //1
new Sjk().getVal(); //3

```






* 参考
	* [20个必会的JavaScript面试题](http://web.jobbole.com/90842/)

