### 取非行间样式
	function getStyle(obj,name){
		if(obj.currentStyle){
			//IE
			return obj.currentStyle[name];
		}else{
			//FF
			return getComputedStyle(obj,false)[name];
		}
	}
