module.exports = {
	tasks: {
		cat:{
			src:["foo.js","bar.js"],
			dest:"dist/foobar.js"
		},
		// 合并css
		cat:{
			src:["foo.css","bar.css"],
			dest:"dist/foobar.css"
		}
	}
}