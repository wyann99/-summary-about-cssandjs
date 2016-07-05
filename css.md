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


