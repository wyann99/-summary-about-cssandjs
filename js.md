#### querySelect 和 querySelectAll（javascript高级选择器）IE8及以上可用
```javascript
	//获取ID
	document.getElementbyId("test");
	document.querySelect("#test");
	document.querySelectAll("#test")[0];

	//获取class
	document.getElementsByClassName("type");
	document.querySelect(".type");
	document.querySelectAll(".type");

	//querySelector返回的是一个对象，querySelectorAll返回的一个集合(NodeList)
```


#### canvas中使用drawImage
```javascript
	//使用中要给canvas设置宽高单位是px，百分比是对画布的缩放
	var oCanvas = document.getElementById("wcanvas");
	var cxt = oCanvas.getContext("2d");
	var oImg = new Image();
	oImg.src = "images/person.png";
	oImg.onload = function(){ //图片加载出来才加载画布
		cxt.drawImage(oImg,0,0,320,450);
	};

	//或者还可以写作
	var oCanvas = document.getElementById("wcanvas");
	var cxt = oCanvas.getContext("2d");
	var oImg = document.getElementById("wimg");
	oImg.onload = function(){ 	//图片加载出来才加载画布
		cxt.drawImage(oImg,0,0,320,450);	//图片大小
	};
```

#### lacalstorage
```javascript
	// 单个数据
	localStorage.setItem("name","miya");//设置
	localStorage.getItem("name");//获取
	localStorage.removeItem("name");//删除
	localStorage.clear();//删除

	//多个数据 - 用json格式
	var userData = {
		name:"miya",
		account:"yu",
		level:1
	}
	
	localStorage.setItem("userData",JSON.stringify(userData));//存储
	var newData = JSON.parse(localStorage.getItem("userData"));//取出所有值
	var newName = JSON.parse(localStorage.getItem("userData").name);
	localStorage.removeItem("newData");

	//更新Json里面的数据
	var userData = JSON.parse(localStorage.getItem("userData"));
	userData.name = "newName";
	localStorage.setItem("userData",JSON.stringify(userData));
```


#### 动态添加option
```javascript
	function addOption(){
		var obj = document.getElementById("Select");
		obj.option.add(new Option("text","value"));//兼容IE与Firefox
	}
```

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
	for(var i=0;i< all.length;i++){
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





