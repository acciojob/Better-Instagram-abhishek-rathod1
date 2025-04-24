//your code here



function dragstartHandler(e){
	e.dataTransfer.setData("text",e.target.id);
		
}

function dragoverHandler(e) {
	e.preventDefault();
}

function dropHandler(e) {
	e.preventDefault();
	const draggedId = e.dataTransfer.getData("text");
	const draggedEl = document.getElementById(draggedId);
	const targetEl = e.target;
	const data = e.dataTransfer.getData("text");
	e.target.appendChild(document.getElementById(data));
}

