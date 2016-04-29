### 需求是手机端观看完视频 跳转到新页 用户可点击播放/暂停，但不可以快进
	*一开始是用的 video.js 插件：可监听视频的结束；但发现 iPhone 点击视频会自动弹开;
	*查看资料：禁止 iPhone Safari 视频自动全屏：
		可以在 video 标签加一个 `“webkit-playsinline” `属性，如下：
			<video id="video" width="" height="" webkit-playsinline></video>
		详情官方文档：[UIWebView Class Reference](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIWebView_Class/index.html)
		亲测：微博和客户端里无用，QQ和微信里可以
	
	*以下为拓展：
		在iOS APP中使用网页视频，是可以禁止全屏播放的，方法如下：
			1. 前端将video标签加入属性 webkit-playsinline，如：<video id="player" width="480" height="320" webkit-playsinline>；
			2. Obj-C中，添加配置：webview.allowsInlineMediaPlayback = YES;
	
		这样web视频就可以嵌入播放了，方案参考：[HTML5 inline video on iPhone vs iPad/Browser](http://stackoverflow.com/questions/3699552/html5-inline-video-on-iphone-vs-ipad-browser)

	*解决方案：
		在 video 上添加图层，视频事件添加到这个图层上。
		上代码：
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




