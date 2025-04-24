//your code here

let dragDiv = null;

function dragstartHandler(e){
	e.dataTransfer.setData("text",e.target.id);
		
}

function dragoverHandler(e) {
	e.preventDefault();
}

function dropHandler(e) {
	e.preventDefault();
	const data = e.dataTransfer.getData("text");
	e.target.appendChild(document.getElementById(data));
}

