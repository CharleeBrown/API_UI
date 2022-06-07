

const xhr = new XMLHttpRequest(),
	method = "GET",
	url = "https://testing-api-one.herokuapp.com/";

	function addInfo(){
var body = document.getElementsByTagName("body")[0];
xhr.open(method, url, true);
if(!('withCredentials' in xhr)){
	alert('No CORS');
}
else{
xhr.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		var newArr = JSON.parse(this.responseText);
	
		for (var i = 0; i < newArr.length; i++) {
			let divs = document.createElement("div");
			let texts = document.createTextNode(newArr[i].name);
			divs.appendChild(texts);
			body.appendChild(divs);
		}
	
	}

};
xhr.send();


}
}