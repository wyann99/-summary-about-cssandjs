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
