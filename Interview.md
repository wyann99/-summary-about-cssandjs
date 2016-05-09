####1、已知有字符串foo='get-element-by-id',写一个function将其转化成驼峰表示法”getElementById”
- 方法1
```javascript
function changeCase(str){
		var Arr = str.split('-');
		var Arrb = [];
		for(var i=0;i<Arr.length;i++){
			if(i==0){
				Arrb[i] = Arr[i].toString().toLowerCase();
			}else{
				Arrb[i] = Arr[i].toString().substring(0,1).toUpperCase()+ Arr[i].toString().substring(1).toLowerCase();
			}
		}
		return Arrb.join('');
	}
	changeCase('get-element-by-id');
```
- 方法2











