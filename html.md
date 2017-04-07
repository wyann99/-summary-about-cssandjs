### 工作中遇到的新需求及解决方法
#### 1、需求是手机端观看完视频 跳转到新页 用户可点击播放/暂停，但不可以快进
- 一开始是用的 video.js 插件：可监听视频的结束；但发现 iPhone 点击视频会自动弹开;
- 查看资料：禁止 iPhone Safari 视频自动全屏：<br>
	可以在 video 标签加一个 `“webkit-playsinline” `属性，如下：
	```javascript
	<video id="video" width="" height="" webkit-playsinline></video>
	```
	详情官方文档：[UIWebView Class Reference](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIWebView_Class/index.html)<br>

	亲测：微博和客户端里无用，QQ和微信里可以 


- 以下为拓展：<br>
	在iOS APP中使用网页视频，是可以禁止全屏播放的，方法如下：<br>
		1. 前端将video标签加入属性 webkit-playsinline，<br>
		2. Obj-C中，添加配置：webview.allowsInlineMediaPlayback = YES;<br>
	这样web视频就可以嵌入播放了，方案参考：[HTML5 inline video on iPhone vs iPad/Browser](http://stackoverflow.com/questions/3699552/html5-inline-video-on-iphone-vs-ipad-browser)

- 解决方案：
	在 video 上添加图层，视频事件添加到这个图层上。
- 上代码：
	```javascript
	var myVid = document.getElementById("video1");//视频video
	var opcover = document.getElementById("opcover");//控制图层
	var timer = setInterval(function(){//监听视频是否播放完成
		if(myVid.ended){
			console.log("播放结束！");
			clearInterval(timer);
		};
	},500);
	var clickTag = 1;//防止多次点击
	opcover.onclick = function(){
		if(clickTag){
			myVid.controls = false;
			myVid.play();
			clickTag = 0;
		}else{
			myVid.pause();
			clickTag = 1;
		}
	};
```


<br>
#### 2、H5上传照片，并且可对图片进行编辑（放大缩小裁剪）
- 方案参考：[H5拍照应用开发经历的那些坑儿](http://www.cnwander.com/?p=41) 
	或者 [htmlPhoto](https://github.com/jljsj33/htmlPhoto)


<br>
#### 3、欧洲杯专题活动
- H5本地存储 localStorage <br>
	local storage把只把数据存储在了客户端使用，不会发送的服务器上（除非你故意这样做）。<br>
	而且对于某一个域下来说，local storage是共享的（多个窗口共享一个“数据库”）。<br>
	localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。

- 获取用户微信头像（UnionID机制）
	参考资料：[获取用户基本信息](http://mp.weixin.qq.com/wiki/14/bb5031008f1494a59c6f71fa0f319c66.html)


<br>
#### 4、（大湖以爱之铭专题）上传图片的相关问题
- 类似朋友圈上传图片的功能；专题做了两个版本PC端跟WAP端。
- PC端的上传用的插件pulpload；[具体使用](https://github.com/moxiecode/plupload/tree/master/js)
- 后WAP端用的跟PC端改成了一样的，线上地址：[lovephoto](http://house.ifeng.com/lovephoto/show/rule)
```javascript
//fileReader 接口的使用
	var result=document.getElementById("result");
	var file=document.getElementById("file");

	//判断浏览器是否支持FileReader接口  
	if(typeof FileReader == 'undefined'){  
		result.InnerHTML="<p>你的浏览器不支持FileReader接口！</p>";  
		//使选择控件不可操作  
		file.setAttribute("disabled","disabled");  
	}

	function readAsDataURL(){
		//检验是否为图像文件
		var file = document.getElementById("file").files[0];
		if(!/image\/\w+/.test(file.type)){
			alert("看清楚，这个需要图片！");
			return false;
		}
		var reader = new FileReader();
		//将文件以Data URL形式读入页面
		reader.readAsDataURL(file);
		reader.onload=function(e){
			var result=document.getElementById("result");
			//显示文件
			result.innerHTML='<img src="' + this.result +'" alt="" />';
		}
	}

	function readAsBinaryString(){
		var file = document.getElementById("file").files[0];
		var reader = new FileReader();
		//将文件以二进制形式读入页面
		reader.readAsBinaryString(file);
		reader.onload=function(f){
			var result=document.getElementById("result");
			//显示文件
			result.innerHTML=this.result;
		}
	}

	function readAsText(){
		var file = document.getElementById("file").files[0];
		var reader = new FileReader();
		//将文件以文本形式读入页面
		reader.readAsText(file);
		reader.onload=function(f){
			var result=document.getElementById("result");
			//显示文件
			result.innerHTML=this.result;
		}
	}
```


<br>
#### 5、一些兼容性问题
	ios 中 标签不为<a>标签，点击会失效；改成<a>标签后，点击生效；
	输出文本注意 英文及数字 折行问题；


<br>
#### 6、手机专题中 横屏比竖屏显示效果更佳
	进入页面判断手机的方向；
```javascript
	window.addEventListenter('orientationchange',function(event){
		if(window.orientation == 180 || window.orientation == 0){
			console.log('竖屏');
		}
		if(window.orientation == 90 || window.orientation == -90){
			console.log('横屏');
		}
	})
```
css3判断手机竖/横屏
```css
	@media all and (orientation:landscape){
		/*横屏*/
	}

	@media all and (orientation:portrait){
		/*竖屏*/
	}
```


<br>
#### 7、Canvas 在高清屏下绘制图片、文字变模糊的解决方法
	引入 [hidpi-canvas-polyfill](https://github.com/jondavidjohn/hidpi-canvas-polyfill)
	接下来，修改绘制图片的代码
	将 init 函数修改成下面这样：
```javascript
	function init() {
	    var canvas = document.querySelector('canvas');
	    var ctx = canvas.getContext('2d');

	    // polyfill 提供了这个方法用来获取设备的 pixel ratio
	    var getPixelRatio = function(context) {
	        var backingStore = context.backingStorePixelRatio ||
	            context.webkitBackingStorePixelRatio ||
	            context.mozBackingStorePixelRatio ||
	            context.msBackingStorePixelRatio ||
	            context.oBackingStorePixelRatio ||
	            context.backingStorePixelRatio || 1;
	    
	        return (window.devicePixelRatio || 1) / backingStore;
	    };

	    var ratio = getPixelRatio(ctx);
	    
	    // 注意，这里的 width 和 height 变成了 width * ratio 和 height * ratio
	    ctx.drawImage(document.querySelector('img'), 0, 0, 300 * ratio, 90 * ratio);
	}

```
##### polyfill 的代码十分简短明了，它做了两件事：一是将 canvas 的高和宽分别乘以 ratio 将其放大，然后又用 CSS 将高和宽限制成初始的大小；二是 hack canvas 中常用的函数，如：fillRect, clearRect, lineTo, arc 等，将它们的参数都乘以 ratio，以方便我们可以像以前那样使用这些方法，而不用在传参的时候手动乘以 ratio。
	






	
