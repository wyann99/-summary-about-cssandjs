#### 改变文字的字体渐变
```css
	.element {
		background: -moz-linear-gradient(0deg, #0a5e84, #46feff);
		background: -webkit-gradient(linear,0 50%,100% 50%,from(#0a5e84),to(#46feff));
		background: -webkit-linear-gradient(0deg, #0a5e84, #46feff);
		background: -o-linear-gradient(0deg, #0a5e84, #46feff);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	
```


#### background-repeat 新增 属性值 round / space



#### input 类型的date 情况下不支持 placeholder 
桌面端（Mac）
Safari 不支持 datepicker，placeholder 正常显示。
Firefox 不支持 datepicker，placeholder 正常显示。
Chrome 支持 datepicker，显示 年、月、日 格式，忽略 placeholder。

移动端
iPhone5 iOS7 有 datepicker 功能，但是不显示 placeholder。
Andorid 4.0.4 无 datepicker 功能，不显示 placeholder

- 解决方法
```html
	<input type="text" placeholder="Date" onfocus="(this.type='data')" id="date">
```
- 因为text是支持placeholder的。因此当用户focus的时候自动把type类型改变为date，这样既有placeholder也有datepicker了。



#### placeholder line-height
- input 的 placeholder 会出现文本位置偏上的情况：
- PC端设置line-height 等于height 能够对齐，但是移动端仍然是偏上，解决方法：line-height:normal;



#### 移动端点击按钮的时候，该按钮背后会出现一个阴影。
- 手机网站上tap（轻触）该按钮时，背景高亮在作祟。
- 处理方法只要给a标签加上
```css
	a {
		-webkit-tap-highlight-color: transparent;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
	}
```


#### CSS3实现两行或多行文字，多余部分用省略号代替
```css
	/* -webkit-line-clamp 是一个不规范的属性，未出现在CSS规范草案中,IE跟火狐不支持，Safari跟Chrome支持 */
	/* 限制一个块元素显示的文本的行数。需要结合属性： */
	display:-webkit-box; /* 将对象作为弹性伸缩盒子模型显示 */
	-webkit-box-orient:vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
	text-overflow:ellipsis; 
	-webkit-line-clamp:<number>;
	height: 36px;
```


#### 手机端 动态改变标签中的内容 为空格 出出现不对齐 在元素上添加
```css
	vertical-align:middle;
```


#### 去除iPhone 的默认input样式
```css
	input {
		-webkit-appearance:none;
	}
```


#### 改变input 的 placeholder 颜色
```css
	input::-webkit-input-placeholder {
		color: #f99;	/* Webkit browsers */
	}
	input:-moz-placeholder {
		color: #f99;	/* Mozilla Firefox 4 to 18 */
	}
	input::-moz-placeholder {
		color: #f99;	/* Mozilla Firefox 19+ */
	}
	input:-ms-input-placeholder {
		color: #f99;	/* IE 10+ */
	}
```


#### font-face 运用
```html
	<!-- 要使用16进制，前缀&# + 图标 -->
	<i class="icon">&#x907;</i> 
```
```css
	@font-face {
		font-family: "icomoon";
		/*引入4种字体进行渲染*/
		src: url("../fonts/icomoon.eot") format("embedded-opentype"),
			 url("../fonts/icomoon.woff") format("woff"),
			 url("../fonts/icomoon.ttf") format("truetype"),
			 url("../fonts/icomoon.svg") format("svg");
		font-weight: normal;
		font-style: normal;
	}

	.icon {
		font-family: "icomoon";
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		/*防止出现锯齿*/
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/*改变图标颜色*/
		color: #f99;
	}
```
- 制作图标网站：[Icomoon](https://icomoon.io) and [图标制作及下载](https://icomoon.io/app/#/select)；
- 字体库[Fontsquirrel](http://www.fontsquirrel.com/fontface/generator)；
- 字体制作（ttf转eot/woff/svg）：[webfont-generator](https://www.fontsquirrel.com/tools/webfont-generator)
<br>


#### 1.0  transform3d
```css
    transform-style:flat/preserve-3d;
    translate3d(tx,ty,tz);
    scale3d(sx,sy,sz);
    rotate3d(rx,ry,rz,adeg);
```


#### 兼容低版本 border-radius
```css
.bor{
	border: 1px solid #333;
	padding: 60px 0;
	text-align:center;
	width: 200px;
	-webkit-border-radius: 8px;
	-moz-border-radius: 8px;
	border-radius: 8px;
	box-shadow: 0 0 10px #666;
	background: #ef9;
	behavior:url(PIE.htc);
}
```
- 详解：PIE.htc[zhangxinxu](http://www.zhangxinxu.com/wordpress/?p=967)


