#### 关于cookie
```javascript
<!-- 设置 -->
function setCookie(name,value,iDay){
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + iDay);
	document.cookie = name + '=' + value +  ';expires='+ oDate;
}
<!-- 获取 -->
function getCookie(name){
	var arr= document.cookie.split('; ');
	for(var i=0;i<arr.length;i++){
		var arr2 = arr[i].split('=');
		if(arr2[0]=name){
			return arr2[1];
		};
	}
	return '';
}
<!-- 删除 -->
function removeCookie(name){
	setCookie(name,1,-1);
}
```

#### scrollTop 兼容性
```javascript
var scrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
```


#### 解决绑定事件兼容性
```javascript
function myAddEvent(obj,ev,fn){
	if(obj.attchEvent){
		obj.attchEvent("on"+ev,fn){}
	}else{
		obj.addEventListener(ev,fn,false){}
	}
}

```

#### 获取className
```javascript
function getClass(className){
	var element = [];
	var all = document.getElementsByTagName("*");
	for(var i=0;i<all.length;i++){
		if(all[i].className == className){
			element.push(all[i]);
		}
	}
	return element;
}
```

#### 取非行间样式
```javascript
function getStyle(obj,name){
	if(obj.currentStyle){
		//IE
		return obj.currentStyle[name];
	}else{
		//FF
		return getComputedStyle(obj,false)[name];
	}
}
```

#### 任意值运动框架
```javascript
function startMove(obj,attr,iTarget){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var cur = parsetInt(getStyle(obj,attr));
		var speed = (iTarget - cur)/6;
		speed = speed>0?Math.ceil(speed):Math.floor(speed);
		if(cur == iTarget){
			clearInterval(obj.timer);
		}else{
			obj.style[attr] = cur + speed + 'px';
		}
	},30);
}
```
	
- 特殊：修改透明度
```javascript
function startMove(obj,attr,iTarget){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var cur = 0;
		if(attr == 'opacity'){
			cur = Math.round(parseFloat(getStyle(obj,attr))*100);
		}else{
			cur = parsetInt(getStyle(obj,attr));
		}
		var speed = (iTarget - cur)/6;
		speed = speed>0?Math.ceil(speed):Math.floor(speed);
		if(cur == iTarget){
			clearInterval(obj.timer);
		}else{
			if(attr == 'opacity'){
				obj.style.filter = 'alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity = (cur+speed)/100;
			}else{
				obj.style[attr] = cur + speed + 'px';
			}
		}
	},30);
}
```
- 运动框架
```javascript
function startMove(obj, attr, iTarget, fnEnd){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var cur=0;
		if(attr=='opacity'){
			cur=Math.round(parseFloat(getStyle(obj, attr))*100);
		}else{
			cur=parseInt(getStyle(obj, attr));
		}

		var speed=(iTarget-cur)/6;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);

		if(cur==iTarget){
			clearInterval(obj.timer);
			if(fnEnd)fnEnd();
		}else{
			if(attr=='opacity'){
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
			}else{
				obj.style[attr]=cur+speed+'px';
			}
		}
	}, 30);
}
```

- 完美运动框架
```javascript
function startMove(obj, json, fnEnd){
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var bStop=true;		//假设：所有值都已经到了
		
		for(var attr in json){
			var cur=0;
			
			if(attr=='opacity'){
				cur=Math.round(parseFloat(getStyle(obj, attr))*100);
			}else{
				cur=parseInt(getStyle(obj, attr));
			}
			
			var speed=(json[attr]-cur)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(cur!=json[attr])
				bStop=false;
			
			if(attr=='opacity'){
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
			}else{
				obj.style[attr]=cur+speed+'px';
			}
		}
		
		if(bStop){
			clearInterval(obj.timer);
						
			if(fnEnd)fnEnd();
		}
		
	}, 30);
}
```





