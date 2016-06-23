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


- 以下为拓展：
	在iOS APP中使用网页视频，是可以禁止全屏播放的，方法如下：<br>
		1. 前端将video标签加入属性 webkit-playsinline，<br>
		2. Obj-C中，添加配置：webview.allowsInlineMediaPlayback = YES;<br>
	这样web视频就可以嵌入播放了，方案参考：[HTML5 inline video on iPhone vs iPad/Browser](http://stackoverflow.com/questions/3699552/html5-inline-video-on-iphone-vs-ipad-browser)

- 解决方案：
	在 video 上添加图层，视频事件添加到这个图层上。
	上代码：
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

#### 2、H5上传照片，并且可对图片进行编辑（放大缩小裁剪）
方案参考：[H5拍照应用开发经历的那些坑儿](http://www.cnwander.com/?p=41) 
	或者 [htmlPhoto](https://github.com/jljsj33/htmlPhoto)


#### 3、欧洲杯专题活动
- H5本地存储 localStorage 
	local storage把只把数据存储在了客户端使用，不会发送的服务器上（除非你故意这样做）。<br>
	而且对于某一个域下来说，local storage是共享的（多个窗口共享一个“数据库”）。<br>
	localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。

- 获取用户微信头像（UnionID机制）
	参考资料：[获取用户基本信息](http://mp.weixin.qq.com/wiki/14/bb5031008f1494a59c6f71fa0f319c66.html)


	
