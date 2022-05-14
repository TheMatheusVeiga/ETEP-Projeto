function setConfig(){
	var texts = {
		"title":"Mercado App"
	};
	document.title = texts.title;
	document.getElementById("navTitle").innerHTML = texts.title;
}

setConfig();