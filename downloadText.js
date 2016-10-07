function downloadTextFile(t, n) {
	//两个参数，t(string): 需要下载的文本(text)，n(string): 下载下来的文件名(name),格式：文件名.扩展名
	window.URL = window.URL || window.webkitURL;
	var bb = new Blob([t], {
		type: 'text/plain'
	});
	var a = document.createElement('a');
	a.download = n;
	a.href = window.URL.createObjectURL(bb);
	a.textContent = 'Download ready';
	a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':');
	a.click();
};