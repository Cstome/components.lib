//Edit 2016-09-21 15:45:57
function getQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = document.location.search(reg);
		if (r != null) return unescape(r[2]); return null;
	}

//Query String Fromat: /url/?name1=value1&name2=value2
//usage: var querystring = getQueryString('name');