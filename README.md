#### 工作中碰到的一些问题及解决方法


一、put、get的区别？

	1.GET是从服务器上获取数据,POST是向服务器传送数据。
	2.GET 请求的数据附在RUL之后, POST把提交的数据放置在HTTP包的body中。
	3.GET、POST没有字数限制，限制的是URL,所以GET传送的数据不能大于2KB。
	4.POST比GET安全性高。但是GET执行效率高。
	5.GET、PUT、DELETE是幂等操作,POST不是。
	6.GET请求能够被缓存，GET请求会保存在浏览器的浏览记录中，以GET请求的URL能够保存为浏览器书签，而PUST不能


二、http的请求方法

	POST、DELETE、PUT、GET 增删改查  
	HEAD： 只请求页面的首部 
	OPTIONS	返回服务器支持的HTTP方法 
	CONNECT	转换为透明TCP/IP隧道的连接请求

	既然PUT和POST操作都是向服务器端发送数据的，
	那么两者有什么区别呢：
		POST主要作用在一个集合资源之上的（url），
		而PUT主要作用在一个具体资源之上的（url/xxx），
		通俗一下讲就是，如URL可以在客户端确定，那么可使用PUT，否则用POST。
	
三、什么时候用GET,什么时候用POST？
    查询数据用GET 提交数据用POST

四、apply、call、bind 的区别和相同
		相同：	1、改变函数的this的指向。
				2、第一个参数都是this要指向的对象。
				3、都可以利用后续参数传参。
		不同：  1、apply和call 都是对函数的直接调用，而bind方法返回的仍然是一个函数，因此后面还需要()来进行调用才可以。
				2、apply的参数是一个数组，call和bind是需要单独一个一个传参的

五、你知道哪些页面优化
	


六、页面静态化


七、cookie localstorage sessionstorage 的区别


八、onload、onready的区别，jquery里面是怎么实现的？


九、4.form中的input有哪些类型？
    // 10种
	// button
	// checkbox
	// radio
	// file
	// image
	// password
	// submit
	// reset
	// hidden
	// text


十.js中的3种弹出式消息提醒（警告窗口，确认窗口，信息输入窗口）的命令式什么？
alert()   警告窗口
confirm() 确认窗口
prompt 信息输入框

var a = confirm("是否确定删除");
 if( true == a ){
 	console.log("你点击的事确定按钮")
 }else{
 	console.log("你点击的事取消按钮")
 }

 var name = prompt("请输入你的名字","");
 if( name!=null && name!=""){
 	console.log("欢迎您"+name+"!")
 }

