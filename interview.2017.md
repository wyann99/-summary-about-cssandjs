## 58面试题
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


### git
* 怎么回退上个版本
* 遇到冲突怎么解决

### es6 
* set hash表

### 一些JS操作问题
```javascript
function doSomething(){
  console.log(9999)
  console.log(this);
}

element.onclick = doSomething;
element.onclick = function(){
  doSomething();
}
doSomething();


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




```







